import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/styles.css";

function Header() {
  const location = useLocation();

  return (
    <header>
      <nav>
        <Link to="/" className="logo">
          Digital Evolution S.A
        </Link>

        <div className="toggle"></div>

        <ul className="menu">
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/">Inicio</Link>
          </li>
          <li
            className={
              location.pathname === "/proyectos" ||
              location.pathname.startsWith("/proyecto")
                ? "active"
                : ""
            }
          >
            <Link to="/proyectos">Proyectos</Link>
          </li>
          <li className={location.pathname === "/newsletter" ? "active" : ""}>
            <Link to="/newsletter">Newsletter</Link>
          </li>
          <li className={location.pathname === "/contacto" ? "active" : ""}>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>

        <div className="menu3">
            
          <div className="submenu">
            <Link to="/">Inicio</Link>
            <Link to="/proyectos">Proyectos</Link>
            <Link to="/newsletter">Newsletter</Link>
            <Link to="/contacto">Contacto</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
