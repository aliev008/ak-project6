import { CartItemInterface } from "../../../interfaces/interfaces";

export const addCartItem = (cartItems: any, itemToAdd: CartItemInterface) => {
  const itemExists = cartItems.some(
    (cartItem: CartItemInterface) => cartItem.id === itemToAdd.id
  );
  if (itemExists) {
    return cartItems.map((cartItem: CartItemInterface) =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : { ...cartItem }
    );
  }
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const removeCartItem = (
  cartItems: any,
  itemToRemove: CartItemInterface
) => {
  return cartItems.filter(
    (cartItem: CartItemInterface) => cartItem.id !== itemToRemove.id
  );
};

export const increaseItemQuantity = (
  cartItems: any,
  item: CartItemInterface
) => {
  return cartItems.map((cartItem: CartItemInterface) =>
    cartItem.id === item.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : { ...cartItem }
  );
};

export const decreaseItemQuantity = (
  cartItems: any,
  item: CartItemInterface
) => {
  return cartItems
    .map((cartItem: CartItemInterface) => {
      return cartItem.id === item.id
        ? cartItem.quantity > 1
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : null
        : { ...cartItem };
    })
    .filter((cartIem: CartItemInterface) => cartIem !== null);
};
