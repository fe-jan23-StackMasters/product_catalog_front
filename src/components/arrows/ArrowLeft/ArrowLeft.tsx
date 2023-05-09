import './ArrowLeft.scss';
import React from 'react';
import classNames from 'classnames';

interface Props {
  onClick: () => void,
  disableLeftArrow: boolean
}

export const ArrowLeft: React.FC<Props> = ({ onClick, disableLeftArrow }) => {
  return (
    <div
      className={classNames(
        'arrow-left',
        { 'arrow-left--disabled': disableLeftArrow },
      )}
      onClick={onClick}
    ></div>
  );
};
