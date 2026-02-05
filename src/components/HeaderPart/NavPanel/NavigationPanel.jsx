import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import nav from "./NavigationPanel.module.scss";
import logoFirm from "../../../images/logo/firma.png";

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
        <NavLink to="/" className={nav.logo} onClick={closeMenu}>
          <img src={logoFirm} alt="logoFirm" />
        </NavLink>

        <div className={`${nav.menu} ${isOpen ? nav.open : ""}`}>
          <ul className={nav.list}>
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