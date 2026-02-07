import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import nav from "./NavigationPanel.module.scss";
import {logos} from "../../../assets/images"

export const NavigationPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  let telNum = "+374 ** ** ** **";

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

useEffect(() => {
const handleScroll = () =>{
  if(window.scrollY > 20){
    setIsScrolled(true);
  }else{
    setIsScrolled(false)
  }
};
window.addEventListener("scroll" , handleScroll);
return () => {
  window.removeEventListener("scroll", handleScroll);
}
}, []);

  return (
    
    <div className={`${nav.wrapper} ${isScrolled ? nav.scrolled : ""}`}>
      <nav className={nav.container}>
  <a href="/" className={nav.logo} onClick={closeMenu}>
    <img src={logos.firma} alt="logoFirm" />
  </a>

  <div className={`${nav.menu} ${isOpen ? nav.open : ""}`}>
    <ul className={nav.list}>
      <li>
        <a href="#services" onClick={closeMenu}>
          Մեր ծառայությունները
        </a>
      </li>
      <li>
        <a href="#how-it-works" onClick={closeMenu}>
          Ինչպես է դա աշխատում
        </a>
      </li>
      <li>
        <a href="#about" onClick={closeMenu}>
          Մեր մասին
        </a>
      </li>
      <li>
        <a href="#partners" onClick={closeMenu}>
          Գործընկերներ
        </a>
      </li>
      <li>
        <a href="#contact" onClick={closeMenu}>
          Կապ մեզ հետ
        </a>
      </li>
    </ul>

    <div className={nav.mobile}>
      <span className="lang-box">ՀՅ</span>
      <span className="phone-box">✆ {telNum}</span>
    </div>
  </div>

  <div className={nav.desktop}>
    <div className={nav.langDropdown}>
      <p>ՀՅ</p>
      <div className={nav.dropdownContent}>
        <button>RU</button>
        <button>EN</button>
      </div>
    </div>
    <span>✆ {telNum}</span>
  </div>

  <div
    className={`${nav.burger} ${isOpen ? nav.active : ""}`}
    onClick={toggleMenu}
  >
    <span className={nav.bar}></span>
    <span className={nav.bar}></span>
    <span className={nav.bar}></span>
  </div>
</nav>

      <div 
        className={`${nav.overlay} ${isOpen ? nav.active : ""}`} 
        onClick={closeMenu}
      ></div>
    </div>
  );
};