import React from "react";
import "@/components/footer/footer.scss";

import { FiInstagram } from "react-icons/fi";
import { FaFacebook, FaTelegram, FaLinkedin } from "react-icons/fa";

const Footer:React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__column">
          <h4 className="footer__column-title">Hellojob.az</h4>
          <ul className="footer__list">
            <li className="footer__list-item">
              <a href="#!" className="footer__link">Şirkətlər</a>
            </li>
            <li className="footer__list-item">
              <a href="#!" className="footer__link">Bloq</a>
            </li>
            <li className="footer__list-item">
              <a href="#!" className="footer__link">Cavablar</a>
            </li>
            <li className="footer__list-item">
              <a href="#!" className="footer__link">Saytda reklam</a>
            </li>
          </ul>
        </div>

        <div className="footer__column">
          <h4 className="footer__column-title">Elanlar</h4>
          <ul className="footer__list">
            <li className="footer__list-item">
              <a href="#!" className="footer__link">Bütün vakansiyalar</a>
            </li>
            <li className="footer__list-item">
              <a href="#!" className="footer__link">Bütün CV-lər</a>
            </li>
            <li className="footer__list-item">
              <a href="#!" className="footer__link">Elan yerləşdir</a>
            </li>
          </ul>
        </div>

        <div className="footer__column">
          <h4 className="footer__column-title">Digər</h4>
          <ul className="footer__list">
            <li className="footer__list-item">
              <a href="#!" className="footer__link">Freelance işlər</a>
            </li>
            <li className="footer__list-item">
              <a href="#!" className="footer__link">Part-time işlər</a>
            </li>
            <li className="footer__list-item">
              <a href="#!" className="footer__link">Təcrübə proqramları</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-left">
          <div className="footer__text">
          &copy; 2025 Hellojob.az. Bütün hüquqlar qorunur.
          </div>
        </div>
        <div className="footer__bottom-right">
          <div className="footer__icon-box">
          <FiInstagram />
          <FaFacebook />
          <FaTelegram />
          <FaLinkedin />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;