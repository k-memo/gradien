export interface IPalette {
  initialColor: {
    eyes: string;
    hair: string;
    skin: string;
  };

  colors: IPalletteColor[];

  jewelery: {
    color: "gold"; // only gold or silver
    message: "a message why this color works well with the person and what kinda feelings it envokes";
  };
}

export interface IPalletteColor {
  name: string;
  hex: string;
  message: string;
}
