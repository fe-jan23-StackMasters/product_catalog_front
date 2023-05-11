import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './BigSlider.scss';
import arrPrev from '../../icons/arrowLeft.svg';
import arrNext from '../../icons/arrowRight.svg';
import slideBunner from '../../images/header/Banner.png';

export const BigSlider: React.FC = () => {
  const prevArrow = (
    <div>
      <img src={arrPrev} />
    </div>
  );

  const nexArrow = (
    <div>
      <img src={arrNext} />
    </div>
  );

  const settings = {
    infinit: false,
    dots: true,
    arrows: true,
    dotsClass: 'dot',
    prevArrow: prevArrow,
    nextArrow: nexArrow,
    pauseOnFocus: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="sliderBig">
      <Slider {...settings}>
        <div className="sliderBig__item">
          <img className="imageBanner" src={slideBunner} alt="" />
        </div>
        <div className="sliderBig__item">
          <img className="imageBanner" src={slideBunner} alt="" />
        </div>
        <div className="sliderBig__item">
          <img className="imageBanner" src={slideBunner} alt="" />
        </div>
      </Slider>
    </div>
  );
};
