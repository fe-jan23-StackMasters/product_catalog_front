import './ArrowLeft.scss';
import React, { useContext } from 'react';
import classNames from 'classnames';
import { ThemeContext } from '../../../context/toggleContext';

interface Props {
  onClick: () => void;
  disableLeftArrow: boolean;
}

export const ArrowLeft: React.FC<Props> = ({ onClick, disableLeftArrow }) => {
  const { theme } = useContext(ThemeContext);
  let isLight = false;

  if (theme === 'light') {
    isLight = true;
  } else {
    isLight = false;
  }

  return (
    <div
      className={classNames('arrow-left', {
        'arrow-left--light': isLight,
        'arrow-left--disabled': disableLeftArrow,
      })}
      onClick={onClick}
    ></div>
  );
};
