import React from "react";
import Header from "../header";
import Footer from "../footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div className="flex space-x-3">
        <Header />
        <div className="pt-8">
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
