import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaRegEnvelope } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import Logo from "../../components/logo";

import "./style/application.scss";
import Link from "next/link";

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
      <section id="about">
        <h2>
          WHY YOU NEED <br />
          COLOR ANALYSIS
        </h2>
        <div className="bullet-points">
          <div className="points">
            <div>
              <span className="emoji">🎨</span>
              <h4>PERSONALIZED STYLE</h4>
              <p>Discover your colors for effortless, flattering outfits.</p>
            </div>
            <div>
              <span className="emoji">👔</span>
              <h4>PROFESSIONAL IMAGE</h4>
              <p>Project competence with a polished appearance.</p>
            </div>
          </div>
          <div className="points">
            <div>
              <span className="emoji">💃</span>
              <h4>CONFIDENCE BOOST</h4>
              <p>Feel confident and make lasting impressions.</p>
            </div>
            <div>
              <span className="emoji">👗</span>
              <h4>VERSATILE COORDINATION</h4>
              <p>Mix and match effortlessly for cohesive style.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <h2>CONTACT US</h2>
        <p className="contact-text">
          Have a question or just want to say hello? We&apos;d love to hear from
          you! Feel free to reach out to us using the contact form, or connect
          with us via email or phone.
        </p>
        <div className="contact-point">
          <FiPhone />
          <p>
            <a href="tel:0000 00000000">0000 00000000</a>
          </p>
        </div>
        <div className="contact-point">
          <FaRegEnvelope />
          <p>
            <a href="mailto:0000000@0000.com">0000000@0000.com</a>
          </p>
        </div>
        <div className="contact-point">
          <SlLocationPin />
          <p>000000000000000000</p>
        </div>

        <div className="contact-form">
          <form action="/submit" method="post">
            <label htmlFor="email">Email:</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email@mail.com"
              required
            />
            <br />
            <br />
            <label htmlFor="message">Message:</label>
            <br />
            <textarea
              id="message"
              name="message"
              rows={4}
              cols={50}
              required
            ></textarea>
            <br />
            <br />
            <input type="submit" value="Submit" className="btn-main" />
          </form>
        </div>
      </section>

      <footer>
        <p>© Datenschutz | Impressum</p>
      </footer>
    </main>
  );
}
