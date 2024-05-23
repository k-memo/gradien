import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import authOptions from '../../../../lib/authOptions';
import prisma from '../../../../lib/prisma';

interface ISession {
  user: {
    name: string;
    email: string;
    image: string;
  };
  expires: string;
}

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      // @ts-ignore
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }

    const userEmail = (session as any).user?.email;

    const pallettes = await prisma.palette.findMany({
      where: {
        user: { email: userEmail },
      },
    });

    return NextResponse.json(pallettes, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
}
