import Slider from '@mui/material/Slider';
import { useState } from 'react';
import './PriceSlider.scss';

export const PriceSlider = () => {
  const [range, setRange] = useState([0, 5000]);
  const handleChanges = (event: Event, newValue: any) => {
    setRange(newValue);
  };

  return (
    <div className="filterPrice">
      <div className="filterPrice__value">
        <span className="filterPrice__min">${range[0]}</span>
        <span className="filterPrice__max">${range[1]}</span>
      </div>

      <Slider value={range} onChange={handleChanges} max={5000} size="small" />
    </div>
  );
};
