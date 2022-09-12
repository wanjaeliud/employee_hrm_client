import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
function NavBar() {
  return (
      <nav>
        <div className="logo">
          <h4 className="nav-head">Salaried</h4>
        </div>

        <div className="navlinks">
          <NavLink className="nav-item" to="/">
            Home
          </NavLink>

          <NavLink className="nav-item" to="/companies">
            Companies
          </NavLink>

          <NavLink className="nav-item" to="/jobs">
            Search by job
          </NavLink>
        </div>
      </nav>
  );
}

export default NavBar;
