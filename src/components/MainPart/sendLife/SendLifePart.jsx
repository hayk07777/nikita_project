import styles from "./SendLifePart.module.scss";
import { InpPic } from "../../../assets/images/index";

export const SendLifePart = () => {
  return (
    <section className={styles.container}>
      <div className={styles.imageSide}>
        <img src={InpPic} alt="Form Illustration" />
      </div>

      <div className={styles.textSide}>
        <div className={styles.step}>
          <span>Քայլ 2</span>
        </div>

        <h2 className={styles.title}>Մուտքագրեք ծածկագիրը մեր պլատֆորմում</h2>

        <p className={styles.description}>
          Mobile ID-ն անձի նույնականացման, ինչպես նաև էլեկտրոնային եղանակով
          ստորագրելու հարթակ է: Համակարգը հնարավորություն է տալիս ստորագրել
          ցանկացած փաստաթուղթ առանց հավելյալ ջանքերի:
        </p>

        <ul className={styles.list}>
          <li>Ուղարկել SMS կարճ համարին</li>
          <li>Ուղարկել կոդը "պլատֆորմով"</li>
        </ul>

        <button className={styles.btn}>Իմանալ ավելին</button>
        <button className={styles.btnMobile}>Իմանալ ավելին</button>
      </div>
    </section>
  );
};
