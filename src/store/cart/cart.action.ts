import { CartItemInterface } from "../../interfaces/interfaces";
import { createAction } from "../../utils/reducer/createAction.utils";
import { store } from "../store";
import { CART_ACTION_TYPES } from "./cart.types";
import { addCartItem, makeCartItemsPayload } from "./utils/functions";

export const setCartStatus = (status: boolean) =>
  createAction(CART_ACTION_TYPES.SET_CART_STATUS, status);

export const addItemToCart = (itemToAdd: CartItemInterface) => {
  const payload = makeCartItemsPayload(addCartItem(itemToAdd));
  createAction(CART_ACTION_TYPES.ADD_ITEM_TO_CART, payload);
};

export const removeItemFromCart = (itemToRemove: CartItemInterface) =>
  createAction(CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART, itemToRemove);

export const incrementQuantity = (item: CartItemInterface) =>
  createAction(CART_ACTION_TYPES.INCREMENT_ITEM_QUANTITY, item);

export const decrementQuantity = (item: CartItemInterface) =>
  createAction(CART_ACTION_TYPES.DECREMENT_ITEM_QUANTITY, item);
