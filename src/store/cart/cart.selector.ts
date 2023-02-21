import { createSelector } from 'reselect'
import { CartItemType } from '../../types/types'
import { RootState } from '../store';
import { CartState } from './cart.reducer'

const selectCartReducer = (state: RootState): CartState => state.cart;

export const selectCartItems = createSelector([selectCartReducer], (cart) => {
  return cart.cartItems
})

export const selectCartStatus = createSelector([selectCartReducer], (cart) => {
  return cart.isCartOpen
})

export const selectTotalItemsInCart = createSelector(
  [selectCartItems],
  (cartItems): number  => {
    return cartItems.reduce(
      (acc: number, item: CartItemType) => acc + item.quantity,
      0
    )
  }
)

export const selectTotalPrice = createSelector(
  [selectCartItems],
  (cartItems): number => {
    return cartItems.reduce(
      (acc: number, item: CartItemType) => acc + item.quantity * item.price,
      0
    )
  }
)
