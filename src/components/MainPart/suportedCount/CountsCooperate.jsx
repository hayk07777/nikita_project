import { useEffect, useState } from "react";
import style from "./CountsCooperate.module.scss";

export const CountsCooperate = () => {
  const [btnTop, setBtnTop] = useState(false);

  const handlerScroll = () => {
    setBtnTop(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handlerScroll);
    return () => {
      window.removeEventListener("scroll", handlerScroll);
    };
  }, []);

  return (
    <section className={style.container}>
      <div>
        <h2>180+</h2>
        <p>Countries Supported</p>
      </div>
      <div>
        <h2>+40K</h2>
        <p>Affiliates</p>
      </div>
      <div>
        <h2>$7M</h2>
        <p>Commissions Paid</p>
      </div>

      <button
        onClick={scrollToTop}
        className={`${style.scrollTop} ${btnTop ? style.visible : ""}`}
      >
        ↑
      </button>
    </section>
  );
};
