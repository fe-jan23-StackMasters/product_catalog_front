import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './BigSlider.scss';
import arrPrev from '../../icons/arrowLeft.svg';
import arrNext from '../../icons/arrowRight.svg';
import { useQuery } from '@tanstack/react-query';
import { BASE_URL, getBanners } from '../../api/requests';

export const BigSlider: React.FC = () => {
  const [banners, setBanners] = useState<string[]>([]);

  useQuery({
    queryKey: ['banners'],
    queryFn: () => getBanners(),
    onSuccess(data) {
      setBanners(data);
    },
  });

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
    autoplaySpeed: 5000,
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
    <div className="BigSlider">
      <Slider {...settings}>
        {/* {banners.map((banner) => (
          <div className="BigSlider__item" key={banner}>
            <div
              className="BigSlider__image"
              style={{
                backgroundImage: `url(${BASE_URL}/${banner})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
            />
          </div>
        ))} */}
        <div className="BigSlider__item">
          <div
            className="BigSlider__image"
            style={{
              backgroundImage: `url(${BASE_URL}/${banners[0]})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          />
        </div>
        <div className="BigSlider__item">
          <div
            className="BigSlider__image"
            style={{
              backgroundImage: `url(${BASE_URL}/${banners[1]})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          />
        </div>
        <div className="BigSlider__item">
          <div
            className="BigSlider__image"
            style={{
              backgroundImage: `url(${BASE_URL}/${banners[2]})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          />
        </div>
      </Slider>
    </div>
  );
};
