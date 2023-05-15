import React from 'react';
import { ProductCard } from '../ProductCard';
import { PhoneCard } from '../../types/PhoneCard';
import './card_list.scss';
import { useCardsIds } from '../../helpers/hooks/hooks';

interface Props {
  products: PhoneCard[];
}

export const CardList: React.FC<Props> = ({ products }) => {
  const [cardIds, onCardToggle] = useCardsIds('cart', []);
  const [favIds, onFavToggle] = useCardsIds('favourite', []);
  const quantity = '1';

  return (
    <div className="card__list">
      {products.map((product) => (
        <div key={product.id}>
          {}
          <ProductCard
            product={product}
            onCardAdd={() =>
              onCardToggle({ id: product.id, quantity, product })
            }
            onFavouriteAdd={() =>
              onFavToggle({ id: product.id, quantity, product })
            }
            cardIds={cardIds}
            favIds={favIds}
          />
        </div>
      ))}
    </div>
  );
};
