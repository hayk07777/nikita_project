import styles from "./MainPart.module.scss";
import { PausePic,Girl1Pic } from "../../../assets/images/index";

export const MainPart = () => {
  return (
    <section id="about">
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            <span className={styles.firstWord}>Խելացի մտքեր, Ձեր բրենդնի</span>
            <span className={styles.secondWord}> համար💡</span>
          </h1>
          <p className={styles.description}>
            <span className={styles.firstWord}>
              Բարձրացրեք ձեր վաճառքների ճանապարհը՝
            </span>{" "}
            <span className={styles.secondWord}>
              արդյունավետ հաղորդակցությամբ յուրաքանչյուր
            </span>{" "}
            <span className={styles.thirdWord}>քայլում։</span>
          </p>
          <div className={styles.headerBtn}>
            <button className={styles.btnAnim}>Կապ մեզ հետ </button>
            <div className={`${styles.pause} ${styles.animePause} `}>
              <img src={PausePic} alt="pause" />
            </div>
          </div>
        </div>
        <div className={styles.imgCont}>
          <img src={Girl1Pic} alt="firstGirl" className={styles.girl} />
        </div>
      </div>
    </section>
  );
};
