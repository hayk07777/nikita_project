import "./Discount.scss";
import boy from "../../../images/picture/boy2.png";
export const Discount = () => {
  return (
    <section className="discount__container">
      <div className="text__contain">
        <div className="step__first">
          <p>Քայլ 1</p>
        </div>
        <div className="about__discount--container">
          <h2>Գտիր ծածկագիրը խցանի տակ</h2>
          <p className="about__discount">
            Mobile ID-ն անձի նույնականացման, ինչպես նաև էլեկտրոնային
            եղանակով ստորագրելու հարթակ է: Համակարգը հնարավորություն է տալիս
            ստորագրել 
            ցանկացած փաստաթուղթ առանց հավելյալ ջանքերի:
          </p>
          <button className="all__btn">Իմանալ ավելին</button>
        </div>
      </div>
      <div className="img__boy">
        <article>
          <img src={boy} alt="boy" />
        </article>
      </div>
    </section>
  );
};
