import React from "react";
import { NavLink } from "react-router-dom";
import "../Pages-css/Navbar.css"
function Navbar() {
  return (
    <header>
      <nav id="nav1">
       <div className="nav-logo">
        <img src="" alt="" />
        <h1>RAHUL</h1>
       </div>
       <div className="nav-ul">
       <ul>
<NavLink to="/" className="nav-link">Home</NavLink>
<NavLink to="/about"  className="nav-link">About</NavLink>
<NavLink to="/services"  className="nav-link">Services</NavLink>
<NavLink to="/project"  className="nav-link">Project</NavLink>
<NavLink to="/con"  className="nav-link"  >Contact</NavLink>
</ul>
       </div>
       <div className="nav-social"></div>
      </nav>
    </header>
  );
}

export default Navbar;

