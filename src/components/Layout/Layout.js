import React from "react";
import "./Layout.css";
import { QueryClientProvider, QueryClient } from "react-query";
import Menu from "../Menu";
import Footer from "../Footer";

const queryClient = new QueryClient();

function Layout({ children, select }) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="main">
        <Menu selected={select} />
        <div className="main-content">{children}</div>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default Layout;
