import React from "react";
import "./navbar.css";
import { useLocation, Link } from "react-router-dom";
import { menuLinks } from "../../constants";

const Navbar = () => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className="nav-container">
      <nav>
        <div className="logo">
          <Link className="logo-link" to={"/"}>
            <h1>pizza</h1>
            <span>+</span>
          </Link>
        </div>
        <ul>
          {menuLinks.map((menu) => (
            <li key={menu.id}>
              <Link className="menu-link" to={menu.path}>
                <span
                  className={menu.path === location.pathname && "selected-menu"}
                >
                  {menu.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
