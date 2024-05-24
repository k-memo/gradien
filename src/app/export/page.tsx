import ExportLogo from '../../../public/export-logo.svg';
import Image from 'next/image';

export default function Home() {
  return (
    <section id="export">
      <div className="heading">
        <Image src={ExportLogo} alt="Export Logo" width={120} height={0} />
        <p>Your color palette</p>
      </div>
      <div className="export-containers">
        <div className="export-con-1">
          <div className="color-div">
            <div className="color"></div>
            <span>Colorname</span>
          </div>
        </div>
        <div className="export-con-2">
          <h3>Explanation</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            atque molestiae dolores, unde et harum, nemo pariatur officiis
            dolorum earum possimus rem laborum cupiditate suscipit. Perspiciatis
            laboriosam obcaecati amet ducimus.
          </p>
        </div>
      </div>
      <div className="bottom-link">gradien.vercel.app</div>
    </section>
  );
}
