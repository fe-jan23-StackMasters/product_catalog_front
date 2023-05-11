import { useEffect, useState } from 'react';

export function useLocalStorage(key: string, initialValue: string[]) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);

    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export function useCardsIds(key: string, initialValue: string[]) {
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
