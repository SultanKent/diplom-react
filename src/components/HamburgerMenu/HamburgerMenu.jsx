import React from 'react';
import { Link } from 'react-router-dom';
import './HamburgerMenu.scss';
import logo_header from '../../img/logo_header.png';

const HamburgerMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`HamburgerMenu ${isOpen ? 'open' : ''}`}>
      <div className="menu-content">
        <Link to="/"><img src={logo_header} alt="logo_header" /> Coffee house</Link>
        <Link to="/our-coffee">Our Coffee</Link>
        <Link to="/for-your-pleasure">For Your Pleasure</Link>
      </div>
    </div>
  );
};

export default HamburgerMenu;
