import "./HeaderPart.scss"
import pause from "../../../images/picture/pause.png"

import firstGirl from "../../../images/picture/girl1.png"
import { NavigationPanel } from "../NavPanel/NavigationPanel"
import { HeaderAddPart } from "../../HeaderPart/HeaderAdd/HeaderAddPart"
export const HeaderPart = () => {
  return (
    <header >
      <HeaderAddPart/>
      <NavigationPanel/>
       <div className="container__card">
       <div className="text__container--hdr">
            <h1>Խելացի մտքեր, <br /> Ձեր բրենդնի <br /> համար💡</h1>
            <p>Բարձրացրեք ձեր վաճառքների ճանապարհը՝ <br />
            արդյունավետ հաղորդակցությամբ յուրաքանչյուր քայլում։</p>
<div className="button__header">
<button>Կապ մեզ հետ </button><img src={pause} className="pause" alt="pause" />


</div>
        </div>
<div className="img__contain">
  <img src={firstGirl} alt="firstGirl"  className="firstGirl"/>
</div>
       </div>
    </header>
  )
}
