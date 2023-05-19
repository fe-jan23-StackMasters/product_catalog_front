import { useEffect, useState } from 'react';
import arrow from '../../icons/arrowBlackUp.svg';
import './DynamickBackToTopBtn.scss';
import classNames from 'classnames';

export const DynamickBackToTopBtn = () => {
  const [stateBackToTop, setStateBackToTop] = useState(true);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setStateBackToTop(true);
    }

    if ((window.pageYOffset + window.screen.height + 70)
      > document.documentElement.scrollHeight || window.pageYOffset < 300) {
      setStateBackToTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div
      className={classNames('backToTop__btn',
        { 'backToTop__btn--active': stateBackToTop })}
      onClick={() => scrollToTop()}
    >
      <img src={arrow} className='backToTop__btn-arrow' />
    </div>
  );
};