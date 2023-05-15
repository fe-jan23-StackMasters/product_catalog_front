import React from 'react';
import { ProductCard } from '../ProductCard';
import { PhoneCard } from '../../types/PhoneCard';
import './card_list.scss';
import { useCardsIds } from '../../helpers/hooks/hooks';
import { ItemCard } from '../ItemCard';

interface Props {
  products: PhoneCard[];
}

const product1 = {
  id: '3',
  category: 'phones',
  phoneId: 'apple-iphone-8-64gb-gold',
  itemId: 'apple-iphone-8-64gb-gold',
  name: 'pple iPhone 8 64GB Gold',
  fullPrice: 500,
  price: 600,
  screen: '4.7 IPS',
  capacity: '64GB',
  color: 'gold',
  ram: '2GB',
  year: 2017,
  image: 'img/phones/apple-iphone-8/gold/00.png',
};

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

    <ItemCard product={product1}/>
    </div>
  );
};
