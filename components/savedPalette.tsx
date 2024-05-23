import Link from 'next/link';
import { IGetUserPalette } from '../models/getUserPalette.interface';
import { IoMdOpen } from 'react-icons/io';

interface IProps {
  palette: IGetUserPalette;
}

export default function SavedPalette({ palette }: IProps) {
  return (
    <div key={palette.id} className="saved-palette">
      <Link href={`/palettes/${palette.id}`} className="palette-name">
        {palette.name} <IoMdOpen />
      </Link>
      <div className="palette-colors">
        {palette.palleteJson.colors?.map((color, index) => (
          <div
            key={index}
            className="palette-color"
            style={{
              backgroundColor: color.hex,
              width: '20px',
              height: '20px',
              display: 'inline-block',
              margin: '2px',
            }}
          />
        ))}
      </div>
    </div>
  );
}
