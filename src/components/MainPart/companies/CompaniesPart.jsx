import comp from "./CompaniesPart.module.scss";
import { logos } from "../../../assets/images";
export const CompaniesPart = () => {
  return (
    <section className={comp.container} id="partners">
      <div className={comp.title}>
        <p>Միացե՛ք արդեն աճող 4000+ ընկերություններին</p>
      </div>
      <div className={comp.operators}>
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
