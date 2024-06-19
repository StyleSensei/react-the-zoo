import { NavLink } from "react-router-dom"

export const HeaderNav = () => {
  return (
    <>
      <nav className="header__nav">
        <ul>
          <li>
            <NavLink to={"/"}>Start</NavLink>
          </li>
          <li>
            <NavLink to={"/animals"}>Alla djur</NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}