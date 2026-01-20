import "./CompaniesPart.scss"
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
            <img src={facebookLogo} alt="" />
            <img src={vivaLogo} alt="" />
            <img src={gmailLogo} alt="" />
            <img src={gmail} alt="" />
            <img src={team} alt="" />
            <img src={eurovision} alt="" />
            <img src={ucom} alt="" />
            
        </div>
    </section>
  )
}
