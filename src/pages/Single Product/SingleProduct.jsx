import React, { useState } from "react";
import "./singleProduct.scss";
import tisort from "../../assets/image/tisort.jpg";
import geeva from "../../assets/image/geeva-kaft.svg";
import gender from "../../assets/image/product_style_gender_unisex.svg";
import style from "../../assets/image/product_style_style_relax.svg";
import tank from "../../assets/image/tank.png";
import mobImg from "../../assets/image/mob-img.jpg";
import mobtitle from "../../assets/image/mob-title.svg";
import mob2 from "../../assets/image/mob2.jpg";
import mobsu from "../../assets/image/mob-su.svg";
import detail from "../../assets/image/detail.svg";
import detailImg from "../../assets/image/tisort_detail.jpg";

import { Link } from "react-router-dom";
import { sizeData } from "./sizes";

const SingleProduct = () => {
  const [showInch, setShowInch] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [selectedSize, setSelectedSize] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
    setSelectedSize(sizeData[index].sizeName);
  };

  return (
    <div className="singleProduct-page">
      <div className="single-content" id="return">
        <div className="product-img">
          <img src={tisort} alt="product" />
        </div>
        <div className="product-details">
          <div className="detail-wrapper">
            <div className="detail-inner">
              <div className="info">
                <h1>Keymaker</h1>
                <Link>
                  <img src={geeva} alt="geave" />
                </Link>
                <div className="short-info">
                  <div className="text">
                    <p>
                      Which one opens a door? The hand or the key? <br /> <br />{" "}
                      Neither, it's the keymaker.
                    </p>
                  </div>
                </div>
              </div>
              <div className="other-detail">
                <div
                  className="summary-properties"
                  style={{ marginBottom: "50px" }}
                >
                  <div className="property" style={{ marginRight: "50px" }}>
                    <div className="text">
                      Gender: <span>Unisex</span>
                    </div>
                    <div className="content">
                      <img src={gender} alt="unisex" />
                    </div>
                  </div>
                  <div className="property">
                    <div className="text">
                      Style: <span>Relax</span>
                    </div>
                    <div className="content">
                      <img src={style} alt="unisex" />
                    </div>
                  </div>
                </div>
                <div className="summary-properties">
                  Color: <span>Raven</span>
                </div>
                <div className="product-color-swipper">
                  <div className="swiper-wrapper">
                    <div className="color">
                      <div className="color_in"></div>
                    </div>
                  </div>
                </div>
                <div className="summary-properties size">
                  <div className="text">Size: {selectedSize}</div>
                </div>
                <div className="sizes">
                  <ul>
                    {sizeData.map((size, index) => (
                      <li
                        key={index}
                        className={activeIndex === index ? "active" : ""}
                        onClick={() => handleClick(index)}
                      >
                        <Link>{size.sizeName}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="purchase">
                <div className="price">
                  <span className="current">$ 39</span>
                </div>
                <button className="add-btn">
                  <span class="add">Add to Cart</span>
                </button>
              </div>
            </div>
            <div className="detail-tab">
              <ul>
                <a href="#view">View product information</a>
                <a href="#size">Size chart</a>
                <a href="#return">Return</a>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="right-side-view content row" id="size">
          <div className="property-sizechart">
            <div className="property-row">
              <div className="hidden-sm">
                <img src={tank} alt="tank" />
              </div>
              <div className="xlarge-sm">
                <div className="size-chart">
                  <div className="checkbox-title">cm</div>
                  <label class="switch">
                    <input
                      type="checkbox"
                      defaultChecked={showInch}
                      onChange={(e) => setShowInch(e.target.checked)}
                    />
                    <span class="input-slider round"></span>
                  </label>
                  <div className="checkbox-title">inch</div>
                  <div className="size-table">
                    <table>
                      <thead>
                        <tr>
                          <th></th>
                          <th>
                            <span
                              style={{
                                display: "block",
                                width: "30px",
                                height: "5px",
                                backgroundColor: "#ED5E4B",
                              }}
                            ></span>
                          </th>
                          <th>
                            <span
                              style={{
                                display: "block",
                                width: "30px",
                                height: "5px",
                                backgroundColor: "#EDC50A",
                              }}
                            ></span>
                          </th>
                          <th>
                            <span
                              style={{
                                display: "block",
                                width: "30px",
                                height: "5px",
                                backgroundColor: "#00D8C1",
                              }}
                            ></span>
                          </th>
                        </tr>
                      </thead>
                      <thead>
                        <tr>
                          <th>Size</th>
                          <th>Chest</th>
                          <th>Length</th>
                          <th>Hemline</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sizeData.map((size) => (
                          <tr>
                            <td class="bold">{size.sizeName}</td>
                            <td>
                              <span class="cm">
                                {showInch
                                  ? size.chest.sizeInInch
                                  : size.chest.sizeInCM}
                              </span>
                            </td>
                            <td>
                              <span class="cm">
                                {showInch
                                  ? size.length.sizeInInch
                                  : size.length.sizeInCM}
                              </span>
                            </td>
                            <td>
                              <span class="cm">
                                {showInch
                                  ? size.hemline.sizeInInch
                                  : size.hemline.sizeInCM}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="visible">
              <span className="content-title">
                <b>How To Measure?</b>
              </span>
              <br />
              <br />
              <b>Chest</b>
              <br />
              You should measure across the chest below armhole when laid flat.
              <br />
              <br />
              <b>Sleeve</b>
              <br />
              You should measure from the highest point of the shoulder down to
              product bottom hem.
              <br />
              <br />
              <b>Hemline</b>
              <br />
              You should measure from one side to another when laid flat.
            </div>
          </div>
          <div className="property-tab unvisible">
            <ul className="property-tab-menu">
              <li className="selected">
                <span className="line"></span>
                <span className="selected-title">Size chart</span>
              </li>
              <li>Let Kaft suggest you</li>
            </ul>
            <div className="desc-content">
              <span className="content-title">
                <b>How To Measure?</b>
              </span>
              <br />
              <br />
              <b>Chest</b>
              <br />
              You should measure across the chest below armhole when laid flat.
              <br />
              <br />
              <b>Sleeve</b>
              <br />
              You should measure from the highest point of the shoulder down to
              product bottom hem.
              <br />
              <br />
              <b>Hemline</b>
              <br />
              You should measure from one side to another when laid flat.
            </div>
          </div>
        </div>
        <div className="left-side-view row content" id="view">
          <div className="property-tab left">
            <ul className="property-tab-menu">
              <li className="selected">
                <span className="line"></span>
                <span className="selected-title">Fabric quality</span>
              </li>
              <li>Printing quality</li>
              <li>Details</li>
            </ul>
            <div className="desc-content">
              <p>
                Made of 100% good quality combed cotton called double-knit
                fabric, a bit thicker but breathable.
              </p>
              <br />
              <br />
              Because we send them pre-washed, there is a very little chance of
              shrinking after recommended wash.
              <br />
              <br />
              The coloring materials used for production are fully organic,
              certified and safe, posing no risk for human health.
              <br />
              <br />
              We do not use animal-based materials in our designs.
            </div>
            <div className="mob-desc">
              <div className="mob-title">
                <img src={mobtitle} alt="" />
                <span>Fabric quality</span>
              </div>
              Made of 100% good quality combed cotton called double-knit fabric,
              a bit thicker but breathable.
              <br />
              <br />
              Because we send them pre-washed, there is a very little chance of
              shrinking after recommended wash.
              <br />
              <br />
              The coloring materials used for production are fully organic,
              certified and safe, posing no risk for human health.
              <br />
              <br />
              We do not use animal-based materials in our designs.
            </div>
            <div className="mob-img">
              <img src={mobImg} alt="mob-img" />
            </div>
            <div className="mob-desc">
              <div className="mob-title">
                <img src={mobsu} alt="mobsu" />
                <span>Printing quality</span>
              </div>
              We use <b>'screen printing'</b> which is a breathable printing
              type. As it is fully integrated with the material, it doesn't feel
              plastic but soft when you touch.
              <br />
              <br />
              We do not claim that our prints will remain the same forever
              without fading; but you can rest assured that it will be more
              durable compared to many printed t-shirts.
              <br />
              <br />
              The coloring materials used for production are fully organic,
              certified and safe, posing no risk for human health.
            </div>
            <div className="mob-img">
              <img src={mob2} alt="mob-2" />
            </div>
            <div className="mob-desc">
              <div className="mob-title">
                <img src={detail} alt="mobsu" />
                <span>Details</span>
              </div>
              We don't like the harsh labels used for washing instructions.
              Instead, we printed the instructions on the fabric itself. It's
              not going to bother you anymore.
              <br />
              <br />
              There's a small, barely seen KAFT logo made of suede on the back
              of the neck.
            </div>
            <div className="mob-img">
              <img src={detailImg} alt="detail-img" />
            </div>
          </div>
          <div className="block-content">
            <img src={mobImg} alt="mob-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
