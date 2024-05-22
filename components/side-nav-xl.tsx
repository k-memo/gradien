import Link from 'next/link';
import { useState } from 'react';
import { FiBookmark } from 'react-icons/fi';
import { RiInformationLine } from 'react-icons/ri';
import { SlPlus } from 'react-icons/sl';
import CloseS from '../public/close-s.svg';
import Menu from '../public/menu.svg';
import Logo from './logo';
import Image from 'next/image';
export default function SideNavXl() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log('Toggling menu');
    setIsOpen(!isOpen);
  };
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
        <div className={`links ${isOpen ? 'open' : 'closed'}`}>
          <Link className="bookmark" href={''}>
            <FiBookmark />
          </Link>
          <Link className="plus" href={''}>
            <SlPlus size={'40px'} />
          </Link>
          <Link className="info" href={''}>
            <RiInformationLine />
          </Link>
        </div>
      </div>
      <div className="copyright-icon">
        <Link href={'copyright'}>©</Link>
      </div>
    </div>
  );
}
