import styles from "./Discount.module.scss";
import {pictures} from "../../../assets/images"
export const Discount = () => {
  return (
    <section className={styles.container} id="how-it-works">
      <div className={styles.texts}>
        <div className={styles.first}>
          <span>Քայլ 1</span>
        </div>
        <div className={styles.aboutContain}>
          <h2>Գտիր ծածկագիրը խցանի տակ</h2>
          <p className={styles.aboutDiscount}>
            Mobile ID-ն անձի նույնականացման, ինչպես նաև էլեկտրոնային եղանակով
            ստորագրելու հարթակ է: Համակարգը հնարավորություն է տալիս ստորագրել
            ցանկացած փաստաթուղթ առանց հավելյալ ջանքերի:
          </p>
          <button className={styles.btn}>Իմանալ ավելին</button>
        </div>
      </div>
      <div className={styles.img}>
        <article>
          <img src={pictures.boy2} alt="boy" />
        </article>
      </div>
    </section>
  );
};
