import React from 'react';
import { AddToCart } from '../AddToCartButton/AddToCartButton';
import { AddToFavourites } from '../AddToFavouriteButton/AddToFavourite';
import './product_card.scss';
import { PhoneCard } from '../../types/PhoneCard';
import { BASE_URL } from '../../api/requests';

interface Props {
  product: PhoneCard;
  onCardAdd: () => void;
  onFavouriteAdd: () => void;
  cardIds: string[];
  favIds: string[];
}

export const ProductCard: React.FC<Props> = ({
  product,
  onCardAdd,
  onFavouriteAdd,
  cardIds,
  favIds,
}) => {
  const { name, fullPrice, price, screen, capacity, ram, id, image } = product;

  return (
    <div className="card">
      <img
        src={`${BASE_URL}/${image}`}
        alt="Phone"
        className="card__image"
      />

      <h1 className="card__title">{name}</h1>

      <div className="card__prices">
        <p className="card__price--sale">${price}</p>

        <p className="card__price">${fullPrice}</p>
      </div>

      <div className="card__characteristics">
        <div className="card__characteristics-titles">
          <p className="characteristic__title">Screen</p>

          <p className="characteristic__title">Capacity</p>

          <p className="characteristic__title">RAM</p>
        </div>

        <div className="card__characteristics-values">
          <p className="characteristic__value">{screen}</p>

          <p className="characteristic__value">{capacity}</p>

          <p className="characteristic__value">{ram}</p>
        </div>
      </div>

      <div className="card__buttons">
        <AddToCart
          height="40px"
          onCardAdd={onCardAdd}
          id={id}
          cardIds={cardIds}
        />

        <AddToFavourites
          size="40px"
          onFavouriteAdd={onFavouriteAdd}
          favIds={favIds}
          id={id}
        />
      </div>
    </div>
  );
};
