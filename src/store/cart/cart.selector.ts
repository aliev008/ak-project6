export const selectCartStatus = (state: any): any => state.cart.isCartOpen;
export const selectTotalItemsInCart = (state: any): any => state.cart.totalItemsInCart;
export const selectCartItems = (state: any): any => state.cart.cartItems;
export const selectTotalPrice = (state: any): any => state.cart.totalPrice;