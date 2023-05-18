import React, { useCallback, useMemo } from 'react';
import { Button } from '../Button/Button';
import './add_to_favourite_button.scss';
import favouriteIcon from '../../icons/favourites.svg';
import favouriteIconFilled from '../../icons/faqvoritesFilled.svg';
import classNames from 'classnames';
import { useLocalStorageContext } from '../../context/StorageContext';
import { PhoneCard } from '../../types/PhoneCard';

interface Props {
  size: string;
  product: PhoneCard;
}

export const AddToFavourites: React.FC<Props> = ({ size, product }) => {
  const {
    addToFavorites,
    removeFromFavorites,
    isInFavorites,
  } = useLocalStorageContext();

  const isFavorite = isInFavorites(product.id);

  const imagePath = useMemo(
    () => (isFavorite ? favouriteIconFilled : favouriteIcon),
    [isFavorite],
  );

  const handleClick = useCallback(() => {
    if (isFavorite) {
      removeFromFavorites(product.id);
    }

    addToFavorites(product);
  }, [isFavorite]);

  return (
    <Button
      width={size}
      height={size}
      type={classNames('btn__fav', { 'btn__fav--added': isFavorite })}
      handler={handleClick}
    >
      <img src={imagePath} alt="favourite" />
    </Button>
  );
};
