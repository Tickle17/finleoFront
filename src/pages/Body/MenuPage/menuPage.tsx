import React from "react";
import MenuTitle from "./menuTitle/MenuTitle";
import "./style.scss";
import MenuItems from "./MenuItems/menuItems";

export default function MenuPage() {
  return (
    <div>
      <div className="bg"></div>
      <MenuTitle></MenuTitle>
      <div>
        <MenuItems></MenuItems>
      </div>
    </div>
  );
}
