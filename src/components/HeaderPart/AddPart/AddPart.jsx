import { useState } from "react";
import styles from "./AddPart.module.scss";
import { RightIcon } from "../../../assets/images";

export const AddPart = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <p>Հատուկ առաջարկ` 🔥 Բարձրացրեք Ձեր փորձառությունը Nikita-ի հետ</p>
        <a href="https://nikita.am/en/home">
          Տեսնել ավելին <span><img src={RightIcon} alt="RightIcon" /></span>
        </a>
        <button className={styles.closer} onClick={() => setIsVisible(false)}>
          ✕
        </button>
      </div>
    </section>
  );
};