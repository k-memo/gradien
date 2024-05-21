import { useState } from 'react';
import Link from 'next/link';
import Logo from './logo';
import Menu from '../public/menu.svg';
import Close from '../public/close.svg';
import CloseS from '../public/close-s.svg';
import { FiUser } from 'react-icons/fi';
import { SlPlus } from 'react-icons/sl';
import { FiBookmark } from 'react-icons/fi';
import { FaCirclePlus } from 'react-icons/fa6';
import { RiInformationLine } from 'react-icons/ri';
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
          {isOpen ? <img src={CloseS.src} /> : <img src={Menu.src} />}
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
      <div className="copyright">
        <Link href={''}>©</Link>
      </div>
    </div>
  );
}
