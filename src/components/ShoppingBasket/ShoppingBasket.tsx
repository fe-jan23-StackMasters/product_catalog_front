import { useMemo, useState } from 'react';
import { BasketCard } from '../BasketCard';
import { Button } from '../Button';
import './ShoppingBasket.scss';
import { StorageProduct } from '../../types/StorageProduct';
import { ActionBasket } from '../../types/ActionBasket';
import { Container } from '../Container';
import { NavLink } from 'react-router-dom';
import { LinkLine } from '../LinkLine';

export const ShoppingBasket = () => {
  const [phones, setPhones] = useState<StorageProduct[]>([]);
  const phonesFromStorage = JSON.parse(localStorage.getItem('cart') || '');

  const handleRemovePhone = (id: string) => {
    const filteredPhones = phones.filter((product) => product.info.id !== id);

    localStorage.setItem('cart', JSON.stringify(filteredPhones));

    setPhones(filteredPhones);
  };

  const handleAddOrRemoveQuantity = (phoneId: string, action: ActionBasket) => {
    const updatedPhones = phones.map((phone) => {
      if (phone.info.id === phoneId) {
        if (action === 'add') {
          phone.quantity = phone.quantity + 1;
        } else {
          phone.quantity = +phone.quantity - 1;
        }
      }

      return phone;
    });

    localStorage.setItem('cart', JSON.stringify(updatedPhones));

    setPhones(updatedPhones);
  };

  useMemo(() => {
    setPhones(phonesFromStorage);
  }, []);

  const totalPrice = phones.reduce((acc, curr) => {
    return acc + curr.info.price * curr.quantity;
  }, 0);

  const totalItems = phones.reduce((acc, curr) => {
    return acc + +curr.quantity;
  }, 0);

  return (
    <Container>
      <LinkLine to={'home'} title={'Back'} />
      <h1 className="title">Cart</h1>
      {!totalItems ? (
        <Container>
          <h2 className="basket__title">Ooops... Your basket is empty</h2>

          <NavLink to="/phones" className="basket__link">
            <Button width="50%" height="48px" type="btn__add btn__add-shop">
              Go to SHOP
            </Button>
          </NavLink>
        </Container>
      ) : (
        <div className="basket">
          <div className="basket__cards">
            {phones.map((product) => (
              <BasketCard
                key={product.info.id}
                product={product}
                handleRemovePhone={handleRemovePhone}
                handleAddOrRemoveQuantity={handleAddOrRemoveQuantity}
              />
            ))}
          </div>

          <div className="basket__total">
            <span className="basket__total-price">{`$${totalPrice}`}</span>

            <span className="basket__total-description">
              {`Total for ${totalItems} items`}
            </span>

            <Button width="100%" height="48px" type="btn__add">
              Checkout
            </Button>
          </div>
        </div>
      )}
    </Container>
  );
};
