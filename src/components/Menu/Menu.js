import React from "react";
import "./Menu.css";

function Menu({ selected }) {
  return (
    <div className="main-menu_container">
      <div className="main-menu_logo">
        <a className="logoHighlight">Térmica</a>
        <a className="logoOverlight">Design</a>
      </div>
      <nav className="main-menu_nav">
        <a
          real="about"
          href="about"
          className={selected == "about" ? "selected" : "none"}
        >
          About & Skills
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
