import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa6';
import { IPalette } from '../models/colorpalette.interface';
import Image from 'next/image';
import ExportLogo from '../public/export-logo.svg';

interface IPrintPaletteProps {
  palette: IPalette;
}

export default function PrintPalette({ palette }: IPrintPaletteProps) {
  return (
    <div id="export">
      <div className="heading">
        <Image src={ExportLogo} alt="Export Logo" width={120} height={0} />
        <p>Your color palette</p>
      </div>
      <div className="export-containers">
        <div className="export-con-1">
          {palette?.colors.map((color, index) => (
            <div className="color-div" key={index}>
              <div
                className="color"
                style={{ backgroundColor: color.hex }}
              ></div>
              <div className="color-div-text">
                <p>{color.name}</p>
                <p>{color.hex}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="export-con-2">
          <h3>Explanation</h3>
          <p>{palette.paletteInfo}</p>
        </div>
      </div>
      <div className="bottom-link">gradien.vercel.app</div>
    </div>
  );
}
