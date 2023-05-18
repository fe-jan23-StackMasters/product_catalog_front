import './BasketCard.scss';
import deleteIcon from '../../icons/Close.svg';
import blackDeleteIcon from '../../icons/blackClose.svg';
import React, { useContext } from 'react';
import { StoragePhone } from '../../types/StoragePhone';
import { ActionBasket } from '../../types/ActionBasket';
import { BASE_URL } from '../../api/requests';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/toggleContext';
import classNames from 'classnames';

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
  const { price, id, image, name, phoneId } = phone.product;
  const { quantity } = phone;
  const isDisableMin = +phone.quantity < 2;
  const isDisableMax = +phone.quantity > 9;
  const imageLink = `${BASE_URL}/${image}`;
  const totalPrice = price * +quantity;
  const { theme } = useContext(ThemeContext);
  let deletePath = deleteIcon;
  let isLight = false;

  if (theme === 'light') {
    isLight = true;
    deletePath = blackDeleteIcon;
  } else {
    isLight = false;
  }

  return (
    <div className="basket__card">
      <div className="basket__card-top">
        <img
          src={deletePath}
          alt="delete"
          className="basket__card-delete"
          onClick={() => handleRemovePhone(id)}
        />

        <Link to={`/phones/${phoneId}`}>
          <img src={imageLink} alt="iphone" className="basket__card-image" />
        </Link>

        <Link to={`/phones/${phoneId}`} className="basket__card-title" >
          <span className="basket__card-title">{name}</span>
        </Link>
      </div>

      <div className="basket__card-bottom">
        <div className="basket__card-bottom--increase">
          <button
            type="button"
            className={classNames('basket__card-minus', {
              'basket__card-minus--light': isLight,
            })}
            onClick={() => handleAddOrRemoveQuantity(id, 'delete')}
            disabled={isDisableMin}
          />
          <span className="basket__card-count">{quantity}</span>
          <button
            type="button"
            className={classNames('basket__card-plus', {
              'basket__card-plus--light': isLight,
            })}
            onClick={() => handleAddOrRemoveQuantity(id, 'add')}
            disabled={isDisableMax}
          />
        </div>
        <div className="basket__card-price">{`$${totalPrice}`}</div>
      </div>
    </div>
  );
};
