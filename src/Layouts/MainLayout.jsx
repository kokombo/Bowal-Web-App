import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Sidebar } from "../Components";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Outlet />
    </>
  );
};

export default MainLayout;
