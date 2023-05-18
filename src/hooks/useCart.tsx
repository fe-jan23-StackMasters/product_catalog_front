import { useLocalStorage } from './useLocalStorage';
import { StorageProduct } from '../types/StorageProduct';
import { useCallback, useMemo } from 'react';

export function useCart() {
  const [cartItems, setCartItems] = useLocalStorage<StorageProduct[]>(
    'cart',
    [],
  );

  const isInCart = useCallback(
    (itemId: string) => {
      return cartItems.some((product) => product.info.id === itemId);
    },
    [cartItems],
  );

  const addToCart = useCallback(
    (cartItem: StorageProduct) => {
      setCartItems((prev) => {
        return isInCart(cartItem.info.id) ? prev : [...prev, cartItem];
      });
    },
    [isInCart, setCartItems],
  );

  const removeFromCart = useCallback(
    (itemId: string) => {
      setCartItems((prev) => {
        return prev.filter((cartItem) => cartItem.info.id !== itemId);
      });
    },
    [setCartItems],
  );

  const increaseQuantity = useCallback(
    (itemId: string) => {
      setCartItems((prev) =>
        prev.map((cartItem) => {
          return cartItem.info.id === itemId
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem;
        }));
    },
    [setCartItems],
  );

  const decreaseQuantity = useCallback(
    (itemId: string) => {
      const cartItem = cartItems.find(
        (cartItem) => cartItem.info.id === itemId,
      );

      return cartItem && cartItem.quantity === 1
        ? removeFromCart(itemId)
        : setCartItems((prev) =>
          prev.map((cartItem) => {
            return cartItem.info.id === itemId
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem;
          }));
    },
    [setCartItems, cartItems, removeFromCart],
  );

  const totalPrice = useMemo(() => {
    return cartItems.reduce((acc, cartItem) => {
      return acc + cartItem.info.price * cartItem.quantity;
    }, 0);
  }, [cartItems]);

  const totalQuantity = useMemo(() => {
    return cartItems.reduce((acc, cartItem) => {
      return acc + cartItem.quantity;
    }, 0);
  }, [cartItems]);

  return {
    cartItems,
    isAddedToCart: isInCart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
    totalQuantity,
  } as const;
}
