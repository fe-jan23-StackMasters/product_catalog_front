import React, { useMemo, useContext, useCallback } from 'react';
import { Button } from '../Button/Button';
import './add_to_favourite_button.scss';
import favouriteIcon from '../../icons/favourites.svg';
import favouriteIconFilled from '../../icons/faqvoritesFilled.svg';
import blackHeart from '../../icons/blackHeart.svg';
import classNames from 'classnames';
import { ThemeContext } from '../../context/toggleContext';
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

  const { theme } = useContext(ThemeContext);
  let imagePath;
  const isFavorite = isInFavorites(product.id);

  if (theme === 'light') {
    imagePath = useMemo(
      () => (isFavorite ? favouriteIconFilled : blackHeart),
      [theme, isFavorite],
    );
  } else {
    imagePath = useMemo(
      () => (isFavorite ? favouriteIconFilled : favouriteIcon),
      [theme, isFavorite],
    );
  }

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
      <img
        src={imagePath}
        alt="favourite"
        className={classNames({ 'btn__fav-heart--animating': isFavorite })}
      />
    </Button>
  );
};
