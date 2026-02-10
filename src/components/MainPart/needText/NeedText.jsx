import styles from "./NeedText.module.scss";
import { pictures } from "../../../assets/images";
export const NeedText = () => {
  return (
    <section className={styles.section}>
      <div className={styles.containerTexts}>
        <p className={styles.label}>Հարկավոր է տեքստ</p>
        <h2 className={styles.title}>Հարկավոր է տեքստ</h2>
        <p className={styles.description}>
          Mobile ID-ն անձի նույնականացման, ինչպես նաև էլեկտրոնային եղանակով
          ստորագրելու հարթակ է: Համակարգը հնարավորություն է տալիս ստորագրել
          ցանկացած փաստաթուղթ առանց հավելյալ ջանքերի:
        </p>
        <button className={styles.btn}>Իմանալ ավելին</button>
      </div>
      <div className={styles.img}>
        <img src={pictures.commandPic}  alt="commandPic" />
      </div>
    </section>
  );
};
