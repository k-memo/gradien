import { IPalette } from './colorpalette.interface';

export interface ISavePalette {
  paletteName: string;
  paletteDesc: string;
  palette: IPalette;
}
