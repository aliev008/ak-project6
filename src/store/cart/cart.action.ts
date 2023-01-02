import { CartItemInterface } from "../../interfaces/interfaces";
import { createAction } from "../../utils/reducer/createAction.utils";
import { CART_ACTION_TYPES } from "./cart.types";
import {
  addCartItem,
  decreaseItemQuantity,
  increaseItemQuantity,
  makeCartItemsPayload,
  removeCartItem,
} from "./utils/functions";

export const setCartStatus = (newStatus: boolean) =>
  createAction(CART_ACTION_TYPES.SET_CART_STATUS, newStatus);

export const addItemToCart = (itemToAdd: CartItemInterface) => {
  const payload = makeCartItemsPayload(addCartItem(itemToAdd));
  return createAction(CART_ACTION_TYPES.ADD_ITEM_TO_CART, payload);
};

export const removeItemFromCart = (itemToRemove: CartItemInterface) => {
  const payload = makeCartItemsPayload(removeCartItem(itemToRemove));
  return createAction(CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART, payload);
};

export const incrementQuantity = (item: CartItemInterface) => {
  const payload = makeCartItemsPayload(increaseItemQuantity(item));
  return createAction(CART_ACTION_TYPES.INCREMENT_ITEM_QUANTITY, payload);
};

export const decrementQuantity = (item: CartItemInterface) => {
  const payload = makeCartItemsPayload(decreaseItemQuantity(item));
  return createAction(CART_ACTION_TYPES.DECREMENT_ITEM_QUANTITY, payload);
};
