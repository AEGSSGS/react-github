import React from "react";
import icon from "../img/logo-icon.svg"
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__container container">
          <a href="./index.html" className="foot__logo">
            <img
              className="foot__logo__img"
              src={icon}
              alt="AnsorMed"
            />
            <strong className="foot__logo__title">AnsorMed</strong>
          </a>

          <ul className="foot__list">
            <li className="foot__item">
              <a className="foot__link" href="#services">
                Xizmatlar
              </a>
            </li>
            <li className="foot__item">
              <a className="foot__link" href="#medicine">
                Dorilar
              </a>
            </li>
            <li className="foot__item">
              <a className="foot__link" href="#honey">
                Asal
              </a>
            </li>
            <li className="foot__item">
              <a className="foot__link" href="#contact">
                Kontaktlar
              </a>
            </li>
            <li className="foot__item">
              <a href="" className="foot__link">
                Blog
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
