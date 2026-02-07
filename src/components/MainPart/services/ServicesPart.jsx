import styles from "./ServicesPart.module.scss";
import { pictures } from "../../../assets/images";
export const ServicesPart = () => {
  return (
    <section className={styles.container} id="services">
      <div className={styles.title}>
        <p>Մեր ծառայությունները 🚀</p>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.card}>
          <img src={pictures.card1} alt="card1" />
          <h2>ՍՄՍ և Վեբ</h2>
          <p>
            Բաժանորդներին հնարավորություն է տրվում հաղորդագրություն ուղարկել և՛
            SMS-ի միջոցով, և՛ WEB կայքով:
          </p>
        </div>

        <div className={styles.card}>
          <img src={pictures.card2} alt="card2" />
          <h2>Վեբ</h2>
          <p>
            Բաժանորդներին հնարավորություն է տրվում հաղորդագրություն ուղարկել
            միայն WEB-ի միջոցով:
          </p>
        </div>

        <div className={styles.card}>
          <img src={pictures.card3} alt="card3" />
          <h2>ՍՄՍ</h2>
          <p>
            Բաժանորդներին հնարավորություն է տրվում հաղորդագրություն ուղարկել
            միայն SMS-ի միջոցով:
          </p>
        </div>
      </div>
    </section>
  );
};
