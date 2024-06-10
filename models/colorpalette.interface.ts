import z from 'zod';

export interface IPalette {
  initialColor: {
    eyes: string;
    hair: string;
    skin: string;
  };

  userColorDisposition: string; // Text for the user, telling them what kind of color type they have etc

  colors: IPalletteColor[];

  paletteInfo: string; // Explaining the general color palette, and why they were chosen for the user and the color psychology behind it

  jewelery: {
    color: string; // only gold or silver
    message: string;
  };
}

export interface IPalletteColor {
  name: string;
  hex: string;
  message: string;
}

// ----------------------------------------------------- ZOD
export const ZIPaletteColor = z.object({
  name: z.string(),
  hex: z.string(),
  message: z.string(),
});

export const ZIPalette = z.object({
  initialColor: z.object({
    eyes: z.string(),
    hair: z.string(),
    skin: z.string(),
  }),
  userColorDisposition: z.string(),
  colors: z.array(ZIPaletteColor),
  paletteInfo: z.string(),
  jewelery: z.object({
    color: z.enum(['gold', 'silver']),
    message: z.string(),
  }),
});
