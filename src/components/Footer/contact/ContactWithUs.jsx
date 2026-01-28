import c from  "./ContactWithUs.module.scss";
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
    <section className={c.section}>
      <div className={c.container}>
        <article className={c.wrapper}>
          <div className={c.title}>
            <h1>Կապ մեզ հետ</h1>
            <p>
              Մենք տրամադրում ենք շուրջօրյա ծառայություն, 
              խնդրում ենք զանգահարել 010 512 888:
            </p>
          </div>

          <form className={c.forms}>
            <div className={c.inputs}>
              <div className={c.items}>
                <p>Անուն*</p>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Անուն"
                  className={c.standard}
                />
              </div>
              <div className={c.items}>
                <p>Ազգանուն*</p>
                <input
                  type="text"
                  placeholder="Ազգանուն"
                  name="lastName"
                  className={c.standard}
                />
              </div>
            </div>

            <div className={c.items}>
              <p>Էլ. փոստ*</p>
              <input
                name="email"
                type="email"
                placeholder="Էլ. փոստ"
                className={c.standard}
              />
            </div>

            <div className={c.inputs}>
              <div className={c.items}>
                <p>Հեռախոս*</p>
                <div className={c.select}>
                  <div className={c.flag}>
                    <img src={armeniaFlag} alt="AM" />
                    <span>+374</span>
                    <span className={c.arrow}>▼</span>
                  </div>
                  <input name="telephone" type="tel" placeholder="552123456" />
                </div>
              </div>
            </div>

            <div className={c.items}>
              <p>Բովանդակություն*</p>
              <textarea
                name="content"
                placeholder="Բովանդակություն"
                className={c.textarea}
              ></textarea>
            </div>

            <div className={c.section2}>
              <p className={c.services}>Ծառայություններ</p>
              <div className={c.checkboxGrid}>
                <div className={c.footerCheckbox}>
                  <input type="checkbox" id="sms" />
                  <label htmlFor="sms">SMS ծանուցումներ</label>
                </div>
                <div className={c.footerCheckbox}>
                  <input type="checkbox" id="premium" />
                  <label htmlFor="premium">Պրեմիում / Կարճ համար</label>
                </div>
                <div className={c.footerCheckbox}>
                  <input type="checkbox" id="callcenter" />
                  <label htmlFor="callcenter">Զանգերի կենտրոն</label>
                </div>
                <div className={c.footerCheckbox}>
                  <input type="checkbox" id="other" />
                  <label htmlFor="other">Այլ</label>
                </div>
              </div>
            </div>

            <button type="submit" className={c.submit} onClick={sendDataBtn}>
              Ուղարկել
            </button>
          </form>
        </article>

        <div className={c.mapPart}>
          <div className={c.mapWrapper}>
            <iframe
              src="https://yandex.com/map-widget/v1/?feedback=map%2Fedit&feedback-context=map.context&l=sat%2Cskl&ll=43.878471%2C40.380114&z=19"
              width="100%"
              height="100%"
              title="Yandex Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
