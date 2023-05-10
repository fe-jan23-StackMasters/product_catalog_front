import React from 'react';
import { Button } from '../Button/Button';
import './add_to_favourite_button.scss';
import favouriteIcon from '../../icons/favourites.svg';

interface Props {
  size: string;
}

export const AddToFavourites: React.FC<Props> = ({ size }) => {
  return (
    <Button width={size} height={size} type="btn__fav">
      <img src={favouriteIcon} alt="Favourite" />
    </Button>
  );
};
