import "./GetGiftPart.scss";
import hecoPic from "../../../images/picture/heco.png";
export const GetGiftPart = () => {
  return (
    <section className="contain__gift">
      <div className="text__part">
        <p className="qayl1">Քայլ 3</p>
        <h2>Ստացիր Քո մրցանակը</h2>
        <p>
          Mobile ID-ն անձի նույնականացման, ինչպես նաև  էլեկտրոնային
          եղանակով ստորագրելու հարթակ է:  Համակարգը հնարավորություն է
          տալիս ստորագրել
          
          ցանկացած փաստաթուղթ առանց հավելյալ  ջանքերի:
        </p>
        <button className="learn__more--bt">Իմանալ ավելին</button>
      </div>
      <div>
        <img src={hecoPic} alt="heco" />
      </div>
    </section>
  );
};
