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
    const session: ISession | null = await getServerSession(
      req as unknown as NextApiRequest,
      {
        ...res,
        getHeader: (name: string) => res.headers?.get(name),
        setHeader: (name: string, value: string) =>
          res.headers?.set(name, value),
      } as unknown as NextApiResponse,
      authOptions,
    );

    if (!session) {
      return NextResponse.json('Unauthorized', { status: 401 });
    }

    const paletteData: {id: string} = await req.json();
    const userEmail = session.user?.email;

    const deletePalette = await prisma.palette.delete({
      where : {
        id: paletteData.id,
        user: {
          email: userEmail
        }
      }
    })

    return NextResponse.json('Deleted Successfully', { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
}
