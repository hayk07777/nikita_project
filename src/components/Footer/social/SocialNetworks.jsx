import { InstagramIcon, FacebookIcon, LinkedInIcon, YouTubeIcon,TikTokIcon } from "../../../assets/images/icons";
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
    <img src={InstagramIcon} alt="instagram" /></a>
    <a href="https://www.facebook.com/">
        <img src={FacebookIcon} alt="Facebook" />
    </a>
    <a href="https://www.linkedin.com/">
        <img src={LinkedInIcon} alt="In" />
    </a>
    <a href="https://www.youtube.com/">
        <img src={YouTubeIcon} alt="YouTube" />
    </a>
    <a href="https://www.tiktok.com/">
        <img src={TikTokIcon} alt="TikTok" />
    </a>
</div>

   </section>
  )
}
