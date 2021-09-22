import React from "react";
import "./Menu.css";
import logotermica from "../../images/logotermica.png";

function Menu({ selected }) {
  return (
    <div className="main-menu_container">
      <div className="main-menu_logo">
        <img src={logotermica} alt="TermicaDesign" width="224" height="73" />
      </div>
      <nav className="main-menu_nav">
        <a
          real="about"
          href="about"
          className={selected == "about" ? "selected" : "none"}
        >
          About
        </a>
        <a
          real="skills"
          href="skills"
          className={selected == "skills" ? "selected" : "none"}
        >
          Skills
        </a>
        <a
          real="work"
          href="work"
          className={selected == "work" ? "selected" : "none"}
        >
          Work
        </a>
        <a
          real="contat"
          href="contact"
          className={selected == "contact" ? "selected" : "none"}
        >
          Contact
        </a>
      </nav>
    </div>
  );
}

export default Menu;
