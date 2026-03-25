import { useRef } from "react";
import styles from "./Discount.module.scss";
import { second } from "../../../assets/images/index";

export const Discount = () => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <section className={styles.container} id="how-it-works">
      <div className={styles.texts}>
        <div className={styles.first}>
          <span>Քայլ 1</span>
        </div>
        <div className={styles.aboutContain}>
          <h2 className={styles.title}>Գտիր ծածկագիրը խցանի տակ</h2>
          <p className={styles.aboutDiscount}>
            Mobile ID-ն անձի նույնականացման, ինչպես նաև էլեկտրոնային եղանակով
            ստորագրելու հարթակ է: Համակարգը հնարավորություն է տալիս ստորագրել
            ցանկացած փաստաթուղթ առանց հավելյալ ջանքերի:
          </p>
          <button className={styles.btn}>Իմանալ ավելին</button>
        </div>
      </div>

      <div className={styles.img}>
        <video 
          ref={videoRef}
          src={second} 
          className={styles.discountVideo}
          muted 
          playsInline
          onMouseEnter={handleMouseEnter}
        />
      </div>
    </section>
  );
};