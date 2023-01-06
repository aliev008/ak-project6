import { createSelector } from "reselect";
import { CartItemInterface } from "../../interfaces/interfaces";

const selectCartReducer = (state: any) => state.cart;
export const selectCartItems = createSelector([selectCartReducer], (cart) => {
  return cart.cartItems;
});

export const selectCartStatus = createSelector([selectCartReducer], (cart) => {
  return cart.isCartOpen;
});

export const selectTotalItemsInCart = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce(
      (acc: any, item: CartItemInterface) => acc + item.quantity,
      0
    );
  }
);

export const selectTotalPrice = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce(
      (acc: any, item: CartItemInterface) => acc + item.quantity * item.price,
      0
    );
  }
);
