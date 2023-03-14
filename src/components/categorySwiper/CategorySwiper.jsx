import React from "react";
import { Link } from "react-router-dom";
//images
import atlet from "../../assets/image/atlet.jpg";
import backpack from "../../assets/image/backpack.jpg";
import basictisort from "../../assets/image/basictisort.jpg";
import ceket from "../../assets/image/ceket.jpg";
import corab from "../../assets/image/corab.jpg";
import kapsonlu_apendabrick from "../../assets/image/kapsonlu_apendabrick.jpg";
import kapsonlu_zippersulphur from "../../assets/image/kapsonlu_zippersulphur.jpg";
import pantolon from "../../assets/image/pantolon.jpg";
import papaq from "../../assets/image/papaq.jpg";
import shorts from "../../assets/image/shorts.jpg";
import sweatshirt from "../../assets/image/sweatshirt.jpg";
import tisort from "../../assets/image/tisort.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "./categorySwiper.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper";

const CategorySwiper = () => {
  return (
    <section className="category">
      <h2 className="categoryTitle">There are more things to be discovered</h2>
      <div className="swiper">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide style={{ backgroundImage: `url(${atlet})` }}>
            <Link to="/products" className="slide-inner">
              <span className="before"></span>
              <span className="title">Tanks</span>
              <span className="after"></span>
            </Link>
          </SwiperSlide>
          <SwiperSlide style={{ backgroundImage: `url(${backpack})` }}>
            <Link to="/products" className="slide-inner">
              <span className="before"></span>
              <span className="title">Bags</span>
              <span className="after"></span>
            </Link>
          </SwiperSlide>
          <SwiperSlide style={{ backgroundImage: `url(${basictisort})` }}>
            <Link to="/products" className="slide-inner">
              <span className="before"></span>
              <span className="title">Basic T-shirts</span>
              <span className="after"></span>
            </Link>
          </SwiperSlide>
          <SwiperSlide style={{ backgroundImage: `url(${ceket})` }}>
            <Link to="/products" className="slide-inner">
              <span className="before"></span>
              <span className="title">Jacket</span>
              <span className="after"></span>
            </Link>
          </SwiperSlide>
          <SwiperSlide style={{ backgroundImage: `url(${corab})` }}>
            <Link to="/products" className="slide-inner">
              <span className="before"></span>
              <span className="title">Socks</span>
              <span className="after"></span>
            </Link>
          </SwiperSlide>
          <SwiperSlide
            style={{ backgroundImage: `url(${kapsonlu_apendabrick})` }}
          >
            <Link to="/products" className="slide-inner">
              <span className="before"></span>
              <span className="title">Creative Hoodies</span>
              <span className="after"></span>
            </Link>
          </SwiperSlide>
          <SwiperSlide
            style={{ backgroundImage: `url(${kapsonlu_zippersulphur})` }}
          >
            <Link to="/products" className="slide-inner">
              <span className="before"></span>
              <span className="title">Zip Hoodies</span>
              <span className="after"></span>
            </Link>
          </SwiperSlide>
          <SwiperSlide style={{ backgroundImage: `url(${pantolon})` }}>
            <Link to="/products" className="slide-inner">
              <span className="before"></span>
              <span className="title">Trousers</span>
              <span className="after"></span>
            </Link>
          </SwiperSlide>
          <SwiperSlide style={{ backgroundImage: `url(${papaq})` }}>
            <Link to="/products" className="slide-inner">
              <span className="before"></span>
              <span className="title">Beanies</span>
              <span className="after"></span>
            </Link>
          </SwiperSlide>
          <SwiperSlide style={{ backgroundImage: `url(${shorts})` }}>
            <Link to="/products" className="slide-inner">
              <span className="before"></span>
              <span className="title">Shorts</span>
              <span className="after"></span>
            </Link>
          </SwiperSlide>
          <SwiperSlide style={{ backgroundImage: `url(${sweatshirt})` }}>
            <Link to="/products" className="slide-inner">
              <span className="before"></span>
              <span className="title">Sweatshirts</span>
              <span className="after"></span>
            </Link>
          </SwiperSlide>
          <SwiperSlide style={{ backgroundImage: `url(${tisort})` }}>
            <Link to="/products" className="slide-inner">
              <span className="before"></span>
              <span className="title creative">Creative T-shirts</span>
              <span className="after"></span>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default CategorySwiper;
