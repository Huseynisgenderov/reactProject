import "./collection.scss";
import tisort1 from "../../assets/image/collection1.jpg";
import tisort2 from "../../assets/image/collection2.jpg";
import tisort3 from "../../assets/image/collection3.jpg";
import tisort4 from "../../assets/image/collection4.jpg";
import tisort5 from "../../assets/image/collection5.jpg";
import tisort6 from "../../assets/image/collection6.jpg";
//react-touter-dom
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Mousewheel, Keyboard } from "swiper";

const Collection = () => {
  return (
    <section className="collection-section">
      <h2 className="collection-title">Featured products</h2>
      <Swiper
        slidesPerView={2}
        spaceBetween={0}
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Mousewheel, Keyboard]}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="product">
            <Link to="/products">
              <img src={tisort1} alt="tisort1" />
            </Link>
            <div className="product-bottom">
              <div className="bottom-info">
                <Link to="/products">
                  <div className="bottom-title">Kleuzip - Tar</div>
                  <div className="bottom-price">
                    <span className="price-set old-price">$ 85</span>
                    <span className="price-set">$ 76</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product">
            <Link to="/products">
              <img src={tisort2} alt="tisort2" />
            </Link>
            <div className="product-bottom">
              <div className="bottom-info">
                <Link to="/products">
                  <div className="bottom-title">Acro</div>
                  <div className="bottom-price">
                    <span className="price-set old-price">$ 90</span>
                    <span className="price-set">$ 76</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product">
            <Link to="/products">
              <img src={tisort3} alt="tisort3" />
            </Link>
            <div className="product-bottom">
              <div className="bottom-info">
                <Link to="/products">
                  <div className="bottom-title">Ruga - Off White</div>
                  <div className="bottom-price">
                    <span className="price-set old-price">$ 85</span>
                    <span className="price-set">$ 76</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product">
            <Link to="/products">
              <img src={tisort4} alt="tisort4" />
            </Link>
            <div className="product-bottom">
              <div className="bottom-info">
                <Link to="/products">
                  <div className="bottom-title">Oileka - Coral</div>
                  <div className="bottom-price">
                    <span className="price-set old-price">$ 80</span>
                    <span className="price-set">$ 76</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product">
            <Link to="/products">
              <img src={tisort5} alt="tisort5" />
            </Link>
            <div className="product-bottom">
              <div className="bottom-info">
                <Link to="/products">
                  <div className="bottom-title">Xpocket - Coral</div>
                  <div className="bottom-price">
                    <span className="price-set old-price">$ 96</span>
                    <span className="price-set">$ 80</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product">
            <Link to="/products">
              <img src={tisort6} alt="tisort6" />
            </Link>
            <div className="product-bottom">
              <div className="bottom-info">
                <Link to="/products">
                  <div className="bottom-title">Kleuzip - Concrete</div>
                  <div className="bottom-price">
                    <span className="price-set old-price">$ 90</span>
                    <span className="price-set">$ 78</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Collection;
