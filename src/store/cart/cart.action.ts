import { CartItemInterface } from "../../interfaces/interfaces";
import { createAction } from "../../utils/reducer/createAction.utils";
import { CART_ACTION_TYPES } from "./cart.types";
import {
  addCartItem,
  decreaseItemQuantity,
  increaseItemQuantity,
  removeCartItem,
} from "./utils/functions";

export const setCartStatus = (newStatus: boolean) =>
  createAction(CART_ACTION_TYPES.SET_CART_STATUS, newStatus);

export const addItemToCart = (cartItems: any, itemToAdd: CartItemInterface) => {
  const payload = addCartItem(cartItems, itemToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, payload);
};

export const removeItemFromCart = (
  cartItems: any,
  itemToRemove: CartItemInterface
) => {
  const payload = removeCartItem(cartItems, itemToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, payload);
};

export const incrementQuantity = (cartItems: any, item: CartItemInterface) => {
  const payload = increaseItemQuantity(cartItems, item);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, payload);
};

export const decrementQuantity = (cartItems: any, item: CartItemInterface) => {
  const payload = decreaseItemQuantity(cartItems, item);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, payload);
};
