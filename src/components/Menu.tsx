import React from "react";
import { FaSun, FaHouse } from "react-icons/fa6";
import { BiMessageRoundedDetail, BiBell } from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";
import { GrLogout } from "react-icons/gr";
import Avatar from "./Avatar";
import { MenuStyled } from "../styled/menu";
import { Link, NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <MenuStyled>
      <Avatar
        size={"big"}
        src={
          "https://www.findresumetemplates.com/wp-content/uploads/2011/06/Fotolia_53201519_Subscription_XXL.jpg"
        }
      />
      <div className="menu-items">
        <NavLink to="/">
          <FaHouse />
          <span></span>
        </NavLink>

        <NavLink to="/chats">
          <BiMessageRoundedDetail />
          <span></span>
        </NavLink>

        <a href="">
          <BiBell />
          <span></span>
        </a>

        <NavLink to="/settings">
          <AiOutlineSetting />
          <span></span>
        </NavLink>
      </div>

      <a href="">
        <GrLogout />
      </a>
    </MenuStyled>
  );
};

export default Menu;
