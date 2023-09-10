import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';
import logo_header from '../../img/logo_header.png';
import white_beans from '../../img/white-beans.png';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  let background;
  let pageTitle;
  let page_beans;
  let pageDescription1;
  let pageDescription2;
  let page_button;
  let headerStyle = {};

  switch (location.pathname) {
    case '/':
      background = `${process.env.PUBLIC_URL}/images/Home.png`;
      pageTitle = 'Everything You Love About Coffee';
      page_beans = '.';
      pageDescription1 = 'We make every day full of energy and taste';
      pageDescription2 = 'Want to try our beans?';
      page_button = 'More';
      headerStyle = {
        background: `url(${background})`,
        height: '648px',
      };
      break;
    case '/our-coffee':
      background = `${process.env.PUBLIC_URL}/images/OurCoffee.png`;
      pageTitle = 'Our Coffee';
      headerStyle = {
        background: `url(${background})`,
        height: '260px',
      };
      break;
    case '/for-your-pleasure':
      background = `${process.env.PUBLIC_URL}/images/Pleasure.png`;
      pageTitle = 'For Your Pleasure';
      headerStyle = {
        background: `url(${background})`,
        height: '260px',
      };
      break;
    default:
      background = '/';
      pageTitle = 'Our Coffee';
      headerStyle = {
        background: `url(${background})`,
        height: '260px',
      };
      break;
  }

  return (
    <header className="Header" style={headerStyle}>
      <nav>
        {window.innerWidth < 600 ? (
          <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        </div>
        ) : (
          <>
            <Link to="/"><img src={logo_header} alt="logo_header" /> Coffee house</Link>
            <Link to="/our-coffee">Our Coffee</Link>
            <Link to="/for-your-pleasure">For Your Pleasure</Link>
          </>
        )}

        {window.innerWidth < 600 && isMenuOpen && (
          <HamburgerMenu isOpen={isMenuOpen} toggleMenu={() => setIsMenuOpen(!isMenuOpen)} />
        )}
      </nav>
      <div className="Header_title">
        <h1>{pageTitle}</h1>
        {page_beans && (
          <div className="beans_white">
            <img src={white_beans} alt="white_beans" />
          </div>
        )}
        <h2>{pageDescription1}</h2>
        <h2>{pageDescription2}</h2>
        {page_button && <button>{page_button}</button>}
      </div>
    </header>
  );
};

export default Header;