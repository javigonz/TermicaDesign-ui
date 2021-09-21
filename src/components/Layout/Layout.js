import React from "react";
import "./Layout.css";
import Menu from "../Menu";

function Layout({ children, select }) {
  return (
    <div className="main">
      <Menu selected={select} />
      <div className="main-content">{children}</div>
    </div>
  );
}

export default Layout;
