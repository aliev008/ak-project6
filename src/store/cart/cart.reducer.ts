import { CART_ACTION_TYPES } from "./cart.types";

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  totalItemsInCart: null,
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
    default:
      return state;
  }
};
