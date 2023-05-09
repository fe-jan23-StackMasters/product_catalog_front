import React from 'react';
import { Button } from '../Button/Button';
import './add_to_cart_button.scss';

interface Props {
  height: string,
}

export const AddToCart: React.FC<Props> = ({ height }) => {
  return (
    <Button
      width="100%"
      height={`${height}`}
      type='btn__add'
    >
      Add to cart
    </Button>
  );
};
