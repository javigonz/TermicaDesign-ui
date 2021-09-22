import React from "react";
import "./Layout.css";
import Menu from "../Menu";
import Footer from "../Footer";

function Layout({ children, select }) {
  return (
    <div className="main">
      <Menu selected={select} />
      <div className="main-content">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
