import "./NeedText.scss";
import commandPic from "../../../images/picture/commandPic.png";

export const NeedText = () => {
  return (
    <section className="need-text-section">
      <div className="text__container--need">
        <p className="need-label">Հարկավոր է տեքստ</p>
        <h2>Հարկավոր է տեքստ</h2>
        <p className="description">
          Mobile ID-ն անձի նույնականացման, ինչպես նաև էլեկտրոնային եղանակով
          ստորագրելու հարթակ է: Համակարգը հնարավորություն է տալիս ստորագրել
          ցանկացած փաստաթուղթ առանց հավելյալ ջանքերի:
        </p>
        <button className="learn__more--btn">Իմանալ ավելին</button>
      </div>
      <div className="img__command">
        <img src={commandPic} alt="commandPic" />
      </div>
    </section>
  );
};
