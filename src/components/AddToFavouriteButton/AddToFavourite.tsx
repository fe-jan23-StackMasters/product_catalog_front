import React, { useMemo } from 'react';
import { Button } from '../Button/Button';
import './add_to_favourite_button.scss';
import favouriteIcon from '../../icons/favourites.svg';
import favouriteIconFilled from '../../icons/faqvoritesFilled.svg';
import classNames from 'classnames';

interface Props {
  size: string,
  onFavouriteAdd: () => void,
  favIds: string[],
  id: string,
}

export const AddToFavourites: React.FC<Props> = ({
  size,
  onFavouriteAdd,
  favIds,
  id,
}) => {
  const isFavorite = favIds.some((el: string) => el === id);

  const imagePath = useMemo(() => (
    isFavorite
      ? favouriteIconFilled
      : favouriteIcon
  ), [isFavorite]);

  return (
    <Button
      width={size}
      height={size}
      type={classNames(
        'btn__fav',
        { 'btn__fav--added': isFavorite },
      )}
      handler={onFavouriteAdd}
    >
      <img
        src={imagePath}
        alt="favourite"
      />
    </Button>
  );
};
