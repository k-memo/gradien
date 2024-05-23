import Link from 'next/link';
import { useState } from 'react';
import { FiBookmark } from 'react-icons/fi';
import { RiInformationLine } from 'react-icons/ri';
import { SlPlus } from 'react-icons/sl';
import CloseS from '../public/close-s.svg';
import Menu from '../public/menu.svg';
import Logo from './logo';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

export default function SideNavXl() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log('Toggling menu');
    setIsOpen(!isOpen);
  };
  const { data: session, status } = useSession();
  const loading = status === 'loading';

  return (
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
          {!loading && session && (
            <Link className="bookmark" href="/savedPalettes">
              <FiBookmark />
            </Link>
          )}
          <Link className="plus" href="">
            <SlPlus size={'40px'} />
          </Link>
          <Link className="info" href="">
            <RiInformationLine />
          </Link>
        </div>
      </div>
      <div className="copyright-icon">
        <Link href="copyright">©</Link>
      </div>
    </div>
  );
}
