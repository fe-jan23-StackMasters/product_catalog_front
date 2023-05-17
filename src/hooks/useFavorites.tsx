import { PhoneCard } from '../types/PhoneCard';
import { useLocalStorage } from './useLocalStorage';
import { useCallback } from 'react';

export const useFavorites = () => {
  const [
    favorites, setFavorites,
  ] = useLocalStorage<PhoneCard[]>('favorites', []);

  const isInFavorites = useCallback(
    (productId: string) => favorites.some(item => item.id === productId),
    [favorites],
  );

  const addToFavorites = useCallback(
    (product: PhoneCard) => {
      setFavorites(prev =>
        isInFavorites(product.id) ? prev : [...prev, product]);
    },
    [isInFavorites, setFavorites],
  );

  const removeFromFavorites = useCallback(
    (productId: string) => {
      setFavorites(prev => prev.filter(product => product.id !== productId));
    },
    [setFavorites],
  );

  return {
    favorites,
    isInFavorites,
    addToFavorites,
    removeFromFavorites,
  } as const;
};
