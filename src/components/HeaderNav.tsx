import { NavLink } from "react-router-dom"

export const HeaderNav = () => {
    return (
        <>
               <nav className="header__nav">
            <ul>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/animals"}>Animals</NavLink>
              </li>
            </ul>
          </nav>
        </>
    )
}