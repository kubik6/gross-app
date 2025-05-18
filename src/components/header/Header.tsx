import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import '@/components/header/header.scss'
import { useMediaQuery } from '@/hooks/useMediaQuery'

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate()
  const isMobile = useMediaQuery("(max-width: 769px)")

  // const signIn = (): void => {
  //   navigate('/login')
  // }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return !isMobile ? (
    <>
      <div className='header-main'>
        <div className='header-main__left-box'>
          {/* <div className='header-main__logo' onClick={() => navigate('/')}>
            LOGO
          </div> */}
          <div className='header-main__navigate'>
            <ul>
              <li onClick={() => navigate('/')}>Vakansiyalar</li>
              <li onClick={() => navigate('/faq')}>FAQ</li>
              {/* <li>Şirkətlər</li>
                  <li>Vəzifələr</li> */}
            </ul>
          </div>
        </div>
        <div className='header-main__right-box'>
          {/* <button onClick={signIn}>Qeydiyyat</button> */}
        </div>
      </div>
      <div className='header-main__bottom-line'>
        <h1>GROSS</h1>
        <h3>Your path start here</h3>
      </div>
    </>
  ) : (
    <>
     <header className="header">
      <div className="header__container">
        <div className="header__logo">Gross</div>
        <button className="header__menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          <span className="header__menu-icon"></span>
        </button>
      </div>
      {menuOpen && (
        <nav className="header__dropdown">
          <ul className="header__list">
            <li className="header__item" onClick={() => navigate('/faq')}>FAQ</li>
            <li className="header__item" onClick={() => navigate('/')}>Vakansiyalar</li>
          </ul>
        </nav>
      )}
    </header>
    </>
  );
};

export default Header