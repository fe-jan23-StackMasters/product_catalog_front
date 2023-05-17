import { BasketCard } from '../BasketCard';
import { Button } from '../Button';
import './ShoppingBasket.scss';
import { Container } from '../Container';
import { Link, NavLink } from 'react-router-dom';
import leftArrov from '../../icons/arrowLeft.svg';
import { useLocalStorageContext } from '../../context/StorageContext';

export const ShoppingBasket = () => {
  const {
    totalPrice,
    totalQuantity,
    cartItems,
  } = useLocalStorageContext();

  return (
    <Container>
      <Link to="/home" className="backLink" >
        <img className="backLink__image" src={leftArrov} alt="left" />
        Back
      </Link>

      <h1 className="title">Cart</h1>

      {!cartItems ? (
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
            {cartItems.map((product) => (
              <BasketCard
                key={product.info.id}
                product={product}
              />
            ))}
          </div>

          <div className="basket__total">
            <span className="basket__total-price">{`$${totalPrice}`}</span>

            <span className="basket__total-description">
              {`Total for ${totalQuantity} items`}
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
