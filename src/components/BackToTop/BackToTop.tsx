import classNames from 'classnames';
import './BackToTop.scss';

import React, { useContext } from 'react';
import { ThemeContext } from '../../context/toggleContext';

export const BackToTop: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  let isLight = false;

  if (theme === 'light') {
    isLight = true;
  } else {
    isLight = false;
  }

  const handleToTopClick = () => {
    scrollTo(0, 0);
  };

  return (
    <div className="backToTop__button" onClick={() => handleToTopClick()}>
      <a className="backToTop__button--link">
        Back to top
        <div className={classNames(
          'backToTop__button--img',
          { 'backToTop__button--img--light': isLight },
        )}></div>
      </a>
    </div>
  );
};
