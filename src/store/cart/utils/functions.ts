import { CartItemInterface } from "../../../interfaces/interfaces";
import { store } from "../../store";

export const makeCartItemsPayload = (newCartItems: any) => {
  const totalPrice = newCartItems.reduce(
    (acc: any, item: CartItemInterface) => acc + item.quantity * item.price,
    0
  );
  const totalItemsInCart = newCartItems.reduce(
    (acc: any, item: CartItemInterface) => acc + item.quantity,
    0
  );

  const payload = {
    cartItems: newCartItems,
    totalPrice,
    totalItemsInCart,
  };

  return payload;
};

export const addCartItem = (itemToAdd: CartItemInterface) => {
  const cartItems = store.getState().cart.cartItems;
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

export const removeCartItem = (itemToRemove: CartItemInterface) => {
  const cartItems = store.getState().cart.cartItems;
  return cartItems.filter(
    (cartItem: CartItemInterface) => cartItem.id !== itemToRemove.id
  );
};

export const increaseItemQuantity = (item: CartItemInterface) => {
  const cartItems = store.getState().cart.cartItems;
  return cartItems.map((cartItem: CartItemInterface) =>
    cartItem.id === item.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : { ...cartItem }
  );
};

export const decreaseItemQuantity = (item: CartItemInterface) => {
  const cartItems = store.getState().cart.cartItems;
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