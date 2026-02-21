import styles from "./ServicesPart.module.scss";
import { Card1Pic, Card2Pic, Card3Pic } from "../../../assets/images/index";
export const ServicesPart = () => {
  return (
    <section className={styles.container} id="services">
      <div className={styles.title}>Մեր ծառայությունները 🚀</div>

      <div className={styles.wrapper}>
        <div className={styles.card}>
          <img src={Card1Pic} alt="card1" />
          <h2 className={styles.titleCards}>ՍՄՍ և Վեբ</h2>
          <p className={styles.about}>
            Բաժանորդներին հնարավորություն է տրվում հաղորդագրություն ուղարկել և՛
            SMS-ի միջոցով, և՛ WEB կայքով:
          </p>
        </div>

        <div className={styles.card}>
          <img src={Card2Pic} alt="card2" />
          <h2 className={styles.title}>Վեբ</h2>
          <p className={styles.about}>
            Բաժանորդներին հնարավորություն է տրվում հաղորդագրություն ուղարկել
            միայն WEB-ի միջոցով:
          </p>
        </div>

        <div className={styles.card}>
          <img src={Card3Pic} alt="card3" />
          <h2 className={styles.title}>ՍՄՍ</h2>
          <p className={styles.about}>
            Բաժանորդներին հնարավորություն է տրվում հաղորդագրություն ուղարկել
            միայն SMS-ի միջոցով:
          </p>
        </div>
      </div>
    </section>
  );
};
