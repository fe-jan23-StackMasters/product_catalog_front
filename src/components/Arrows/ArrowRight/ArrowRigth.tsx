import './ArrowRight.scss';
import React, { useContext } from 'react';
import classNames from 'classnames';
import { ThemeContext } from '../../../context/toggleContext';

interface Props {
  onClick: () => void;
  disableRigthArrow: boolean;
}

export const ArrowRigth: React.FC<Props> = ({ onClick, disableRigthArrow }) => {
  const { theme } = useContext(ThemeContext);
  let isLight = false;

  if (theme === 'light') {
    isLight = true;
  } else {
    isLight = false;
  }

  return (
    <div
      className={classNames('arrow-rigth', {
        'arrow-rigth--light': isLight,
        'arrow-rigth--disabled': disableRigthArrow,
      })}
      onClick={onClick}
    ></div>
  );
};
