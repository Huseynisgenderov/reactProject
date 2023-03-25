import React, { useState, useEffect, useContext } from "react";
//Scss
import "./navbar.scss";
//Image
import logoLight from "../../assets/image/logo-light.svg";
import scrolledImg from "../../assets/image/kaft_logo.svg";
//react-router-dom
import { Link, useLocation } from "react-router-dom";
//CartContext
import { CartContext } from "../../cartContext";

const Navbar = () => {
  const { pathname } = useLocation();
  //for sticky navbar
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //for SideMenu
  const [showSideMenu, setShowSideMenu] = useState(false);
  //for LoginMenu
  const [showLoginMenu, setShowLoginMenu] = useState(false);

  //for useContext
  const { cart } = useContext(CartContext);

  return (
    <div
      className={`navbar ${
        scrolled ? "scrolled" : pathname !== "/" ? "black" : ""
      }`}
      id={showSideMenu ? "show" : showLoginMenu ? "showLogin" : ""}
    >
      <div className="row">
        <div className="menuBar">
          <span onClick={() => setShowSideMenu(!showSideMenu)}>
            <i></i>
            <i></i>
            <i></i>
          </span>
          <b onClick={() => setShowSideMenu(!showSideMenu)}>Menu</b>
        </div>
        <div className="middle-col">
          <Link to="/">
            <img
              src={scrolled || pathname !== "/" ? scrolledImg : logoLight}
              alt="logo"
            />
          </Link>
        </div>
        <div className="right-col">
          <Link onClick={() => setShowLoginMenu(!showLoginMenu)}>
            <p className="loginTitle">Login</p>
          </Link>
          <Link className="cartInfo" to="/cart">
            <small className="number">{cart.length}</small>
            <i class="fa-solid fa-cube"></i>
          </Link>
        </div>
      </div>
      <div className="login-sidebar">
        <div className="login-flex">
          <div className="login-header">
            <h5 className="login-title">Login</h5>
            <button onClick={() => setShowLoginMenu(false)}>
              <i class="fa-sharp fa-solid fa-xmark"></i>
            </button>
          </div>
          <div className="login-body">
            <div className="login-parent">
              <form>
                <div className="row">
                  <div className="col">
                    <label>Email Address</label>
                    <input type="text" />
                  </div>
                  <div className="col">
                    <label>Password</label>
                    <input type="password" />
                  </div>
                  <div className="col">
                    <div className="col-row">
                      <div className="col-left">
                        <input type="checkbox" />
                        <label htmlFor="">Remember me</label>
                      </div>
                      <div className="col-right">
                        <Link>Forgot password</Link>
                      </div>
                    </div>
                  </div>
                  <button className="button">Login</button>
                  <div className="or">
                    <span>Or</span>
                  </div>
                </div>
              </form>
              <div className="row">
                <div className="left">
                  <Link>
                    <i class="fa-brands fa-facebook-f"></i>Login
                  </Link>
                </div>
                <div className="right">
                  <Link>Join Kaft</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sideMenu">
        <div className="menu-top" onClick={() => setShowSideMenu(false)}>
          <span>X</span>
        </div>
        <div className="menu-inner">
          <ul className="menu-list">
            <li className="menu-item">
              <h2 className="menu-title">Shop</h2>
              <ul class="shop-list-item">
                <li className="shop-item">
                  <Link>Creative T-shirts</Link>
                </li>
                <li className="shop-item">
                  <Link>Basic T-shirts</Link>
                </li>
                <li className="shop-item">
                  <Link>Tanks</Link>
                </li>
                <li className="shop-item">
                  <Link>Shorts</Link>
                </li>
                <li className="shop-item">
                  <Link>Trousers</Link>
                </li>
                <li className="shop-item">
                  <Link>Shorts</Link>
                </li>
                <li className="shop-item">
                  <Link>Trousers</Link>
                </li>
                <li className="shop-item">
                  <Link>Bags</Link>
                </li>
                <li className="shop-item">
                  <Link>Jacket</Link>
                </li>
                <li className="shop-item">
                  <Link>Creative Hoodies</Link>
                </li>
                <li className="shop-item">
                  <Link>Zip Hoodies</Link>
                </li>
                <li className="shop-item">
                  <Link>Sweatshirts</Link>
                </li>
                <li className="shop-item">
                  <Link>Beanies</Link>
                </li>
                <li className="shop-item">
                  <Link>Socks</Link>
                </li>
              </ul>
              <ul class="other-list-item">
                <li>
                  <Link>Fujifilm x KAFT</Link>
                </li>
                <li>
                  <Link>2022 T-shirt Series</Link>
                </li>
                <li>
                  <Link>Hybrid Minds / NFT</Link>
                </li>
                <li>
                  <Link>Kaft Colors</Link>
                </li>
                <li>
                  <Link>Lookbook</Link>
                </li>
                <li>
                  <Link>Gift Card</Link>
                </li>
                <li>
                  <Link>Tee Machine</Link>
                </li>
              </ul>
            </li>
            <li className="menu-item second">
              <h2 className="menu-title">Info</h2>
              <ul class="info-list">
                <li>
                  <Link>Order Status</Link>
                </li>
                <li>
                  <Link>Return and Change</Link>
                </li>
                <li>
                  <Link>Help</Link>
                </li>
                <li>
                  <Link>Contact</Link>
                </li>
              </ul>
              <p className="top-info-p">
                <Link>Live Chat</Link>
              </p>
              <p>
                <Link>info@kaft.com</Link>
              </p>
              <p>
                <Link>+90 212 2673634</Link>
              </p>
            </li>
            <li className="menu-item kaft-world">
              <h2 className="menu-title">Kaft World</h2>
              <ul class="info-list">
                <li>
                  <Link>About Kaft</Link>
                </li>
                <li>
                  <Link>Designers</Link>
                </li>
                <li>
                  <Link>Journeys</Link>
                </li>
                <li>
                  <Link>Kaftsoul - Photos</Link>
                </li>
                <li>
                  <Link>Videos</Link>
                </li>
                <li>
                  <Link>Join The Team</Link>
                </li>
                <li>
                  <Link>Wallpapers</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
