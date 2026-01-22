import "./ServicesPart.scss";
import card1 from "../../../images/picture/card1.png";
import card2 from "../../../images/picture/card2.png";
import card3 from "../../../images/picture/card3.png";
export const ServicesPart = () => {
  return (
    <section className="services__container">
      <div className="title__services">
        <p>Մեր ծառայությունները 🚀</p>
      </div>

      <div className="cards__wrapper">
        <div className="card">
          <img src={card1} alt="card1" />
          <h2>ՍՄՍ և Վեբ</h2>
          <p>
            Բաժանորդներին հնարավորություն է տրվում հաղորդագրություն ուղարկել և՛
            SMS-ի միջոցով, և՛ WEB կայքով:
          </p>
        </div>

        <div className="card">
          <img src={card2} alt="card2" />
          <h2>Վեբ</h2>
          <p>
            Բաժանորդներին հնարավորություն է
             տրվում հաղորդագրություն ուղարկել
            միայն WEB-ի միջոցով:
          </p>
        </div>

        <div className="card">
          <img src={card3} alt="card3" />
          <h2>ՍՄՍ</h2>
          <p>
            Բաժանորդներին հնարավորություն է տրվում
             հաղորդագրություն ուղարկել
            միայն SMS-ի միջոցով:
          </p>
        </div>
      </div>
    </section>
  );
};
