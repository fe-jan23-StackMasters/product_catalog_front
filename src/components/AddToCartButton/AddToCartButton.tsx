import React from 'react';
import { Button } from '../Button/Button';
import classNames from 'classnames';
import './add_to_cart_button.scss';

interface Props {
  height: string;
  onCardAdd: () => void;
  id: string;
  cardIds: string[];
}

export const AddToCart: React.FC<Props> = ({
  height,
  onCardAdd,
  id,
  cardIds,
}) => {
  const isAddedToCart = cardIds.some((el: any) => el.id === id);

  return (
    <Button
      width="77%"
      height={`${height}`}
      type={classNames('btn__add', { 'btn__add--added': isAddedToCart })}
      handler={onCardAdd}
    >
      {isAddedToCart ? 'Added' : 'Add to cart'}
    </Button>
  );
};
