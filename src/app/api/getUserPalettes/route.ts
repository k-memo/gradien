import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import authOptions from '../../../../lib/authOptions';
import prisma from '../../../../lib/prisma';
import { IPalette } from '../../../../models/colorpalette.interface';

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
    const session: ISession | null = await getServerSession(authOptions);

    if (!session) {
      // @ts-ignore
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }

    const userEmail = session.user?.email;

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
