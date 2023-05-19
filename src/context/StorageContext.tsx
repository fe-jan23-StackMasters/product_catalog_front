import { useCart } from '../hooks/useCart';
import { useFavorites } from '../hooks/useFavorites';
import { PhoneCard } from '../types/PhoneCard';
import { StorageProduct } from '../types/StorageProduct';
import { createContext, ReactNode, useContext } from 'react';

type storageFunc = (id: string) => void;

interface LocalStorageContextValue {
  favorites: PhoneCard[];
  isInFavorites: (productId: string) => boolean;
  addToFavorites: (product: PhoneCard) => void;
  removeFromFavorites: storageFunc;
  cartItems: StorageProduct[];
  isAddedToCart: (itemId: string) => boolean;
  addToCart: (product: StorageProduct) => void;
  clearCart: () => void;
  removeFromCart: storageFunc;
  increaseQuantity: storageFunc;
  decreaseQuantity: storageFunc;
  totalQuantity: number;
  totalPrice: number;
}

export const LocalStorageContext = createContext<
  LocalStorageContextValue | undefined
>(undefined);

interface LocalStorageProviderProps {
  children: ReactNode;
}

export const LocalStorageProvider = ({
  children,
}: LocalStorageProviderProps) => {
  const {
    favorites,
    isInFavorites,
    addToFavorites,
    removeFromFavorites,
  } = useFavorites();

  const {
    cartItems,
    addToCart,
    removeFromCart,
    isAddedToCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
    totalQuantity,
    clearCart,
  } = useCart();

  const contextValue = {
    favorites,
    isInFavorites,
    addToFavorites,
    removeFromFavorites,
    cartItems,
    isAddedToCart,
    addToCart,
    clearCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
    totalQuantity,
  };

  return (
    <LocalStorageContext.Provider value={contextValue}>
      {children}
    </LocalStorageContext.Provider>
  );
};

export const useLocalStorageContext = () => {
  const localStorageContext = useContext(LocalStorageContext);

  if (localStorageContext === undefined) {
    throw new Error(
      'useLocalStorageContext must be used within a LocalStorageProvider',
    );
  }

  return localStorageContext;
};
