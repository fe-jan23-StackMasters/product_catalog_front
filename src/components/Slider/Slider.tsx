// eslint-disable-next-line spaced-comment
//import { Phone } from '../../Types/Phone';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.scss';
import ArrowRight from '../../icons/arrowRight.svg';
import ArrowLeft from '../../icons/arrowLeft.svg';
import blackArrPrev from '../../icons/blackArrowLeft.svg';
import blackArrNext from '../../icons/blackArrowRight.svg';
import { PhoneCard } from '../../types/PhoneCard';
import React, { useContext } from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import { ProductCardSkeleton } from '../ProductCardSkeleton';
import { ThemeContext } from '../../context/toggleContext';

type Props = {
  title: string;
  products: PhoneCard[];
  isError: boolean;
  isLoading: boolean;
};

export const HomeSlider: React.FC<Props> = ({
  title,
  products,
  isError,
  isLoading,
}) => {
  const { theme } = useContext(ThemeContext);
  let nextArrPath = ArrowRight;
  let prevArrPath = ArrowLeft;

  if (theme === 'light') {
    nextArrPath = blackArrNext;
    prevArrPath = blackArrPrev;
  }

  const arrowRight = (
    <div>
      <img src={nextArrPath} />
    </div>
  );
  const arrowLeft = (
    <div>
      <img src={prevArrPath} />
    </div>
  );
  const settingsSlider = {
    infinite: true,
    speed: 300,
    variableWidth: true,
    slidesToShow: 4,
    nextArrow: arrowRight,
    prevArrow: arrowLeft,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 4800,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 2400,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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
        <div className="slider__container">
          <Slider {...settingsSlider}>
            {[1, 2, 3, 4, 5, 6].map((product) => (
              <div className="slider__item" key={product}>
                <ProductCardSkeleton />
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <div className="slider__container">
          <Slider {...settingsSlider}>
            {products.map((product) => (
              <div className="slider__item" key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
};
