import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./home.scss";
import hero from "../../assets/image/hero.webp";
import hero2 from "../../assets/image/hero2.webp";
import hero3 from "../../assets/image/hero3.webp";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: hero,
      content: "Slide 1 content",
    },
    {
      image: hero2,
      content: "Slide 2 content",
    },
    {
      image: hero3,
      content: "Slide 3 content",
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
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="slide__content">{slide.content}</div>
        </div>
      ))}
      <div className="slider__buttons">
        {slides.map((slide, index) => (
          <button
            key={index}
            className={`slider__button ${index === currentSlide ? 'active' : ''}`}
            onClick={() => handleButtonClick(index)}
          >
          </button>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Home;
