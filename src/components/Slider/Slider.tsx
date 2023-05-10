
// eslint-disable-next-line spaced-comment
//import { Phone } from '../../Types/Phone';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.scss';
import ArrowRight from '../../icons/arrowRight.svg';
import ArrowLeft from '../../icons/arrowLeft.svg';
import { ProductCard } from '../ProductCard';
import React from 'react';

type Props = {
  NameSlider: string,
};

export const HomeSlider: React.FC<Props> = ({ NameSlider }) => {
  const arrowRight = <div><img src={ArrowRight} /></div>;
  const arrowLeft = <div><img src={ArrowLeft} /></div>;
  const settings = {
    infinite: false,
    speed: 300,
    variableWidth: true,
    slidesToShow: 4,
    nextArrow: arrowRight,
    prevArrow: arrowLeft,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='slider__container'>
      <h1 className='name__slider'>{NameSlider}</h1>
      <div className='slider'>
        <Slider {...settings}>
          <div className='item'>
            <ProductCard />
          </div>
          <div className='item'>
            <ProductCard />
          </div>
          <div className='item'>
            <ProductCard />
          </div>
          <div className='item'>
            <ProductCard />
          </div>
          <div className='item'>
            <ProductCard />
          </div>
          <div className='item'>
            <ProductCard />
          </div>
        </Slider>
      </div>
    </div >
  );
};
