import Image from "next/image";
import "./style/application.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


export default function Home() {
  return (
    <main>
      <button className="btn-main">
        Test
      </button><br/>
      <button className="btn-special">
        <div className="circle-icon">
          <div className="circle">
          </div>
          <FontAwesomeIcon icon={faArrowRight} className="arrow-right icon" />
        </div>
        Get Started
      </button>
      <button className="btn-second">
        Next <FontAwesomeIcon icon={faArrowRight} className="arrow-right icon" />
      </button>
      <button className="btn-img">
      <FontAwesomeIcon icon={faArrowRight} className="arrow-right icon" />
      <span>camera</span>
      </button>
    </main>
  );
}
