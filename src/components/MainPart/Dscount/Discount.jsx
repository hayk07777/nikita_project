import "./Discount.css";
import boy from "../../../images/picture/boy2.png"
export const Discount = () => {
  return (
    <section className="discount__container">
      <div className="text__contain">
      <article className="qayls">
        <p>Քայլ 1</p>
      </article>
      <article>
        <h2>Գտիր ծածկագիրը <br />
            խցանի տակ</h2>
        <p className="about__discount">
          Mobile ID-ն անձի նույնականացման, ինչպես նաև <br /> էլեկտրոնային եղանակով
          ստորագրելու հարթակ է: <br /> Համակարգը հնարավորություն է տալիս ստորագրել <br />
          ցանկացած փաստաթուղթ առանց հավելյալ <br /> ջանքերի:
        </p>
        <button className="all__btn">
        Իմանալ ավելին
        </button>
      </article>
      </div>
      <div className="img__boy">

      <article>
<img src={boy} alt="boy" />
      </article>
      </div>
    </section>
  );
};
