import { CartItemType } from '../../types/types'
import {
  ActionWithPayload,
  createAction,
  withMatcher,
} from '../../utils/reducer/createAction.utils'
import { CART_ACTION_TYPES } from './cart.types'
import {
  addCartItem,
  decreaseItemQuantity,
  increaseItemQuantity,
  removeCartItem,
} from './utils/functions'

export type SetCartStatus = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_STATUS,
  boolean
>

export type SetCartItems = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS,
  CartItemType[]
>

export const setCartStatus = withMatcher(
  (newStatus: boolean): SetCartStatus =>
    createAction(CART_ACTION_TYPES.SET_CART_STATUS, newStatus)
)

export const setCartItems = withMatcher(
  (cartItems: CartItemType[]): SetCartItems =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
)

export const addItemToCart = (
  cartItems: CartItemType[],
  itemToAdd: CartItemType
): SetCartItems => {
  const payload = addCartItem(cartItems, itemToAdd)
  return setCartItems(payload)
}

export const removeItemFromCart = (
  cartItems: CartItemType[],
  itemToRemove: CartItemType
): SetCartItems => {
  const payload = removeCartItem(cartItems, itemToRemove)
  return setCartItems(payload)
}

export const incrementQuantity = (
  cartItems: CartItemType[],
  item: CartItemType
): SetCartItems => {
  const payload = increaseItemQuantity(cartItems, item)
  return setCartItems(payload)
}

export const decrementQuantity = (
  cartItems: CartItemType[],
  item: CartItemType
): SetCartItems => {
  const payload = decreaseItemQuantity(cartItems, item)
  return setCartItems(payload)
}
