import { useState } from "react";
//Scss
import "./footer.scss";
//react-router-dom
import { Link } from "react-router-dom";
//images
import uk from "../../assets/image/uk.png";
import visa from "../../assets/image/visa.png";
import paypal from "../../assets/image/PAYPAL.png";


const Footer = () => {
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <footer>
      <div className="footer-top">
        <div className="container">
          <div className="newsletter">
            <h4>Newsletter</h4>
            <form>
              <input
                onFocus={() => setShowConfirm(true)}
                type="email"
                placeholder="Email"
                name="emailAddress"
              />
              <button className="submit">
                <i class="fa-solid fa-chevron-right"></i>
              </button>
            </form>
            {showConfirm && (
              <div className="confirm">
                <span className="input-inner">
                  <input type="checkbox" />
                  <div className="info">
                    I approve to receive commercial electronic mail to my
                    contact info from KAFT and the data I have provided above
                    can be used by KAFT and can be transferred by KAFT to
                    services providers in line with this purpose within the
                    scope of
                    <span>Acknowledgement Letter regarding Personal Data.</span>
                  </div>
                </span>
              </div>
            )}
          </div>
          <div className="socials">
            <ul>
              <li>
                <Link className="link">
                  <i class="fa-brands fa-facebook-f"></i>
                </Link>
              </li>
              <li>
                <Link className="link">
                  <i class="fa-brands fa-instagram"></i>
                </Link>
              </li>
              <li>
                <Link className="link">
                  <i class="fa-brands fa-vimeo-v"></i>
                </Link>
              </li>
              <li>
                <Link className="link">
                  <i class="fa-brands fa-twitter"></i>
                </Link>
              </li>
              <li>
                <Link className="link">
                  <i class="fa-brands fa-behance"></i>
                </Link>
              </li>
            </ul>
          </div>
          <div className="menu m-large">
            <ul class="ul-clear">
              <li>
                <h2>Shop</h2>
              </li>
              <li>
                <Link>Creative T-shirts</Link>
              </li>
              <li>
                <Link>Basic T-shirts</Link>
              </li>
              <li>
                <Link>Tanks</Link>
              </li>
              <li>
                <Link>Shorts</Link>
              </li>
              <li>
                <Link>Trousers</Link>
              </li>
              <li>
                <Link>Bags</Link>
              </li>
              <li>
                <Link>Jacket</Link>
              </li>
              <li>
                <Link>Creative Hoodies</Link>
              </li>
              <li>
                <Link>Zip Hoodies</Link>
              </li>
              <li>
                <Link>Sweatshirts</Link>
              </li>
              <li>
                <Link>Beanies</Link>
              </li>
              <li>
                <Link>Socks</Link>
              </li>
            </ul>
            <ul class="ul-clear">
              <li>&nbsp;</li>
              <li>
                <Link>Fujifilm x KAFT</Link>
              </li>
              <li>
                <Link>2022 T-shirt Series</Link>
              </li>
              <li>
                <Link>Hybrid Minds / NF</Link>
              </li>
              <li>
                <Link>Kaft Colors</Link>
              </li>
              <li>
                <Link>New Products</Link>
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
            <ul class="ul-clear">
              <li>
                <h2>Info</h2>
              </li>
              <li>
                <Link>Order Status</Link>
              </li>
              <li>
                <Link>Return and Change</Link>
              </li>
              <li>
                <Link>Order and Payment</Link>
              </li>
              <li class="hidden">
                <Link>Points Of Sale</Link>
              </li>
              <li>
                <Link>Help</Link>
              </li>
              <li>
                <Link>Trading Guide</Link>
              </li>
              <li>
                <Link>
                  Acknowledgement Letter Regarding The Protection of Personal
                  Data
                </Link>
              </li>
              <li>
                <Link>Cookie Policy</Link>
              </li>
              <li>
                <Link>Cookie Preferences</Link>
              </li>
              <li>
                <Link>Kaftsoul Acknowledgement Letter</Link>
              </li>
              <li>
                <Link>Employee Candidate Acknowledgement Letter</Link>
              </li>
              <li>
                <Link>Data Controller Apply Form</Link>
              </li>
              <li>
                <Link>Membership Agreement</Link>
              </li>
              <li>
                <Link>Purchase Agreement</Link>
              </li>
              <li>
                <Link>Privacy Policy</Link>
              </li>
              <li>
                <Link>Contact</Link>
              </li>
            </ul>
            <ul class="ul-clear">
              <li>
                <h2>Kaft World</h2>
              </li>
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
          </div>
          <div className="menu m-small"></div>
        </div>
      </div>
      <div className="footer-middle">
        <button className="selections">
          <div className="currency">
            <div className="dropdown">
              <div className="dropdown-toggle">
                Azerbaijan ($)
                <i class="fa-solid fa-chevron-down"></i>
              </div>
            </div>
          </div>
          <div className="language">
            <div className="dropdown">
              <div className="dropdown-toggle">
                <img src={uk} alt="language" />
                English
                <i class="fa-solid fa-chevron-down"></i>
              </div>
            </div>
          </div>
        </button>
      </div>
      <div className="footer-bottom">
        <div className="row">
          <div className="footer-left">
            <p>© 2011-2022, KAFT Tasarım Tekstil San. ve Tic. A.Ş.</p>
          </div>
          <div className="footer-right">
            <img src={visa} alt="visa" />
            <img src={paypal} alt="paypal" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
