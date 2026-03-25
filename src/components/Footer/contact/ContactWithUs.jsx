import styles from "./ContactWithUs.module.scss";
import { FlagPic } from "../../../assets/images/index";
import { YMaps, Map, Placemark, FullscreenControl, TypeSelector } from 'react-yandex-maps'; 


export const ContactWithUs = () => {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <div className={styles.formSide}>
          <header className={styles.header}>
            <h1>Կապ մեզ հետ</h1>
            <p>
              Մենք տրամադրում ենք շուրջօրյա ծառայություն, խնդրում ենք զանգահարել
              010 512 888:
            </p>
          </header>

          <form className={styles.mainForm}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="firstName">Անուն*</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Անուն"
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="lastName">Ազգանուն*</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Ազգանուն"
                />
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="email">Էլ. փոստ*</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Էլ. փոստ"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="telephone">Հեռախոս*</label>
              <div className={styles.phoneInput}>
                <div className={styles.wrapperDropdown}>
                  <button type="button" className={styles.dropdownBtn}>
                    <img src={FlagPic} alt="AM" />
                    <span>+374</span>
                    <span className={styles.arrow}>▼</span>
                  </button>
                  <div className={styles.content}>
                    <div className={styles.item}>
                      <img src={FlagPic} alt="AM" />
                      <span>+374</span>
                    </div>
                  </div>
                </div>
                <input
                  id="telephone"
                  name="telephone"
                  type="number"
                  placeholder="** ** ** **"
                />
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="content">Բովանդակություն*</label>
              <textarea
                id="content"
                name="content"
                placeholder="Բովանդակություն"
              ></textarea>
            </div>

            <div className={styles.servicesGroup}>
              <h3>Ծառայություններ</h3>
              <div className={styles.checkboxGrid}>
                <div className={styles.checkItem}>
                  <input type="checkbox" id="sms" />
                  <label htmlFor="sms">SMS ծանուցումներ</label>
                </div>
                <div className={styles.checkItem}>
                  <input type="checkbox" id="premium" />
                  <label htmlFor="premium">Պրեմիում / Կարճ համար</label>
                </div>
                <div className={styles.checkItem}>
                  <input type="checkbox" id="call" />
                  <label htmlFor="call">Զանգերի կենտրոն</label>
                </div>
                <div className={styles.checkItem}>
                  <input type="checkbox" id="other" />
                  <label htmlFor="other">Այլ</label>
                </div>
              </div>
            </div>

            <button type="submit" className={styles.submitBtn}>
              Ուղարկել
            </button>
          </form>
        </div>

        <div className={styles.mapSide}>
          <div className={styles.mapWrapper}>
            <YMaps query={{ apikey: '83841bdc-892a-431f-a9ff-b378ef38c6a0', lang: 'en_RU' }}>
              <Map
                defaultState={{
                  center: [40.1811, 44.5265],
                  zoom: 15,
                  controls: [],
                }}
                width="100%"
                height="720px"
              
              >
                <Placemark geometry={[40.1811, 44.5265]} />
                <FullscreenControl options={{ position: { bottom: 28, right: 26 } }} />
                <TypeSelector options={{ float: 'right' }} />
              </Map>
            </YMaps>
          </div>
        </div>
      </div>
    </section>
  );
};