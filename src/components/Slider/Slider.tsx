// eslint-disable-next-line spaced-comment
//import { Phone } from '../../Types/Phone';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.scss';
import ArrowRight from '../../icons/arrowRight.svg';
import ArrowLeft from '../../icons/arrowLeft.svg';
import { ProductCard } from '../ProductCard';
import { PhoneCard } from '../../types/PhoneCard';
import React from 'react';

type Props = {
  NameSlider: string;
  products: PhoneCard[];
  cardIds: string[];
  favIds: string[];
  onCardAdd: () => void;
  onFavouriteAdd: () => void;
};

export const HomeSlider: React.FC<Props> = ({
  NameSlider,
  products,
  cardIds,
  favIds,
  onCardAdd,
  onFavouriteAdd,
}) => {
  const arrowRight = (
    <div>
      <img src={ArrowRight} />
    </div>
  );
  const arrowLeft = (
    <div>
      <img src={ArrowLeft} />
    </div>
  );
  const settingsSlider = {
    infinite: false,
    speed: 300,
    variableWidth: true,
    slidesToShow: 4,
    nextArrow: arrowRight,
    prevArrow: arrowLeft,
    responsive: [
      {
        breakpoint: 4800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 2400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider__container">
      <h1 className="name__slider">{NameSlider}</h1>
      <div className="slider">
        <Slider {...settingsSlider}>
          {products.map((product) => (
            <div className="item" key={product.id}>
              <ProductCard
                product={product}
                onCardAdd={onCardAdd}
                onFavouriteAdd={onFavouriteAdd}
                cardIds={cardIds}
                favIds={favIds}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
