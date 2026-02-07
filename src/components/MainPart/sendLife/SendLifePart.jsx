import styles from "./SendLifePart.module.scss";
import { pictures } from "../../../assets/images";
export const SendLifePart = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.containerCards}>
          <div className={styles.image}>
            <img src={pictures.inp} alt="Form" className={styles.inp__img} />
          </div>

          <div className={styles.codeContainer}>
            <div className={styles.step}>
              <span>Քայլ 2</span>
            </div>
            <div className={styles.rightTitle}>
              <h2>Մուտքագրեք ծածկագիրը մեր պլատֆորմում</h2>
            </div>
            <div className={styles.about}>
              
              
              <p>
                Mobile ID-ն անձի նույնականացման, ինչպես նաև էլեկտրոնային
                եղանակով ստորագրելու հարթակ է: Համակարգը հնարավորություն է տալիս
                ստորագրել ցանկացած փաստաթուղթ առանց հավելյալ ջանքերի:
              </p>
            </div>
            <div>
              <ul className={styles.list}>
                <li>• Ուղարկել SMS կարճ համարին</li>
                <li>• Ուղարկել կոդը "պլատֆորմով"</li>
              </ul>
            </div>
            <button className={styles.btn}>Իմանալ ավելին</button>
          </div>
        </div>

      </div>
    </section>
  );
  
};
