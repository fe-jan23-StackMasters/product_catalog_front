import './BasketCard.scss';
import deleteIcon from '../../icons/Close.svg';
import React from 'react';
import { StorageProduct } from '../../types/StorageProduct';
import { ActionBasket } from '../../types/ActionBasket';
import { BASE_URL } from '../../api/requests';

type Props = {
  product: StorageProduct;
  handleRemovePhone: (phoneId: string) => void;
  handleAddOrRemoveQuantity: (phoneId: string, action: ActionBasket) => void;
};

export const BasketCard: React.FC<Props> = ({
  product,
  handleRemovePhone,
  handleAddOrRemoveQuantity,
}) => {
  const { price, id, image } = product.info;
  const isDisableMin = product.quantity < 2;
  const isDisableMax = product.quantity > 9;
  const imageLink = `${BASE_URL}/${image}`;

  return (
    <div className="basket__card">
      <div className="basket__card-top">
        <img
          src={deleteIcon}
          alt="delete"
          className="basket__card-delete"
          onClick={() => handleRemovePhone(id)}
        />
        <img src={imageLink} alt="iphone" className="basket__card-image" />
        <span className="basket__card-title">{product.info.name}</span>
      </div>

      <div className="basket__card-bottom">
        <div className="basket__card-bottom--increase">
          <button
            type="button"
            className="basket__card-minus"
            onClick={() => handleAddOrRemoveQuantity(id, 'delete')}
            disabled={isDisableMin}
          />
          <span className="basket__card-count">{product.quantity}</span>
          <button
            type="button"
            className="basket__card-plus"
            onClick={() => handleAddOrRemoveQuantity(id, 'add')}
            disabled={isDisableMax}
          />
        </div>
        <div className="basket__card-price">{`$${price}`}</div>
      </div>
    </div>
  );
};
