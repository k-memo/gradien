'use client';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../components/logo';
import Link from 'next/link';

export default function Greeting() {
  return (
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
          <Link
            href="generate"
            className="btn-main btn"
            data-testid="get-started"
          >
            Get Started
            <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
          </Link>
        </div>
      </div>
    </section>
  );
}
