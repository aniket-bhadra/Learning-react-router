import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    // console.log(isActive);
    // {
    //     "isActive": false,
    //     "isPending": false
    // }
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "green" : "purple",
    };
  };


  return (
    <nav className="primary-nav">
      <NavLink to="/" style={navLinkStyles}>
        Home
      </NavLink>
      <NavLink to="/about" style={navLinkStyles}>
        About
      </NavLink>

    </nav>
  );
};

export default Navbar;
