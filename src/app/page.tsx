import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaRegEnvelope } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import { SlLocationPin } from 'react-icons/sl';
import Logo from '../../components/logo';

import './style/application.scss';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="landing-page">
      <section className="landing-page-greeting">
        <div className="gradient-bg">
          <div className="gradient-container">
            <div className="g1"></div>
            <div className="g2"></div>
            <div className="g3"></div>
            <div className="g4"></div>
            <div className="g6"></div>
          </div>
        </div>
        <div className="wave-div">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 640">
  <path fill="#ffffff" fill-opacity="1" d="M0,192L48,208C96,224,192,256,288,272C384,288,480,288,576,266.7C672,245,768,203,864,165.3C960,128,1056,96,1152,74.7C1248,53,1344,43,1392,37.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
</svg>

        </div>
        <div className="landing-text">
          <div className="heading">
            <h1>
              GR
              <Logo />
              DIEN
            </h1>
            <p className="sub">FIND YOUR COLOR PALETTE</p>
          </div>
          <div>
            <Link href="generate" className="btn-main btn">
              Get Started
              <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
