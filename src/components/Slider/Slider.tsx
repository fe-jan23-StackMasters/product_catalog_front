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
import { Loader } from '../Loader';

type Props = {
  title: string;
  products: PhoneCard[];
  cardIds: string[];
  favIds: string[];
  onCardToggle: (basket: object) => void;
  onFavToggle: (basket: object) => void;
  isError: boolean,
  isLoading: boolean,
};

export const HomeSlider: React.FC<Props> = ({
  title,
  products,
  cardIds,
  favIds,
  onCardToggle,
  onFavToggle,
  isError,
  isLoading,
}) => {
  const quantity = '1';

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
    infinite: true,
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
    <div className="slider">
      <h2 className="slider__name">
        {isError ? 'Something went wrong...' : title}
      </h2>

      {isLoading ? (
        <div className='slider__loader'>
          <Loader />
        </div>
      ) : (
        <div className="slider__container">
          <Slider {...settingsSlider}>
            {products.map((product) => (
              <div className="slider__item" key={product.id}>
                <ProductCard
                  product={product}
                  onCardAdd={() =>
                    onCardToggle({ id: product.id, quantity, product })
                  }
                  onFavouriteAdd={() =>
                    onFavToggle({ id: product.id, quantity, product })
                  }
                  cardIds={cardIds}
                  favIds={favIds}
                />
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
};
