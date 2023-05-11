import React, { useState, useEffect } from 'react';
import { ProductCard } from '../ProductCard';
import { PhoneCard } from '../../types/PhoneCard';
import './card_list.scss';

interface Props {
  products: PhoneCard[],
}

function useLocalStorage(key: string, initialValue: string[]) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);

    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

function useCardsIds(key: string, initialValue: string[]) {
  const [cardsIds, setCardsIds] = useLocalStorage(key, initialValue);

  const onCardToggle = (id: string) => {
    setCardsIds((prevState: string[]) => {
      if (prevState.includes(id)) {
        const newState = prevState.filter(item => item !== id);

        return newState;
      } else {
        const newState = [...prevState, id];

        return newState;
      }
    });
  };

  return [cardsIds, onCardToggle];
}

export const CardList: React.FC<Props> = ({ products }) => {
  const [cardIds, onCardToggle] = useCardsIds('cart', []);
  const [favIds, onFavToggle] = useCardsIds('favourite', []);

  return (
    <div className="card__list">
      {products.map(product => (
        <div key={product.id}>
          <ProductCard
            product={product}
            onCardAdd={() =>
              onCardToggle(product.id)
            }
            onFavouriteAdd={() => {
              onFavToggle(product.id);
            }}
            cardIds={cardIds}
            favIds={favIds}
          />
        </div>
      ))}
    </div>
  );
};
