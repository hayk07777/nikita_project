import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";

import styles from "./CompaniesPart.module.scss";
import {
  EurovisionLogo,
  VivaLogo,
  UcomLogo,
  TeamLogo,
  GmailLogo,
  Gmail,
  FacebookLogo,
} from "../../../assets/images/index";

export const CompaniesPart = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const logos = [
    { src: FacebookLogo, alt: "facebook" },
    { src: VivaLogo, alt: "viva" },
    { src: GmailLogo, alt: "gmail" },
    { src: Gmail, alt: "gmail_alt" },
    { src: TeamLogo, alt: "team" },
    { src: EurovisionLogo, alt: "eurovision" },
    { src: UcomLogo, alt: "ucom" },
  ];

  return (
    <section className={styles.container} id="partners">
      <div className={styles.titleContain}>
        <h1 className={styles.title}>
          Միացե՛ք արդեն աճող <span> 4000+</span> ընկերություններին
        </h1>
      </div>

      <div className={styles.sliderWrapper}>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={2}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              <img src={logo.src} alt={logo.alt} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={styles.paginationCustom}>
          {logos.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${activeIndex === index ? styles.active : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
