import { useEffect, useState } from 'react';
import { PhoneCard } from '../../types/PhoneCard';

interface StorageProduct {
  id: string;
  quantity: string;
  product: PhoneCard;
}

export function useLocalStorage(key: string, initialValue: StorageProduct[]) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);

    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export function useCardsIds(key: string, initialValue: StorageProduct[]) {
  const [cardsIds, setCardsIds] = useLocalStorage(key, initialValue);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onCardToggle = (basket: any) => {
    setCardsIds((prevState: StorageProduct[]) => {
      if (prevState.find((device) => device.id === basket.id)) {
        const newState = prevState.filter((item) => item.id !== basket.id);

        return newState;
      } else {
        const newState = [...prevState, basket];

        return newState;
      }
    });
  };

  return [cardsIds, onCardToggle];
}
