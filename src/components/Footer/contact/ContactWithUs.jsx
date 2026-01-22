import "./ContactWithUs.scss";
import armeniaFlag from "../../../images/picture/flag.png";

export const ContactWithUs = () => {
  const sendDataBtn = (e) => {
    const { firstName, lastName, email, telephone, content } = e.target.form;

    e.preventDefault();
    const NewUser = {
      id: new Date().getTime().toString(),
      firstName: firstName.value.trim(),
      lastName: lastName.value.trim(),
      email: email.value.trim(),
      telephone: telephone.value.trim(),
      content: content.value.trim(),
    };
    const postUserData = async () => {
      const result = await fetch("http://localhost:3005/USER__DATA", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(NewUser),
      });
      if (result.ok) {
        e.target.form.reset();
      }
    };
    postUserData();
  };

  return (
    <section className="contact__section">
      <div className="contact__container">
        <article className="footer__wrapper">
          <div className="title__part">
            <h1>Կապ մեզ հետ</h1>
            <p>
              Մենք տրամադրում ենք շուրջօրյա ծառայություն, 
              խնդրում ենք զանգահարել 010 512 888:
            </p>
          </div>

          <form className="footer__form">
            <div className="inputs__row">
              <div className="input__item">
                <p>Անուն*</p>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Անուն"
                  className="standard__in"
                />
              </div>
              <div className="input__item">
                <p>Ազգանուն*</p>
                <input
                  type="text"
                  placeholder="Ազգանուն"
                  name="lastName"
                  className="standard__in"
                />
              </div>
            </div>

            <div className="input__item">
              <p>Էլ. փոստ*</p>
              <input
                name="email"
                type="email"
                placeholder="Էլ. փոստ"
                className="standard__in"
              />
            </div>

            <div className="inputs__row">
              <div className="input__item">
                <p>Հեռախոս*</p>
                <div className="phone__select">
                  <div className="flag__cap">
                    <img src={armeniaFlag} alt="AM" />
                    <span>+374</span>
                    <span className="arrow__icon">▼</span>
                  </div>
                  <input name="telephone" type="tel" placeholder="552123456" />
                </div>
              </div>
            </div>

            <div className="input__item">
              <p>Բովանդակություն*</p>
              <textarea
                name="content"
                placeholder="Բովանդակություն"
                className="textarea__in"
              ></textarea>
            </div>

            <div className="services__section">
              <p className="services__title">Ծառայություններ</p>
              <div className="checkbox__grid">
                <div className="footer__checkbox">
                  <input type="checkbox" id="sms" />
                  <label htmlFor="sms">SMS ծանուցումներ</label>
                </div>
                <div className="footer__checkbox">
                  <input type="checkbox" id="premium" />
                  <label htmlFor="premium">Պրեմիում / Կարճ համար</label>
                </div>
                <div className="footer__checkbox">
                  <input type="checkbox" id="callcenter" />
                  <label htmlFor="callcenter">Զանգերի կենտրոն</label>
                </div>
                <div className="footer__checkbox">
                  <input type="checkbox" id="other" />
                  <label htmlFor="other">Այլ</label>
                </div>
              </div>
            </div>

            <button type="submit" className="submit__btn" onClick={sendDataBtn}>
              Ուղարկել
            </button>
          </form>
        </article>

        <article className="contact__map--part">
          <div className="map__wrapper">
            <iframe
              src="https://yandex.com/map-widget/v1/?feedback=map%2Fedit&feedback-context=map.context&l=sat%2Cskl&ll=43.878471%2C40.380114&z=19"
              width="100%"
              height="100%"
              title="Yandex Map"
              frameBorder="0"
            ></iframe>
          </div>
        </article>
      </div>
    </section>
  );
};
