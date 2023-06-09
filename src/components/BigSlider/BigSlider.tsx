import React, { useContext, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './BigSlider.scss';
import arrPrev from '../../icons/arrowLeft.svg';
import arrNext from '../../icons/arrowRight.svg';
import blackArrPrev from '../../icons/blackArrowLeft.svg';
import blackArrNext from '../../icons/blackArrowRight.svg';
import { useQuery } from '@tanstack/react-query';
import { BASE_URL, Banner, getBanners } from '../../api/requests';
import { Loader } from '../Loader';
import { useResizeContext } from '../../context/ResizeContext';
import { ThemeContext } from '../../context/toggleContext';

export const BigSlider: React.FC = () => {
  const [banners, setBanners] = useState<Banner[]>([]);
  const { theme } = useContext(ThemeContext);
  let nextArrPath = arrNext;
  let prevArrPath = arrPrev;

  if (theme === 'light') {
    nextArrPath = blackArrNext;
    prevArrPath = blackArrPrev;
  }

  useQuery({
    queryKey: ['banners'],
    queryFn: () => getBanners(),
    onSuccess(data) {
      setBanners(data);
    },
  });

  const { isMobileScreen } = useResizeContext();

  const prevArrow = (
    <div>
      <img src={prevArrPath} />
    </div>
  );

  const nexArrow = (
    <div>
      <img src={nextArrPath} />
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
      {banners.length === 0 ? (
        <div className="BigSlider__skeleton">
          <div className="BigSlider__loader">
            <Loader />
          </div>
        </div>
      ) : (
        <Slider {...settings}>
          {banners.map((banner) => (
            <div className="BigSlider__item" key={banner.desktop}>
              <img
                className="BigSlider__image"
                src={`${BASE_URL}/${
                  isMobileScreen ? banner.mobile : banner.desktop
                }`}
              />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};
