import React from "react";
import img1 from "../img/logo-icon.svg"
import Btn from "./Btn";
export default function Header() {
  return (
    <>
      <nav className="nav">
        <div className="nav__inner">
          <a href="./index.html" className="nav__logo">
            <img className="nav__img" src={img1} alt="AnsorMed" />
            <strong className="nav__logo__title">AnsorMed</strong>
          </a>

          <ul className="nav__list">
            <li className="nav__item">
              <a href="#services" className="nav__link">
                Xizmatlar
              </a>
            </li>
            <li className="nav__item">
              <a href="#medicine" className="nav__link">
                Dorilar
              </a>
            </li>
            <li className="nav__item">
              <a href="#honey" className="nav__link">
                Asal
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                Kontaktlar
              </a>
            </li>
            <li className="nav__item">
              <a href="" className="nav__link">
                Blog
              </a>
            </li>
          </ul>

        <Btn>Qabulga yozilish</Btn>
          <div className="menu">
            <div className="burger"></div>
          </div>
        </div>
      </nav>
    </>
  );
}
