import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/Logo.svg';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export const Navbar = () => {
  const ref = useRef();
  const show = () => {
    ref.current.classList.toggle('mobile');
  };

  return (
    <div className="menu sticky top-0">
      <div className="menu_inner">
        <Link to="/" className="mobile-logo"><img src={Logo} alt="Logo" /></Link>
        <nav ref={ref} className="nav">
          <Link to="/blog" className="link" onClick={show}>Blog</Link>
          <Link to="/about" className="link" onClick={show}>About Me</Link>
          <Link to="/" className="desctop-logo px-8" onClick={show}><img src={Logo} alt="Logo" /></Link>
          <Link to="/projects" className="link" onClick={show}>Projects</Link>
          <Link to="/contacts" className="link" onClick={show}>Contacts</Link>
          <button className="nav-btn close" onClick={show}>
            <CloseIcon />
          </button>
        </nav>
        <button className="nav-btn" onClick={show}>
          <MenuIcon />
        </button>
      </div>
    </div>
  );
};
