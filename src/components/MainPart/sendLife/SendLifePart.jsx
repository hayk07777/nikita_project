import sl from "./SendLifePart.module.scss";
import inp from "../../../images/picture/inp.png";

export const SendLifePart = () => {
  return (
    <section className={sl.container}>
      <div className={sl.content}>
        <div className={sl.titleTop}>
          <h2>Կյանքի կոչիր բոլոր վառ գաղափարներդ՝ Nikita Mobile-ի հետ</h2>
        </div>

        <div className={sl.containerCards}>
          <div className={sl.image}>
            <img src={inp} alt="Form" className={sl.inp__img} />
          </div>

          <div className={sl.codeContainer}>
            <div className={sl.step}>
              <span>Քայլ 2</span>
            </div>
            <div className={sl.rightTitle}>
              <h2>Մուտքագրեք ծածկագիրը մեր պլատֆորմում</h2>
            </div>
            <div className={sl.about}>
              <p>
                Mobile ID-ն անձի նույնականացման, ինչպես նաև էլեկտրոնային
                եղանակով ստորագրելու հարթակ է: Համակարգը հնարավորություն է տալիս
                ստորագրել ցանկացած փաստաթուղթ առանց հավելյալ ջանքերի:
              </p>
            </div>
          <div>
          <ul className={sl.list}>
              <li>Ուղարկել SMS կարճ համարին</li>
              <li>Ուղարկել կոդը "պլատֆորմով"</li>
            </ul>
          </div>
            <button className={sl.btn}>Իմանալ ավելին</button>
          </div>
        </div>
      </div>
    </section>
  );
};
