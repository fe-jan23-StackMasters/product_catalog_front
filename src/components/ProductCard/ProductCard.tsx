import React from 'react';
import { AddToCart } from '../AddToCartButton/AddToCartButton';
import { AddToFavourites } from '../AddToFavouriteButton/AddToFavourite';
import './product_card.scss';
import { PhoneCard } from '../../types/PhoneCard';
import { NavLink } from 'react-router-dom';
import { BASE_URL } from '../../api/requests';

interface Props {
  product: PhoneCard;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  // eslint-disable-next-line max-len
  const { name, fullPrice, price, screen, capacity, ram, phoneId, image } = product;

  const inces = screen.split(' ')[0];

  return (
    <div className="card">
      <NavLink to={`/phones/${phoneId}`} className="card__link">
        <img src={`${BASE_URL}/${image}`} alt={name} className="card__image" />

        <h1 className="card__title">{name}</h1>
      </NavLink>

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
          <p className="characteristic__value">{inces}</p>

          <p className="characteristic__value">{capacity}</p>

          <p className="characteristic__value">{ram}</p>
        </div>
      </div>

      <div className="card__buttons">
        <AddToCart height="40px" product={product} />

        <AddToFavourites size="40px" product={product} />
      </div>
    </div>
  );
};
