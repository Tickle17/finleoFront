import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/header";
import Footer from "./Footer/footer";
import "./style.scss";

export default function Layout() {
  return (
    <>
      <Header />
      <div style={{ position: "relative" }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
