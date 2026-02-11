import styles from "./GetGiftPart.module.scss";
import {HecoPic} from "../../../assets/images/picture";
export const GetGiftPart = () => {
  return (
    <section className={styles.container}>
      <div className={styles.texts}>
        <p className={styles.step}>Քայլ 3</p>
         <h2 className={styles.title}>Ստացիր Քո մրցանակը</h2>
        <p className={styles.text}>
          Mobile ID-ն անձի նույնականացման, ինչպես նաև  էլեկտրոնային
          եղանակով ստորագրելու հարթակ է:  Համակարգը հնարավորություն է
          տալիս ստորագրել
          
          ցանկացած փաստաթուղթ առանց հավելյալ  ջանքերի:
        </p>
        <button className={styles.btn}>Իմանալ ավելին</button>
      </div>
      <div className={styles.imgCont}>
        <img src={HecoPic} alt="heco" />
      </div>
    </section>
  );
};
