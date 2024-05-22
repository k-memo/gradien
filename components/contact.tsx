import React from 'react';
import Image from 'next/image';
import { FaRegEnvelope } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import { SlLocationPin } from 'react-icons/sl';
import ContactGradien from '../public/contact-gradien.png';
import Vector2 from '../public/vector2.png';
import Link from 'next/link';

export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-content">
        <Image
          className="contact-gradien"
          src={ContactGradien.src}
          alt="gradien box"
        />

        <div className="text">
          <h2>CONTACT US</h2>
          <p className="contact-text">
            Have a question or just want to say hello? We&apos;d love to hear
            from you! Feel free to reach out to us using the contact form, or
            connect with us via email or phone.
          </p>
          <div className="contact-point">
            <FiPhone />
            <p>
              <a href="tel:0000 00000000">+43 650 4508099</a>
            </p>
          </div>
          <div className="contact-point">
            <FaRegEnvelope />
            <p>
              <a href="mailto:0000000@0000.com">contact@gardien.com</a>
            </p>
          </div>
          <div className="contact-point">
            <SlLocationPin />
            <Link href={'https://maps.app.goo.gl/CjrVo78xhxyreKhn9'}>
              Urstein Süd 5, Salzburg
            </Link>
          </div>
        </div>
      </div>

      <div className="vector">
        <Image src={Vector2.src} alt="wave" className="vector-img" />
      </div>
    </section>
  );
}
