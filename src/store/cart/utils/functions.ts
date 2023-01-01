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
