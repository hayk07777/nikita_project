import gift from "./GetGiftPart.module.scss";
import {pictures} from "../../../assets/images";
export const GetGiftPart = () => {
  return (
    <section className={gift.container}>
      <div className={gift.texts}>
        <p className={gift.step}>Քայլ 3</p>
        <h2>Ստացիր Քո մրցանակը</h2>
        <p className={gift.text}>
          Mobile ID-ն անձի նույնականացման, ինչպես նաև  էլեկտրոնային
          եղանակով ստորագրելու հարթակ է:  Համակարգը հնարավորություն է
          տալիս ստորագրել
          
          ցանկացած փաստաթուղթ առանց հավելյալ  ջանքերի:
        </p>
        <button className={gift.btn}>Իմանալ ավելին</button>
      </div>
      <div>
        <img src={pictures.heco} alt="heco" />
      </div>
    </section>
  );
};
