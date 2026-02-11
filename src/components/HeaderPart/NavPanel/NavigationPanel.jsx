import { useEffect, useState } from "react";
import styles from "./NavigationPanel.module.scss";
import {FirmaLogo} from "../../../assets/images/logo";

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
    
    <div className={`${styles.wrapper} ${isScrolled ? styles.scrolled : ""}`}>
      <nav className={styles.container}>
  <a href="/" className={styles.logo} onClick={closeMenu}>
    <img src={FirmaLogo} alt="logoFirm" />
  </a>

  <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
    <ul className={styles.list}>
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

    <div className={styles.mobile}>
      <span className="lang-box">ՀՅ</span>
      <span className="phone-box">✆ {telNum}</span>
    </div>
  </div>

  <div className={styles.desktop}>
    <div className={styles.langDropdown}>
      <p>ՀՅ</p>
      <div className={styles.dropdownContent}>
        <button>RU</button>
        <button>EN</button>
      </div>
    </div>
    <span>✆ {telNum}</span>
  </div>

  <div
    className={`${styles.burger} ${isOpen ? styles.active : ""}`}
    onClick={toggleMenu}
  >
    <span className={styles.bar}></span>
    <span className={styles.bar}></span>
    <span className={styles.bar}></span>
  </div>
</nav>

      <div 
        className={`${styles.overlay} ${isOpen ? styles.active : ""}`} 
        onClick={closeMenu}
      ></div>
    </div>
  );
};