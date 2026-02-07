import styles from "./MainPart.module.scss";
import { pictures } from "../../../assets/images";
export const MainPart = () => {
  return (
    <section id="about">
      
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1>
            <span className={styles.firstWord}>Խելացի մտքեր, Ձեր</span>
            <span className={styles.secondWord}>բրենդնի համար💡</span>
          </h1>
          <p>
            <span className={styles.firstWord}>Բարձրացրեք ձեր վաճառքների ճանապարհը՝</span>
            <span className={styles.secondWord}>արդյունավետ հաղորդակցությամբ յուրաքանչյուր</span>
            <span className={styles.thirdWord}>քայլում։</span>
          </p>
          <div className={styles.headerBtn}>
<span className={styles.btnAnim}>
<button>Կապ մեզ հետ </button>

  </span>            <div className={`${styles.pause} ${styles.animePause} `}>
              <img src={pictures.pause} alt="pause" />
            </div>
          </div>
        </div>
        <div className={styles.imgCont}>
          <img src={pictures.girl1} alt="firstGirl" className={styles.girl} />
        </div>
      </div>
    </section>
  );
};
