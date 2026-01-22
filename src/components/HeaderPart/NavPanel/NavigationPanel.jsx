import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavigationPanel.scss";
import logoFirm from "../../../images/logo/firma.png";

export const NavigationPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  let telNum = "+374 ** ** ** **";

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="container__nav">
        <NavLink to="/" className="firmLogo" onClick={closeMenu}>
          <img src={logoFirm} alt="logoFirm" />
        </NavLink>

        <div className={`nav__menu ${isOpen ? "open" : ""}`}>
          <ul className="nav__list">
            <li>
              <NavLink to="/services" onClick={closeMenu}>
                Մեր ծառայությունները
              </NavLink>
            </li>
            <li>
              <NavLink to="/how-it-works" onClick={closeMenu}>
                Ինչպես է դա աշխատում
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={closeMenu}>
                Մեր մասին
              </NavLink>
            </li>
            <li>
              <NavLink to="/partners" onClick={closeMenu}>
                Գործընկերներ
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={closeMenu}>
                Կապ մեզ հետ
              </NavLink>
            </li>
          </ul>

          <div className="mobile__tel">
            <span className="lang-box">ՀՅ</span>
            <span className="phone-box">✆ {telNum}</span>
          </div>
        </div>

        <div className="desktop__tel">
          <p>ՀՅ</p>
          <span>✆ {telNum}</span>
        </div>

        <div 
          className={`burger ${isOpen ? "active" : ""}`} 
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>

      <div 
        className={`nav-overlay ${isOpen ? "active" : ""}`} 
        onClick={closeMenu}
      ></div>
    </>
  );
};