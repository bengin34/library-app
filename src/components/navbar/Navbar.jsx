import React, { useState } from "react";
import Flex from "../../styles/Flex";
import {
  Logo,
  Nav,
  Menu,
  MenuLink,
  HamburgerIcon,
} from "../navbar/Navbar.style";
import { menuIcon } from "../../helper/iconData";

const Navbar = ({ currentUser, setCurrentUser }) => {
  const [showMenu, setShowMenu] = useState(
    sessionStorage.getItem("user") || false
  );

  const logout = () => {
    setCurrentUser(false);
    sessionStorage.clear();
  };
  return (
    <Nav justify="space-between" wrap="wrap">
      <Logo to="/">Dev's Library</Logo>
      <HamburgerIcon onClick={() => setShowMenu(!showMenu)}>
        {menuIcon}
      </HamburgerIcon>
      <Menu showMenu={showMenu}>
        <MenuLink to="/"  style={({isActive}) => {
          return {color:isActive ? "red" : "inherit"}
        }}>Home</MenuLink>
        <MenuLink to="/about">About</MenuLink>
        {currentUser ? (
          <MenuLink to="/login">Logout</MenuLink>
        ) : (
          <>
            <MenuLink to="/register">Register</MenuLink>
            <MenuLink to="/login">Login</MenuLink>
          </>
        )}
      </Menu>
    </Nav>
  );
};

export default Navbar;
