import React from "react";
import { Outlet } from "react-router-dom";

const ShopLayout = () => {
  return (
    <div className="flex space-x-2">
      <Sidebar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default ShopLayout;
