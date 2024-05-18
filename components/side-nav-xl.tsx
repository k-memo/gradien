import { useState } from 'react';
import Link from 'next/link';
import Logo from './logo';
import Menu from '../public/menu.svg';

export default function SideNavXl() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="sidenav">
      <div className="logo">
        <Logo />
      </div>
      <div className="nav-desktop">
        <div className="menu" onClick={toggleMenu}>
          <img src={Menu.src} />
        </div>
        <div className={`links ${isOpen ? 'open' : ''}`}>
          <Link href={''}>Link1</Link>
          <Link href={''}>Link1</Link>
          <Link href={''}>Link1</Link>
        </div>
      </div>
      <div className="copyright">
        <Link href={''}>©</Link>
      </div>
    </div>
  );
}
