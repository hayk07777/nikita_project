import "./SendLifePart.css";
import inp from "../../../images/picture/inp.png";

export const SendLifePart = () => {
  return (
    <section className="container__life--mind">
      <div className="main__content">
        <article className="title-top">
          <h2>
            Կյանքի կոչիր բոլոր վառ գաղափարներդ՝ Nikita Mobile-ի հետ
          </h2>
        </article>

        <div className="container__cards">
          <article className="inp-image-box">
            <img src={inp} alt="Form" className="inp__img" />
          </article>

          <article className="type__code--container">
            <div className="qayl2">
              <span>Քայլ 2</span>
            </div>
            <div className="right__title">
              <h2>Մուտքագրեք ծածկագիրը մեր պլատֆորմում</h2>
            </div>
            <div className="about">
              <p>
                Mobile ID-ն անձի նույնականացման, ինչպես նաև էլեկտրոնային եղանակով
                ստորագրելու հարթակ է: Համակարգը հնարավորություն է տալիս ստորագրել
                ցանկացած փաստաթուղթ առանց հավելյալ ջանքերի:
              </p>
            </div>
            <ul className="features__list">
              <li>Ուղարկել SMS կարճ համարին</li>
              <li>Ուղարկել կոդը "պլատֆորմով"</li>
            </ul>
            <button className="learn__more--btn">Իմանալ ավելին</button>
          </article>
        </div>
      </div>
    </section>
  );
};