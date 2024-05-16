import React, { useState } from 'react';
import Logo from './logo';

export default function SideNavXl() {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    setIsOpen(true);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  const handleLinkClick = event => {
    closeNav(); // Close the side navigation when a link is clicked
    event.preventDefault(); // Prevent default link behavior
  };

  return (
    <div className={`sidenav ${isOpen ? 'open' : ''}`}>
      <div className="logo" onClick={closeNav}>
        <Logo />
      </div>
      <div>
        <span className="closebtn" onClick={closeNav}>
          | | |
        </span>
        <a href="#" onClick={handleLinkClick}>
          About
        </a>
        <a href="#" onClick={handleLinkClick}>
          Services
        </a>
        <a href="#" onClick={handleLinkClick}>
          Clients
        </a>
        <a href="#" onClick={handleLinkClick}>
          Contact
        </a>
      </div>
      <div className="copyright">©</div>
    </div>
  );
}
