import { NextRequest, NextResponse } from 'next/server';
import { IPalette } from '../../../../models/colorpalette.interface';
import prisma from '../../../../lib/prisma';
import { getServerSideProps } from 'next/dist/build/templates/pages';
import { getServerSession } from 'next-auth';
import authOptions from '../../../../lib/authOptions';
import { NextApiRequest, NextApiResponse } from 'next';

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
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }

    const paletteData: ISavePalette = await req.json();
    const userEmail = session.user?.email;

    const newPalette = await prisma.palette.create({
      data: {
        name: paletteData.paletteName,
        description: paletteData.paletteDesc,
        user: { connect: { email: userEmail } },
        palleteJson: JSON.stringify(paletteData.palette),
      },
    });
    return NextResponse.json('', { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
}
