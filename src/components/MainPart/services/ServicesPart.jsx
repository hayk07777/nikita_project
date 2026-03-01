import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import styles from "./ServicesPart.module.scss";
import { Card1Pic, Card2Pic, Card3Pic } from "../../../assets/images/index";

export const ServicesPart = () => {
  const services = [
    { img: Card1Pic, title: "ՍՄՍ և Վեբ", desc: "Բաժանորդներին հնարավորություն է տրվում հաղորդագրություն ուղարկել և՛ SMS-ի միջոցով, և՛ WEB կայքով:" },
    { img: Card2Pic, title: "Վեբ", desc: "Բաժանորդներին հնարավորություն է տրվում հաղորդագրություն ուղարկել միայն WEB-ի միջոցով:" },
    { img: Card3Pic, title: "ՍՄՍ", desc: "Բաժանորդներին հնարավորություն է տրվում հաղորդագրություն ուղարկել միայն SMS-ի միջոցով:" },
  ];

  return (
    <section className={styles.container} id="services">
      <div className={styles.title}>Մեր ծառայությունները 🚀</div>

      <div className={styles.wrapper}>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1.1}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
            el: `.${styles.paginationContainer}`,
            bulletClass: styles.bullet,
            bulletActiveClass: styles.bulletActive,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 3,
              allowTouchMove: false,

            },
          }}
          className={styles.mySwiper}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index} className={styles.card}>
              <img src={service.img} alt="card" />
              <h2 className={styles.titleCards}>{service.title}</h2>
              <p className={styles.about}>{service.desc}</p>
            </SwiperSlide>
          ))}
          <div className={styles.paginationContainer}></div>
        </Swiper>
      </div>
    </section>
  );
};