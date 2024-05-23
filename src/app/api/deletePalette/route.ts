import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import authOptions from '../../../../lib/authOptions';
import prisma from '../../../../lib/prisma';
import { IPalette } from '../../../../models/colorpalette.interface';

export interface ISavePalette {
  paletteName: string;
  paletteDesc: string;
  palette: IPalette;
}

interface ISession {
  user: {
    name: string;
    email: string;
    image: string;
  };
  expires: string;
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const session: ISession | null = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json('Unauthorized', { status: 401 });
    }

    const paletteData: { id: string } = await req.json();
    const userEmail = session.user?.email;

    const deletePalette = await prisma.palette.delete({
      where: {
        id: paletteData.id,
        user: {
          email: userEmail,
        },
      },
    });

    return NextResponse.json('Deleted Successfully', { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
}
