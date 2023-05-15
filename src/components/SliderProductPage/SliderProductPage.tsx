import Slider, { Settings } from 'react-slick';
import image from '../../images/header/image 2.png';
import './SliderProductPage.scss';

export default function SliderProductPage() {
  const settings1: Settings = {
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    customPaging: function() {
      return <img src={image} className="slick__point" />;
    },
  };

  return (
    <div className="slick__container">
      <Slider {...settings1} className="slick__soloSlider">
        <div className="slick__soloSlider-item">
          <img className="slick__soloSlider-item picture" src={image} />
        </div>
        <div className="slick__soloSlider-item">
          <img className="slick__soloSlider-item picture" src={image} />
        </div>
        <div className="slick__soloSlider-item">
          <img className="slick__soloSlider-item picture" src={image} />
        </div>
        <div className="slick__soloSlider-item">
          <img className="slick__soloSlider-item picture" src={image} />
        </div>
        <div className="slick__soloSlider-item">
          <img className="slick__soloSlider-item picture" src={image} />
        </div>
      </Slider>
    </div>
  );
}
