import "./CompaniesPart.scss";
import facebookLogo from "../../../images/logo/facebookLogo.png";
import vivaLogo from "../../../images/logo/vivaLogo.png";
import gmailLogo from "../../../images/logo/gmailLogo.png";
import gmail from "../../../images/logo/gmail.png";
import team from "../../../images/logo/teamLogo.png";
import eurovision from "../../../images/logo/eurovisionLogo.png";
import ucom from "../../../images/logo/ucomLogo.png";

export const CompaniesPart = () => {
  return (
    <section className="companies__container">
      <div className="title">
        <p>Միացե՛ք արդեն աճող 4000+ ընկերություններին</p>
      </div>
      <div className="operators">
        <img src={facebookLogo} alt="facebookLogo" />
        <img src={vivaLogo} alt="vivaLogo" />
        <img src={gmailLogo} alt="gmailLogo" />
        <img src={gmail} alt="gmail" />
        <img src={team} alt="team" />
        <img src={eurovision} alt="eurovision" />
        <img src={ucom} alt="ucom " />
      </div>
    </section>
  );
};
