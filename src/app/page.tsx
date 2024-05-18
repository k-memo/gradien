'use client';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../../components/logo';
import Wave from '../../public/wave.svg';
import './style/application.scss';
import Link from 'next/link';
import Contact from '../../components/contact';
import About from '../../components/about';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import SideNavXl from '../../components/side-nav-xl';
import Greeting from '../../components/greeting';

export default function Home() {
  return (
    <>
      <SideNavXl />
      <main className="landing-page">
        {/*Parallax
        <Parallax pages={2} style={{ top: '0', left: '0' }}>
          <ParallaxLayer offset={0} speed={0.5}>
            <Greeting />
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={3.5}>
            <div className="wave">
              <img src={Wave.src} alt="wave" className="wave-img" />
              <About />
            </div>
          </ParallaxLayer>
        </Parallax>
        */}
        <Greeting />
      </main>

      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
