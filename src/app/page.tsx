'use client';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../../components/logo';
import Wave from '../../public/wave.png';
import './style/application.scss';
import Link from 'next/link';
import Contact from '../../components/contact';
import About from '../../components/about';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import SideNavXl from '../../components/side-nav-xl';

export default function Home() {
  return (
    <>
      <SideNavXl />
      <main className="landing-page">
        <Parallax pages={2} style={{ top: '0', left: '0' }}>
          <ParallaxLayer offset={0} speed={0.5}>
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
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="arrow-right"
                    />
                  </Link>
                </div>
              </div>
            </section>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={3.5}>
            <div className="wave">
              <img src={Wave.src} alt="wave" className="wave-img" />
            </div>
          </ParallaxLayer>
        </Parallax>
      </main>
    </>
  );
}
