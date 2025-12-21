import "./GetGiftPart.css";
import hecoPic from "../../../images/picture/heco.png"
export const GetGiftPart = () => {
  return (
    <section className="contain__gift">
      <article className="text__part">
        <p className="qayl1">Քայլ 3</p>
        <h2>Ստացիր Քո մրցանակը</h2>
        <p>
          Mobile ID-ն անձի նույնականացման, ինչպես նաև <br /> էլեկտրոնային եղանակով
          ստորագրելու հարթակ է: <br /> Համակարգը հնարավորություն է  տալիս ստորագրել<br />
          ցանկացած  փաստաթուղթ առանց հավելյալ <br /> ջանքերի:
        </p>
        <button className="learn__more--bt">Իմանալ ավելին</button>
        </article>
        <article>
            <img src={hecoPic} alt="heco" />
        </article>
    </section>
  );
};
