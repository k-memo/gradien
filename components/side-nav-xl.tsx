import Link from 'next/link';
import { useState } from 'react';
import { FiBookmark, FiInfo } from 'react-icons/fi';
import { SlPlus } from 'react-icons/sl';
import CloseS from '../public/close-s.svg';
import Menu from '../public/menu.svg';
import Logo from './logo';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

export default function SideNavXl() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleBookmarkClick = () => {
    if (session) {
      window.location.href = '/savedPalettes';
    } else {
      setShowLoginPrompt(true);
    }
  };

  return (
    <>
      <div className="sidenav">
        <div className="logo">
          <Logo />
        </div>
        <div className="nav-desktop">
          <div className="menu" onClick={toggleMenu}>
            {isOpen ? (
              <Image src={CloseS} alt="Close menu" />
            ) : (
              <Image src={Menu} alt="Open menu" />
            )}
          </div>
          <div className={`side-links ${isOpen ? 'open' : 'closed'}`}>
            <button
              className="saved-link bookmark"
              onClick={handleBookmarkClick}
            >
              <FiBookmark />
            </button>
            <Link className="plus" href="/generate">
              <SlPlus size={'40px'} />
            </Link>
            <Link className="info" href="/information">
              <FiInfo />
            </Link>
          </div>
        </div>

        <div className="copyright-icon">
          <Link href="copyright">©</Link>
        </div>
      </div>

      <div>
        {showLoginPrompt && (
          <div className="login-prompt-container">
            <div className="login-prompt">
              <p>Please log in to view saved palettes</p>
              <button onClick={() => setShowLoginPrompt(false)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
