import './ArrowRight.scss';
import React from 'react';
import classNames from 'classnames';

interface Props {
  onClick: () => void;
  disableRigthArrow: boolean;
}

export const ArrowRigth: React.FC<Props> = ({ onClick, disableRigthArrow }) => {
  return (
    <div
      className={classNames('arrow-rigth', {
        'arrow-rigth--disabled': disableRigthArrow,
      })}
      onClick={onClick}
    ></div>
  );
};
