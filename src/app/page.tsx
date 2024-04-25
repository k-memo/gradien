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
