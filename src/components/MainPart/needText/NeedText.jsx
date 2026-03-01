import styles from "./NeedText.module.scss";
import { GroupImg1, GroupImg2, GroupImg3, HeartIcon, SmsIcon, ChekedIcon } from "../../../assets/images/index";

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
      <div className={styles.imgContainer}>
        <img src={GroupImg1} alt="GroupImg1" />
        <img src={GroupImg2} alt="GroupImg2" />
        <img src={GroupImg3} alt="GroupImg3" />
  <div className={styles.icons}>
          <img src={HeartIcon} alt="HeartIcon" />
          <img src={SmsIcon} alt="SmsIcon" />
          <img src={ChekedIcon} alt="ChekedIcon" />
  </div>
      </div>
    </section>
  );
};