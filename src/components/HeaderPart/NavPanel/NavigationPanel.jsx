import { useEffect, useState } from "react";
import styles from "./NavigationPanel.module.scss";
import { FirmaLogo, TelIcon } from "../../../assets/images/index";

export const NavigationPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const telNum = "+374 55 12 34 56";

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <div className={`${styles.wrapper} ${isScrolled ? styles.scrolled : ""}`}>
      <nav className={styles.container}>
        <a href="/" className={styles.logo} onClick={closeMenu}>
          <img src={FirmaLogo} alt="logoFirm" />
        </a>

        <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
          <div className={styles.closeBtn} onClick={closeMenu}>
            <span></span>
            <span></span>
          </div>

          <ul className={styles.list}>
            <li><a href="#services" onClick={closeMenu}>Մեր ծառայությունները</a></li>
            <li><a href="#how-it-works" onClick={closeMenu}>Ինչպես է դա աշխատում</a></li>
            <li><a href="#about" onClick={closeMenu}>Մեր մասին</a></li>
            <li><a href="#partners" onClick={closeMenu}>Գործընկերներ</a></li>
            <li><a href="#contact" onClick={closeMenu}>Կապ մեզ հետ</a></li>
          </ul>
        </div>

        <div className={styles.desktop}>
          <div className={styles.langDropdown}>
            <p>ՀՅ</p>
            <div className={styles.dropdownContent}>
              <span>RU</span>
              <span>EN</span>
            </div>
          </div>
          <button className={styles.tellBtn}>
            <img src={TelIcon} alt="TelIcon" />
            <p className={styles.tellNum}>{telNum}</p>
          </button>
        </div>

        <div className={styles.burger} onClick={toggleMenu}>
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