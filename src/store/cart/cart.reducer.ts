import { CART_ACTION_TYPES } from "./cart.types";

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  totalItemsInCart: 0,
  totalPrice: null,
};

export const cartReducer = (state: any = INITIAL_STATE, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.ADD_ITEM_TO_CART:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.DECREMENT_ITEM_QUANTITY:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.INCREMENT_ITEM_QUANTITY:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.SET_CART_STATUS:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      return state;
  }
};
