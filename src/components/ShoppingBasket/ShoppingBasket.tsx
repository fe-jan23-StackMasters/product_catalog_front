import { BasketCard } from '../BasketCard';
import { Button } from '../Button';
import './ShoppingBasket.scss';

export const ShoppingBasket = () => {
  return (
    <div className="basket">
      <div className="basket__cards">
        <BasketCard />
        <BasketCard />
        <BasketCard />
        <BasketCard />
        <BasketCard />
        <BasketCard />
      </div>

      <div className="basket__total">
        <span className="basket__total-price">$2657</span>
        <span className="basket__total-description">Total for 3 items</span>
          <Button width="100%" height="48px" type="btn__add">
            Checkout
          </ Button>
      </div>
    </div>
  );
};
