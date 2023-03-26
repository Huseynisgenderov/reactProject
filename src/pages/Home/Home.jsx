import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//scss
import "./home.scss";
//image
import hero from "../../assets/image/hero.webp";
import hero2 from "../../assets/image/hero2.webp";
import hero3 from "../../assets/image/hero3.webp";
//component
import CategorySwiper from "../../components/categorySwiper/CategorySwiper";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  //slide data
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
  }, [currentSlide, slides.length]);
  const handleButtonClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="home">
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
      <CategorySwiper />
      <section className="tripple">
        <div className="card left-col">
          <Link>
            <div className="mini">
              Do something for someone you love, <br />
              make their day.
            </div>
            <h4>GIFT CARD</h4>
          </Link>
        </div>
        <div className="card middle">
          <Link>
            <div className="mini">
              A limited edition package <br />
              about Kaft’s 10 years.
            </div>
            <h4>X PACK</h4>
          </Link>
        </div>
        <div className="card right">
          <Link>
            <div className="mini">
              Fun way to get Kaft t-shirts <br />
              at a <span className="link-underline">discount</span>
            </div>
            <h4>TEEMACHINE</h4>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
