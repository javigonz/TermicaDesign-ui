import React from "react";
import "./Layout.css";
import Menu from "../Menu";

function Layout({ children }) {
  return (
    <div className="main">
      <Menu />
      <div className="main-content">{children}</div>
    </div>
  );
}

export default Layout;
