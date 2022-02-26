import React from "react";
import { Nav, NavIcon, NavLink } from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to="/"> Fast Food </NavLink>
        <NavIcon onClick={toggle}>
          <p> Menu </p>
        </NavIcon>
      </Nav>
    </>
  );
};
export default Navbar;
