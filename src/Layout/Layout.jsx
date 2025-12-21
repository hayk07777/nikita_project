import { Outlet } from "react-router-dom"
import { HeaderPart } from "../components/HeaderPart/Header/HeaderPart"
import { MainComponents } from "../components/MainPart/MainComponents"
import { Footer } from "../components/Footer/Footer"

export const Layout = () => {
  return (
    <div>
        <HeaderPart/>
      <MainComponents/>
      <Footer/>
        <Outlet/>
    </div>
  )
}
