import './TempCard.scss';
import React from 'react';

interface Props {
  number: number
}

export const Card: React.FC<Props> = ({ number }) => {
  return (
    <div className="card">{number}</div>
  );
};
