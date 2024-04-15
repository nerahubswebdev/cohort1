import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";
import "../../App.css";

const Layout = ({ children }) => {
  return (
    <div className="blur-background">
      {/* navbar here */}
      <Header />

      <Outlet />
      {/* footer here */}
      <Footer />
    </div>
  );
};

export default Layout;
