import React, { useCallback } from 'react';
import { Button } from '../Button/Button';
import classNames from 'classnames';
import './add_to_cart_button.scss';
import { useLocalStorageContext } from '../../context/StorageContext';
import { PhoneCard } from '../../types/PhoneCard';

interface Props {
  height: string;
  product: PhoneCard;
}

export const AddToCart: React.FC<Props> = ({ height, product }) => {
  const { addToCart, removeFromCart, isAddedToCart } = useLocalStorageContext();

  const isInCart = isAddedToCart(product.id);

  const handleClick = useCallback(() => {
    if (isInCart) {
      removeFromCart(product.id);
    } else {
      addToCart({ info: product, quantity: 1 });
    }
  }, [isInCart]);

  return (
    <Button
      width="77%"
      height={`${height}`}
      type={classNames('btn__add-to', {
        'btn__add-to--added': isInCart,
      })}
      handler={handleClick}
    >
      {isInCart ? 'Added' : 'Add to cart'}
    </Button>
  );
};
