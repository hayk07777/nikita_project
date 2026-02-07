import { Discount } from "./Dscount/Discount"
import { MainPart } from "./HeaderForMainPart/MainPart"
import { CompaniesPart } from "./companies/CompaniesPart"
import { GetGiftPart } from "./getGift/GetGiftPart"
import { NeedText } from "./needText/NeedText"
import { SendLifePart } from "./sendLife/SendLifePart"
import { ServicesPart } from "./services/ServicesPart"
import { CountsCooperate } from "./suportedCount/CountsCooperate"

export const MainComponents = () => {
  return (
    <div>
      <MainPart/>
      <CompaniesPart/>
      <ServicesPart/>
      <Discount/>
      <SendLifePart/>
      <GetGiftPart/>
      <CountsCooperate/>
      <NeedText/>
    </div>
  )
}
