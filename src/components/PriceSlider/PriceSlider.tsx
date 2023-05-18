import Slider from '@mui/material/Slider';
import './PriceSlider.scss';
import React from 'react';

type Props = {
  priceMin: number;
  priceMax: number;
  handleChangeFilterPrice: (e: Event, newValue: number | number[]) => void;
};

export const PriceSlider: React.FC<Props> = ({
  priceMax,
  priceMin,
  handleChangeFilterPrice,
}) => {
  return (
    <div className="filterPrice">
      <div className="filterPrice__container">
        <span className="filterPrice__value">${priceMin}</span>

        <Slider
          value={[priceMin, priceMax]}
          onChange={handleChangeFilterPrice}
          max={5000}
          size="small"
        />

        <span className="filterPrice__value">${priceMax}</span>
      </div>
    </div>
  );
};
