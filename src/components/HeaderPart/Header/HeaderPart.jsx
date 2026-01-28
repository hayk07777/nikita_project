import h from "./HeaderPart.module.scss"
import pause from "../../../images/picture/pause.png"

import firstGirl from "../../../images/picture/girl1.png"
import { NavigationPanel } from "../NavPanel/NavigationPanel"
import { HeaderAddPart } from "../../HeaderPart/HeaderAdd/HeaderAddPart"
export const HeaderPart = () => {
  return (
    <header >
      <HeaderAddPart/>
      <NavigationPanel/>
       <div className={h.container}>
       <div className={h.textContainer}>
            <h1>Խելացի մտքեր,  Ձեր բրենդնի համար💡</h1>
            <p>Բարձրացրեք ձեր վաճառքների ճանապարհը՝ 
            արդյունավետ հաղորդակցությամբ յուրաքանչյուր քայլում։</p>
<div className={h.headerBtn}>
<button>Կապ մեզ հետ </button><img src={pause} className={h.pause} alt="pause" />


</div>
        </div>
<div className={h.img}>
  <img src={firstGirl} alt="firstGirl"  className={h.girl}/>
</div>
       </div>
    </header>
  )
}
