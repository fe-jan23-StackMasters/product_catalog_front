<<<<<<< HEAD
=======
// eslint-disable-next-line spaced-comment
//import { Phone } from '../../Types/Phone';
>>>>>>> ab94b49de57bd4d0ae58214b75a801d07f677763
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.scss';
import ArrowRight from '../../icons/arrowRight.svg';
import ArrowLeft from '../../icons/arrowLeft.svg';
<<<<<<< HEAD
// import { ProductCard } from '../ProductCard';
import React from 'react';

type Props = {
  NameSlider: string,
};

export const HomeSlider: React.FC<Props> = ({ NameSlider }) => {
  const arrowRight = <div><img src={ArrowRight} /></div>;
  const arrowLeft = <div><img src={ArrowLeft} /></div>;
  const settings = {
    infinite: false,
=======
import { ProductCard } from '../ProductCard';
import { PhoneCard } from '../../types/PhoneCard';
import React from 'react';
import { Loader } from '../Loader';

type Props = {
  title: string;
  products: PhoneCard[];
  cardIds: string[];
  favIds: string[];
  onCardAdd: () => void;
  onFavouriteAdd: () => void;
  isError: boolean,
  isLoading: boolean,
};

export const HomeSlider: React.FC<Props> = ({
  title,
  products,
  cardIds,
  favIds,
  onCardAdd,
  onFavouriteAdd,
  isError,
  isLoading,
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
    infinite: true,
>>>>>>> ab94b49de57bd4d0ae58214b75a801d07f677763
    speed: 300,
    variableWidth: true,
    slidesToShow: 4,
    nextArrow: arrowRight,
    prevArrow: arrowLeft,
    responsive: [
      {
<<<<<<< HEAD
        breakpoint: 1024,
=======
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
>>>>>>> ab94b49de57bd4d0ae58214b75a801d07f677763
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
<<<<<<< HEAD
        breakpoint: 930,
=======
        breakpoint: 900,
>>>>>>> ab94b49de57bd4d0ae58214b75a801d07f677763
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
<<<<<<< HEAD
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
=======
>>>>>>> ab94b49de57bd4d0ae58214b75a801d07f677763
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
<<<<<<< HEAD
    <div className='slider__container'>
      <h1 className='name__slider'>{NameSlider}</h1>
      <div className='slider'>
        <Slider {...settings}>
          {/* <div className='item'>
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
          </div> */}
        </Slider>
      </div>
    </div >
=======
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
                  onCardAdd={onCardAdd}
                  onFavouriteAdd={onFavouriteAdd}
                  cardIds={cardIds}
                  favIds={favIds}
                />
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
>>>>>>> ab94b49de57bd4d0ae58214b75a801d07f677763
  );
};
