import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import logo_footer from '../../img/logo_footer.png'
import black_beans from '../../img/black-beans.png';

const Footer = () => {
  return (
    <footer className='Footer'>
      <nav>
        <Link to="/"> <img src={logo_footer} alt="logo_footer" /> Coffee house</Link>
        <Link to="/our-coffee">Our Coffee</Link>
        <Link to="/for-your-pleasure">For Your Pleasure</Link>
      </nav>
      <div className="beans_black">
          <img src={black_beans} alt="black_beans" />
      </div>
    </footer>
  );
};

export default Footer;