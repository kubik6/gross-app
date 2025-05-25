import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import '@/components/header/header.scss'
import { useMediaQuery } from '@/hooks/useMediaQuery'

import { BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

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
              <li onClick={() => navigate('/about')}>About</li>
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
          <nav className="header__dropdown">
            <ul className="header__list">
              <li className="header__item" onClick={() => navigate('/')}>Vakansiyalar</li>
              <li className="header__item" onClick={() => navigate('/faq')}>FAQ</li>
              <li className="header__item" onClick={() => navigate('/about')}>About</li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
};

export default Header