import styles from "./CompaniesPart.module.scss";
import { EurovisionLogo,VivaLogo,UcomLogo,TeamLogo,GmailLogo,Gmail,FacebookLogo, } from "../../../assets/images/index";
export const CompaniesPart = () => {
  return (
    <section className={styles.container} id="partners">
      <div className={styles.titleContain}>
        <h1 className={styles.title}>Միացե՛ք արդեն աճող <span> 4000+</span> ընկերություններին</h1>
      </div>
      <div className={styles.operators}>
        <img src={FacebookLogo} alt="facebookLogo" />
        <img src={VivaLogo} alt="vivaLogo" />
        <img src={GmailLogo} alt="gmailLogo" />
        <img src={Gmail} alt="gmail" />
        <img src={TeamLogo} alt="team" />
        <img src={EurovisionLogo} alt="eurovision" />
        <img src={UcomLogo} alt="ucom " />
      </div>
    </section>
  );
};
