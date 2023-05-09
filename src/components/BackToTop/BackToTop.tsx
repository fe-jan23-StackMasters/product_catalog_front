import './BackToTop.scss';

import React from 'react';

export const BackToTop: React.FC = () => {
  return (
    <div className="backToTop__button">
      <a href="#" className="backToTop__button--link">
        Back to top
        <div className='backToTop__button--img'></div>
      </a>
    </div>
  );
};
