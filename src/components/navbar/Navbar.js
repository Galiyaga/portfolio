import { NavLink } from "react-router-dom";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";
import "./style.css";

export default function Navbar() {
  const activeLink = "nav-list__link nav-list__link--active";
  const normalLink = "nav-list__link";

  const isActiveLink = (isActive) => {
	return isActive ? activeLink : normalLink
  }

  return ( 
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink className="logo" to="/">
            <strong>my</strong> portfolio
          </NavLink>

          <BtnDarkMode />

          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink className={({isActive}) => isActiveLink(isActive)} to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink className={({isActive}) => isActiveLink(isActive)} to="/projects">
                Projects
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink className={({isActive}) => isActiveLink(isActive)} to="/contacts">
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
