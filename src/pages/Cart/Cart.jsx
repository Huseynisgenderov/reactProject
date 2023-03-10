import React from "react";
import "./cart.scss";
import { Link } from "react-router-dom";
import paltar from "../../assets/image/atlet.jpg";
import Footer from "../../components/Footer/Footer";

const Cart = () => {
  return (
    <div className="cart-page">
      <header>
        <Link to="/" className="logo" />
        <Link to="/" className="back" />
      </header>
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
          <div className="cart-row">
            <div className="row-top">
              <Link className="prd-img">
                <img src={paltar} alt="" />
              </Link>
              <div className="row-inner">
                <div className="prd-title">Methone - Asphalt - Bag</div>
                <div className="prd-detail">Unisex / Asphalt / M</div>
                <div className="prd-amount">
                  <form>
                    <label>Quantity</label>
                    <Link class="prd-amount-update">-</Link>
                    <input type="number" value="1" disabled="" />
                    <Link class="prd-amount-update">+</Link>
                  </form>
                </div>
                <div className="close">
                  <i class="fa-solid fa-xmark"></i>
                </div>
                <div className="update-price">$ 74</div>
              </div>
            </div>
          </div>
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
                          <input type="text" placeholder="Enter code"/>
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
                      <div className="sum-price">$ 74</div>
                    </div>
                    <button>Check Out</button>
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
      <Footer/>
    </div>
  );
};

export default Cart;
