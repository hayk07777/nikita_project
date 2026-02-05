import { Outlet } from "react-router-dom"
import { MainComponents } from "../components/MainPart/MainComponents"
import { Footer } from "../components/Footer/Footer"
import { MainPart } from "../components/MainPart/HeaderForMainPart/MainPart"

export const Layout = () => {
  return (
    <div>
      <MainPart/>
      <MainComponents/>
      <Footer/>
        <Outlet/>
    </div>
  )
}
