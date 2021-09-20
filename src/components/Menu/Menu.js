import React from "react";
import "./Menu.css";
import logo from "../../images/logo.png";

function Menu() {
  return (
    <div className="main-menu">
      <div className="main-menu_logo">
        <img src={logo} alt="TermicaDesign" width="124" height="113" />
        <a className="small-text" href="/">
          Web Developer
        </a>
      </div>
      <nav className="main-menu_nav">
        <a real="about" href="About">
          About
        </a>
        <a real="skills" href="Skills">
          Skills
        </a>
      </nav>
      <div className="main-menu_social">social links</div>
    </div>
  );
}

export default Menu;
