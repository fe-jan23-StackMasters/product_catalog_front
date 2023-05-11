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
  const HomeSliderSetings = {
    infinite: false,
    speed: 300,
    variableWidth: true,
    slidesToShow: 4,
    arrows: false,
    nextArrow: arrowRight,
    prevArrow: arrowLeft,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows: true,
        },
      },
    ],
  };

  return (
    <div className="slider__container">
      <h1 className="name__slider">{NameSlider}</h1>
      <div className="slider">
        <Slider {...HomeSliderSetings}>
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
