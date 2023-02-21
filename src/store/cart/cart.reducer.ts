import { CartItemType } from '../../types/types'
import { CART_ACTION_TYPES } from './cart.types'
import { AnyAction } from 'redux'
import {
  setCartStatus,
  setCartItems,
} from './cart.action'

const INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
  totalItemsInCart: 0,
  totalPrice: null,
}

export type CartState = {
  readonly isCartOpen: boolean
  readonly cartItems: CartItemType[]
  readonly totalItemsInCart: number
  readonly totalPrice: null
}

export const cartReducer = (
  state = INITIAL_STATE,
  action: AnyAction
): CartState => {
  if (setCartStatus.match(action)) {
    return {
      ...state,
      isCartOpen: action.payload,
    }
  }

  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    }
  }

  return state
}
