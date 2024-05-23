import { IPalette } from './colorpalette.interface';

export interface IGetUserPalette {
  id: string;
  name: string;
  desc?: string;
  userId: string;
  palleteJson: IPalette;
  createdAt: string;
  updatedAt: string;
}
