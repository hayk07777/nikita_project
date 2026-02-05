import dc from "./Discount.module.scss";
import boy from "../../../images/picture/boy2.png";
export const Discount = () => {
  return (
    <section className={dc.container}>
      <div className={dc.texts}>
        <div className={dc.first}>
          <span>Քայլ 1</span>
        </div>
        <div className={dc.aboutContain}>
          <h2>Գտիր ծածկագիրը խցանի տակ</h2>
          <p className={dc.aboutDiscount}>
            Mobile ID-ն անձի նույնականացման, ինչպես նաև էլեկտրոնային եղանակով
            ստորագրելու հարթակ է: Համակարգը հնարավորություն է տալիս ստորագրել
            ցանկացած փաստաթուղթ առանց հավելյալ ջանքերի:
          </p>
          <button className={dc.btn}>Իմանալ ավելին</button>
        </div>
      </div>
      <div className={dc.img}>
        <article>
          <img src={boy} alt="boy" />
        </article>
      </div>
    </section>
  );
};
