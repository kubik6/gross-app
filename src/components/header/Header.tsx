import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMediaQuery } from '@/hooks/useMediaQuery'

// styles and icons
import '@/components/header/header.scss'
import { BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate()
  const isMobile = useMediaQuery("(max-width: 769px)")
  const menuRef = useRef<HTMLDivElement>(null);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return !isMobile ? (
    <>
      <div className='header-main'>
        <div className='header-main__left-box'>
          <div className='header-main__navigate'>
            <ul>
              <li onClick={() => navigate('/gross-app/')}>Vakansiyalar</li>
              <li onClick={() => navigate('/gross-app/faq')}>FAQ</li>
              <li onClick={() => navigate('/gross-app/favorites')}>Favorites</li>
              <li onClick={() => navigate('/gross-app/about')}>About</li>
              <li onClick={() => navigate('/gross-app/companies')}>Companies</li>
              <li onClick={() => navigate('/gross-app/create-cv')}>Create CV</li>
            </ul>
          </div>
        </div>
        <div className='header-main__right-box'>
        </div>
      </div>
      <div className='header-main__bottom-line'>
        <div>
          <h1>GROSS</h1>
          <h3>Build your life</h3>
        </div>
      </div>
    </>
  ) : (
    <>
      <header className="header">
        <div className="header__container">
          <div className="header__logo">Gross</div>
          <button className="header__menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
            {menuOpen ? <IoClose /> : <BiMenu />}
          </button>
        </div>
        {menuOpen && (
          <nav className="header__dropdown" ref={menuRef}>
            <ul className="header__list">
              <li className="header__item" onClick={() => handleNavigate('/gross-app/')}>Vakansiyalar</li>
              <li className="header__item" onClick={() => handleNavigate('/gross-app/faq')}>FAQ</li>
              <li className="header__item" onClick={() => handleNavigate('/gross-app/favorites')}>Favorites</li>
              <li className="header__item" onClick={() => handleNavigate('/gross-app/about')}>About</li>
              <li className="header__item" onClick={() => navigate('/gross-app/companies')}>Companies</li>
              <li className="header__item" onClick={() => navigate('/gross-app/create-cv')}>Create CV</li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
};

export default Header