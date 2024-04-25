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
    color: 'gold'; // only gold or silver
    message: 'a message why this color works well with the person and what kinda feelings it envokes';
  };
}

export interface IPalletteColor {
  name: string;
  hex: string;
  message: string;
}
