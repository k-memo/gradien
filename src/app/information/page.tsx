import Link from 'next/link';
import Gradien from '../../../public/blurgradien.png';
import { FaArrowLeft } from 'react-icons/fa';
import Logo from '../../../components/logo';

export default function Information() {
  return (
    <section id="information">
      <div className="info-content">
        <div className="logo">
          <Link href={'/'} className="home">
            <FaArrowLeft />
          </Link>
          <Logo />
          <div></div>
        </div>
        <div className="welcome">
          <h2>Welcome to Gradien, </h2>
          <p>
            your personalized color palette generator! Our innovative platform
            is designed to help you discover the perfect colors that enhance
            your natural beauty, based on seasonal color theory.
          </p>
        </div>
        <div className="info-points">
          <div className="point">
            <div className="number">
              <span>i</span>
            </div>
            <p>
              Using Gradien is simple and intuitive:
              <br /> - Upload an image of your face. <br />- Select your skin,
              eye, and hair color. <br />- Generate a unique color palette
              tailored just for you.
              <br />
            </p>
          </div>
          <div className="point">
            <div className="number">
              <span>i</span>
            </div>
            <p>
              Gradien uses the principles of seasonal color theory to ensure the
              colors we recommend harmonize perfectly with your personal
              features. Whether you are updating your wardrobe or choosing new
              makeup ,we approach aesthetically pleasing results that make you
              shine.
            </p>
          </div>
          <div className="point">
            <div className="number">
              <span>i</span>
            </div>
            <p>
              Join us today and uncover the colors that highlight your natural
              beauty with Gradien!
              <Link href={'/generate'} className="btn btn-second">
                Generate your palette!
              </Link>
            </p>
          </div>
        </div>

        <div className="bye">
          You can learn more about seasonal colortheory
          <Link
            href={
              'https://londoncollegeofstyle.com/seasonal-colour-analysis-introduction/'
            }
          >
            {' '}
            here
          </Link>
        </div>
      </div>
    </section>
  );
}
