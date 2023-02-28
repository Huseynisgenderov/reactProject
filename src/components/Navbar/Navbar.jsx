import React from "react";
import "./navbar.scss";
import logoLight from "../../assets/image/logo-light.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="row">
        <div className="menuBar">
          <span>
            <i></i>
            <i></i>
            <i></i>
            </span>
          <b>Menu</b>
        </div>
        <div className="middle-col">
          <Link to="/">
            <img src={logoLight} alt="logo" />
          </Link>
        </div>
        <div className="right-col">
            <Link><p className="loginTitle">Login</p></Link>
            <div className="cartInfo">
                <small className="number">0</small>
                <i class="fa-solid fa-cube"></i>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
