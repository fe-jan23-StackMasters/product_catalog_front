import React from 'react';
import Slider from 'react-slick';
import './SliderProductPage.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BASE_URL } from '../../api/requests';
import img from '../../icons/Logo.svg';

type PropsSliderProduct = {
  items: string[] | undefined;
};

export const SliderProductPage: React.FC<PropsSliderProduct>
  = ({ items }) => {
    const settings = {
      dots: true,
      dotsClass: 'slick-dots slick-thumb',
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      arrows: false,
      slidesToScroll: 1,
      customPaging: function(i: number) {
        return (
          <img
            src={items ? (BASE_URL + '/' + items[i]) : img}
            className="slick__point"
          />
        );
      },
    };

    return (
      <div className="slick-container  grid__phone
      grid__item-tablet--1-6 grid__item-desktop--1-12">
        <Slider {...settings} className="slick__soloSlider">
          {
            items?.map((item) =>
              (
              <div className="slick__soloSlider-item" key={item}>
                <img
                  className="slick__soloSlider-item picture"
                  src={item ? (BASE_URL + '/' + item) : img}
                />
              </div>
              ))
          }
        </Slider>
      </div>
    );
  };
