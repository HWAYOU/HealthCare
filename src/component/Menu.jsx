import React from "react";
import { NavLink } from "react-router-dom";
import "../style/Menu.scss";

const Menu = () => {
  const activeStyle = {
    color: "#6392ff",
  };

  return (
    <div className="menu">
      <NavLink
        className="link"
        style={({ isActive }) => (isActive ? activeStyle : {})}
        to="/">
        메인
      </NavLink>

      <NavLink
        className="link"
        style={({ isActive }) => (isActive ? activeStyle : {})}
        to="/healthadd">
        건강기록
      </NavLink>

      <NavLink
        className="link"
        style={({ isActive }) => (isActive ? activeStyle : {})}
        to="/healthlist">
        기록관리
      </NavLink>
    </div>
  );
};

export default Menu;
