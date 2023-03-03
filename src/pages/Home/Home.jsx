import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./home.scss";
import hero from "../../assets/image/hero.webp";
import hero2 from "../../assets/image/hero2.webp";
import hero3 from "../../assets/image/hero3.webp";
import { Link } from "react-router-dom";
import CategorySwiper from "../../components/categorySwiper/CategorySwiper";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: hero,
      small: "KAFT Colors Project",
      content: "NO: 11 / RAVEN",
    },
    {
      image: hero2,
      small: "Time of the",
      content: "HOODIES",
    },
    {
      image: hero3,
      small: "Duge",
      content: "4 NEW DESIGNS",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [currentSlide]);
  const handleButtonClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="home">
      <Navbar />
      <div className="slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <Link to="/" className="slide__content">
              <div className="circle">
                <div className="point"></div>
              </div>
              <small>{slide.small}</small>
              <h4>{slide.content}</h4>
            </Link>
          </div>
        ))}
        <div className="slider__buttons">
          {slides.map((slide, index) => (
            <button
              key={index}
              className={`slider__button ${
                index === currentSlide ? "active" : ""
              }`}
              onClick={() => handleButtonClick(index)}
            ></button>
          ))}
        </div>
      </div>
      <CategorySwiper/>
    </div>
  );
};

export default Home;
