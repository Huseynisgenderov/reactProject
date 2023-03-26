import { useContext, useState } from "react";
//scss
import "./cart.scss";
import "../../components/Navbar/navbar.scss";
//react-router-dom
import { Link } from "react-router-dom";
//component
import Footer from "../../components/Footer/Footer";
import { LoginSideBar } from "../../components/Navbar/LoginSideBar";

//Context
import { CartContext } from "../../cartContext";

const Cart = () => {
  const { cart, setCart, totalPrice, setTotalPrice } = useContext(CartContext);
  //for LoginMenu
  const [showLoginMenu, setShowLoginMenu] = useState(false);

  const increment = (id) => {
    const updatedItem = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });
    setCart(updatedItem);
  };

  const decrement = (id) => {
    const updatedItem = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity - 1 };
      } else {
        return item;
      }
    });
    setCart(updatedItem);
  };

  const deleteItemFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  return (
    <div className="cart-page" id={showLoginMenu ? "showLogin" : ""}>
      <header>
        <Link to="/" className="logo" />
        <Link to="/" className="back" />
      </header>
      <LoginSideBar onClose={() => setShowLoginMenu(!showLoginMenu)} />
      <div className="inner-container" id="cart">
        <div className="step-progress">
          <div className="step-inner">
            <span className="top"></span>
            <ul class="progress-bar">
              <li className="active">
                <span>1. Cart Summary</span>
              </li>
              <li>
                <span>2. Shipping and Payment</span>
              </li>
              <li>
                <span>3. Order Confirmation</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="cart-rows">
          {cart.length === 0 ? (
            <h2 className="noItem">No Cart Items</h2>
          ) : (
            cart.map((cartItem) => (
              <div className="cart-row" key={cartItem.id}>
                <div className="row-top">
                  <Link className="prd-img">
                    <img
                      src={`http://localhost:5000/${cartItem?.productImage}`}
                      alt=""
                    />
                  </Link>
                  <div className="row-inner">
                    <div className="prd-title">{cartItem.name}</div>
                    <div className="prd-detail">Unisex / Asphalt / M</div>
                    <div className="prd-amount">
                      <form>
                        <label>Quantity</label>
                        <Link
                          class="prd-amount-update"
                          onClick={() => {
                            if (cartItem.quantity > 1) {
                              decrement(cartItem.id);
                              setTotalPrice(totalPrice - cartItem.price);
                            } else {
                              return;
                            }
                          }}
                        >
                          -
                        </Link>
                        <span>{cartItem.quantity}</span>
                        <Link
                          class="prd-amount-update"
                          onClick={() => {
                            increment(cartItem.id);
                            setTotalPrice(totalPrice + cartItem.price);
                          }}
                        >
                          +
                        </Link>
                      </form>
                    </div>
                    <div
                      className="close"
                      onClick={() => {
                        deleteItemFromCart(cartItem.id);
                        setTotalPrice(
                          totalPrice - cartItem.quantity * cartItem.price
                        );
                      }}
                    >
                      <i class="fa-solid fa-xmark"></i>
                    </div>
                    <div className="update-price">$ {cartItem.price}</div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="sum-type-cart">
          <div className="summary-wrapper">
            <div className="summary-holder">
              <div className="summary-inner">
                <div className="summary-head">
                  <div className="summary-top">
                    <div className="acc-tab">
                      <span>Enter gift card or promo code</span>
                    </div>
                    <div className="content">
                      <form>
                        <div className="input-container">
                          <input type="text" placeholder="Enter code" />
                        </div>
                        <button>Apply</button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="summary-bottom">
                  <div className="sum-payment">
                    <div className="sum-total">
                      <div className="label">
                        Subtotal <span>USD (US Dollar)</span>
                      </div>
                      <div className="sum-price">$ {totalPrice}</div>
                    </div>
                    <button onClick={() => setShowLoginMenu(!showLoginMenu)}>
                      Check Out
                    </button>
                    <div className="or">
                      <i>- or -</i>
                    </div>
                    <Link to="/products">Continue Shopping</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
