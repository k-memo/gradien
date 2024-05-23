import Link from 'next/link';
import { IGetUserPalette } from '../models/getUserPalette.interface';

interface IProps {
  palette: IGetUserPalette;
}

export default function SavedPalette({ palette }: IProps) {
  return (
    <div key={palette.id} className="saved-palette">
      <Link href={`/detailedView/${palette.id}`}>{palette.name}</Link>
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
