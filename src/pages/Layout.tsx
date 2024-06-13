import { Outlet } from "react-router-dom"
import { HeaderNav } from "../components/HeaderNav"

export const Layout = () => {
    return (
        <>
        <header>
   
          <HeaderNav/>
        </header>
        <main>
          <Outlet />
        </main>
        <footer>En footer  </footer>
      </>
    )
}