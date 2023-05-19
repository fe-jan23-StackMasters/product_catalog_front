import { BasketCard } from '../BasketCard';
import { useState } from 'react';
import { Button } from '../Button';
import './ShoppingBasket.scss';
import { Container } from '../Container';
import { Link, NavLink } from 'react-router-dom';
import leftArrov from '../../icons/arrowLeft.svg';
import {
  useLocalStorageContext,
} from '../../context/StorageContext';
import { AnimatePresence } from 'framer-motion';
import { AproovedBox } from '../AproovedBox/AprovedBox';

export const ShoppingBasket = () => {
  const { totalPrice, totalQuantity, cartItems } = useLocalStorageContext();
  const [stateAproove, setStateAproove] = useState(false);
  const [stateCheckout, setStateCheckout] = useState(false);
  const { clearCart } = useLocalStorageContext();
  const closes = () => {
    setStateAproove(false);
    setStateCheckout(false);
  };

  const openViewCHeck = () => {
    setStateAproove(!stateAproove);
    clearCart();

    setTimeout(() => {
      setStateCheckout(true);
    }, 1000);

    setTimeout(() => {
      closes();
    }, 2000);
  };

  return (
    <>
      <AproovedBox stateAproove={stateAproove} stateCheckout={stateCheckout} />
      <Container>
        <Link to="/home" className="backLink">
          <img className="backLink__image" src={leftArrov} alt="left" />
          Back
        </Link>

        <h1 className="title">Cart</h1>

        {!cartItems.length ? (
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
            <ul className="basket__cards">
              <AnimatePresence>
                {cartItems.map((product) => (
                  <BasketCard
                    key={product.info.id}
                    product={product}
                  />
                ))}
              </AnimatePresence>
            </ul>

            <div className="basket__total">
              <span className="basket__total-price">{`$${totalPrice}`}</span>

              <span className="basket__total-description">
                {`Total for ${totalQuantity} items`}
              </span>

              <Button
                width="100%"
                height="48px"
                type="btn__add"
                handler={() => openViewCHeck()}
              >
                Checkout
              </Button>
            </div>
          </div>
        )}
      </Container>
    </>
  );
};
