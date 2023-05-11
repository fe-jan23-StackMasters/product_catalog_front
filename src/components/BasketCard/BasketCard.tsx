import './BasketCard.scss';
import deleteIcon from '../../icons/Close.svg';
import iphoneIcon from '../../imageIphone.svg';
import React from 'react';
import { StoragePhone } from '../../types/StoragePhone';
import { ActionBasket } from '../../types/ActionBasket';

type Props = {
  phone: StoragePhone;
  handleRemovePhone: (phoneId: string) => void;
  handleAddOrRemoveQuantity: (phoneId: string, action: ActionBasket) => void;
};

export const BasketCard: React.FC<Props> = ({
  phone,
  handleRemovePhone,
  handleAddOrRemoveQuantity,
}) => {
  const { price, id } = phone.product;
  const isDisableMin = +phone.quantity < 2;
  const isDisableMax = +phone.quantity > 9;

  return (
    <div className="basket__card">
      <div className="basket__card-top">
        <img
          src={deleteIcon}
          alt="delete"
          className="basket__card-delete"
          onClick={() => handleRemovePhone(id)}
        />
        <img src={iphoneIcon} alt="iphone" className="basket__card-image" />
        <span className="basket__card-title">{phone.product.name}</span>
      </div>

      <div className="basket__card-bottom">
        <div className="basket__card-bottom--increase">
          <button
            type="button"
            className="basket__card-minus"
            onClick={() => handleAddOrRemoveQuantity(id, 'delete')}
            disabled={isDisableMin}
          />
          <span className="basket__card-count">{phone.quantity}</span>
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
