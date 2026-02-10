import styles from "./CompaniesPart.module.scss";
import { logos } from "../../../assets/images";
export const CompaniesPart = () => {
  return (
    <section className={styles.container} id="partners">
      <div className={styles.titleContain}>
        <h1 className={styles.title}>Միացե՛ք արդեն աճող <span> 4000+</span> ընկերություններին</h1>
      </div>
      <div className={styles.operators}>
        <img src={logos.facebookLogo} alt="facebookLogo" />
        <img src={logos.vivaLogo} alt="vivaLogo" />
        <img src={logos.gmailLogo} alt="gmailLogo" />
        <img src={logos.gmail} alt="gmail" />
        <img src={logos.teamLogo} alt="team" />
        <img src={logos.eurovisionLogo} alt="eurovision" />
        <img src={logos.ucomLogo} alt="ucom " />
      </div>
    </section>
  );
};
