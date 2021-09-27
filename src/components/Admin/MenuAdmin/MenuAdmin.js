import React from "react";
import "./MenuAdmin.css";

function MenuAdmin({ selected }) {
  return (
    <div className="main-menu_container">
      <div className="main-menu_logo">
        <a className="logoHighlight">Térmica</a>
        <a className="logoOverlight">Design</a>
        <a className="logoOverlight"> / admin</a>
      </div>
      <nav className="main-menu_nav">
        <a real="about" href="about">
          connected as Javier González Páez
        </a>
      </nav>
    </div>
  );
}

export default MenuAdmin;
