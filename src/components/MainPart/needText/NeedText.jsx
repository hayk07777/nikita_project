import need from "./NeedText.module.scss";
import { pictures } from "../../../assets/images";
export const NeedText = () => {
  return (
    <section className={need.section}>
      <div className={need.container}>
        <p className={need.label}>Հարկավոր է տեքստ</p>
        <h2>Հարկավոր է տեքստ</h2>
        <p className={need.description}>
          Mobile ID-ն անձի նույնականացման, ինչպես նաև էլեկտրոնային եղանակով
          ստորագրելու հարթակ է: Համակարգը հնարավորություն է տալիս ստորագրել
          ցանկացած փաստաթուղթ առանց հավելյալ ջանքերի:
        </p>
        <button className={need.btn}>Իմանալ ավելին</button>
      </div>
      <div className={need.img}>
        <img src={pictures.commandPic} alt={need.commandPic} />
      </div>
    </section>
  );
};
