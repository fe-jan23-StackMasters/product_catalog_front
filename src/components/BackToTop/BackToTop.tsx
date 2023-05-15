import './BackToTop.scss';

import React from 'react';

export const BackToTop: React.FC = () => {
  const handleToTopClick = () => {
    scrollTo(0, 0);
  };

  return (
    <div className="backToTop__button" onClick={() => handleToTopClick()}>
      <a className="backToTop__button--link">
        Back to top
        <div className="backToTop__button--img"></div>
      </a>
    </div>
  );
};
