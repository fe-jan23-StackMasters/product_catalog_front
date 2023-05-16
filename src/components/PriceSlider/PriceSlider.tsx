import Slider from '@mui/material/Slider';
import { useState } from 'react';
import './PriceSlider.scss';

export const PriceSlider = () => {
  const [range, setRange] = useState<number | number[]>([0, 5000]);
  const handleChanges = (_event: Event, newValue: number | number[]) => {
    setRange(newValue);
  };

  const rangeMin = Array.isArray(range) ? range[0] : 0;
  const rangeMax = Array.isArray(range) ? range[1] : 5000;

  return (
    <div className="filterPrice">
      <div className="filterPrice__container">
        <span className="filterPrice__value">${rangeMin}</span>

        <Slider
          value={range}
          onChange={handleChanges}
          max={5000}
          size="small"
        />

        <span className="filterPrice__value">${rangeMax}</span>
      </div>
    </div>
  );
};
