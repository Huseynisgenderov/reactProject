import { useState, useEffect, useContext } from "react";
//Scss
import "./navbar.scss";
//Image
import logoLight from "../../assets/image/logo-light.svg";
import scrolledImg from "../../assets/image/kaft_logo.svg";
//react-router-dom
import { Link, useLocation } from "react-router-dom";
//CartContext
import { CartContext } from "../../cartContext";
import { LoginSideBar } from "./LoginSideBar";

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
      <LoginSideBar onClose={() => setShowLoginMenu(!showLoginMenu)}/>
      <div className="sideMenu">
        <div className="menu-top" onClick={() => setShowSideMenu(false)}>
          <span>X</span>
        </div>
        <div className="menu-inner">
          <ul className="menu-list" onClick={() => setShowSideMenu(false)}>
            <li className="menu-item">
              <h2 className="menu-title">Shop</h2>
              <ul class="shop-list-item">
                <li className="shop-item">
                  <Link to="/products">Creative T-shirts</Link>
                </li>
                <li className="shop-item">
                  <Link to="/products">Basic T-shirts</Link>
                </li>
                <li className="shop-item">
                  <Link to="/products">Tanks</Link>
                </li>
                <li className="shop-item">
                  <Link to="/products">Shorts</Link>
                </li>
                <li className="shop-item">
                  <Link to="/products">Trousers</Link>
                </li>
                <li className="shop-item">
                  <Link to="/products">Shorts</Link>
                </li>
                <li className="shop-item">
                  <Link to="/products">Trousers</Link>
                </li>
                <li className="shop-item">
                  <Link to="/products">Bags</Link>
                </li>
                <li className="shop-item">
                  <Link to="/products">Jacket</Link>
                </li>
                <li className="shop-item">
                  <Link to="/products">Creative Hoodies</Link>
                </li>
                <li className="shop-item">
                  <Link to="/products">Zip Hoodies</Link>
                </li>
                <li className="shop-item">
                  <Link to="/products">Sweatshirts</Link>
                </li>
                <li className="shop-item">
                  <Link to="/products">Beanies</Link>
                </li>
                <li className="shop-item">
                  <Link to="/products">Socks</Link>
                </li>
              </ul>
              <ul class="other-list-item">
                <li>
                  <Link to="https://www.kaft.com/en/series/35">
                    Fujifilm x KAFT
                  </Link>
                </li>
                <li>
                  <Link to="https://www.kaft.com/en/series">
                    2022 T-shirt Series
                  </Link>
                </li>
                <li>
                  <Link to="https://www.kaft.com/en/kaft-hybrid-minds">
                    Hybrid Minds / NFT
                  </Link>
                </li>
                <li>
                  <Link to="https://www.kaft.com/en/kaft-colors">
                    Kaft Colors
                  </Link>
                </li>
                <li>
                  <Link to="https://www.kaft.com/en/lookbook-main">
                    Lookbook
                  </Link>
                </li>
                <li>
                  <Link to="https://www.kaft.com/en/gift-card">Gift Card</Link>
                </li>
                <li>
                  <Link to="https://www.kaft.com/en/teemachine">
                    Tee Machine
                  </Link>
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
        <div className="menu-bottom">
          <Link to="/register" onClick={() => setShowSideMenu(false)}>Register/Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
