import { useEffect, useState } from 'react';
import arrow from '../../icons/arrowBlackUp.svg';
import './DynamickBackToTopBtn.scss';
import classNames from 'classnames';

export const DynamickBackToTopBtn = () => {
  const [stateBackToTop, setStateBackToTop] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setStateBackToTop(true);
    }

    if ((window.pageYOffset + window.screen.height)
      > document.documentElement.scrollHeight || window.pageYOffset < 300) {
      setStateBackToTop(false);
    }
  };

  const scrollToTop = () => {
    scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {stateBackToTop && (
        <div
        className={classNames('backToTop__btn',
          { 'backToTop__btn--active': stateBackToTop })}
        onClick={() => {
          scrollToTop();
        }}
      >
        <img src={arrow} className='backToTop__btn-arrow' />
      </div>
      )}
    </>
  );
};
