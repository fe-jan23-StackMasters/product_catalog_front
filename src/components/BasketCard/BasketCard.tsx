import './BasketCard.scss';
import deleteIcon from '../../icons/Close.svg';
import React from 'react';
import { StorageProduct } from '../../types/StorageProduct';
import { BASE_URL } from '../../api/requests';
import { Link } from 'react-router-dom';
import { useLocalStorageContext } from '../../context/StorageContext';

type Props = {
  product: StorageProduct;
};

export const BasketCard: React.FC<Props> = ({ product }) => {
  const {
    decreaseQuantity,
    increaseQuantity,
    removeFromCart,
  } = useLocalStorageContext();

  const { price, id, image, itemId, name } = product.info;
  const imageLink = `${BASE_URL}/${image}`;
  const totalPrice = price * product.quantity;

  return (
    <div className="basket__card">
      <div className="basket__card-top">
        <img
          src={deleteIcon}
          alt="delete"
          className="basket__card-delete"
          onClick={() => removeFromCart(id)}
        />

        <Link to={`/phones/${itemId}`}>
          <img src={imageLink} alt="iphone" className="basket__card-image" />
        </Link>

        <Link to={`/phones/${itemId}`} className="basket__card-title">
          <span className="basket__card-title">{name}</span>
        </Link>
      </div>

      <div className="basket__card-bottom">
        <div className="basket__card-bottom--increase">
          <button
            type="button"
            className="basket__card-minus"
            onClick={() => decreaseQuantity(id)}
            disabled={product.quantity === 1}
          />
          <span className="basket__card-count">{product.quantity}</span>
          <button
            type="button"
            className="basket__card-plus"
            onClick={() => increaseQuantity(id)}
            disabled={product.quantity >= 20}
          />
        </div>
        <div className="basket__card-price">{`$${totalPrice}`}</div>
      </div>
    </div>
  );
};
