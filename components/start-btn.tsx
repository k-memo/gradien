import Image from 'next/image';
import './style/application.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function StartBtn() {
  return (
    <main>
      Hello
      <br />
      <button className="btn-main">Test</button>
      <br />
      <button className="btn-special">
        <div className="circle-icon">
          <div className="circle"></div>
          <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
        </div>
        Get Started
      </button>
      <button className="btn-second">
        Next <FontAwesomeIcon icon={faArrowRight} className="icon" />
      </button>
      <button className="btn-img">
        <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
        <span>camera</span>
      </button>
    </main>
  );
}
