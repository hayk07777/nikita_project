import { icons } from "../../../assets/images";
import styles from "./SocialNetworks.module.scss"
export const SocialNetworks = () => {
  return (
    <section className={styles.container}>
<div className={styles.textsContainer}>
<p>2023 Nikita LLC: Բոլոր իրավունքները պաշտպանված են:
    </p> 
    <p>
    Ստեղծված է` <span>Solidy</span>
    </p>
</div>
<div className={styles.iconsContainer}>
    <a href="https://www.instagram.com/">
    <img src={icons.InstagramIcon} alt="instagram" /></a>
    <a href="https://www.facebook.com/">
        <img src={icons.FacebookIcon} alt="Facebook" />
    </a>
    <a href="https://www.linkedin.com/">
        <img src={icons.LinkedinIcon} alt="In" />
    </a>
    <a href="https://www.youtube.com/">
        <img src={icons.YouTubeIcon} alt="YouTube" />
    </a>
    <a href="https://www.tiktok.com/">
        <img src={icons.TikTokIcon} alt="TikTok" />
    </a>
</div>

   </section>
  )
}
