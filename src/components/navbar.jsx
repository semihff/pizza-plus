import React from "react";
import "./navbar.css";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <div className="logo">
        <Link className="logo-link" to={"/"}>
          <h1>pizza</h1>
          <span>+</span>
        </Link>
      </div>
      <ul>
        <li>
          <Link className="menu-link" to={"/"}>
            <span>Anasayfa</span>
          </Link>
        </li>
        <li>
          <Link className="menu-link" to={"/menu"}>
            <span>Menü</span>
          </Link>
        </li>
        <li>
          <Link className="menu-link" to={"/contact"}>
            <span>İletişim</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
