import { CartItemType } from '../cart.types'
import { CategoryItem } from '../../category/category.types'

export const addCartItem = (
  cartItems: CartItemType[],
  itemToAdd: CategoryItem
): CartItemType[] => {
  const itemExists = cartItems.some(
    (cartItem: CartItemType) => cartItem.id === itemToAdd.id
  )
  if (itemExists) {
    return cartItems.map((cartItem: CartItemType) =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : { ...cartItem }
    )
  }
  return [...cartItems, { ...itemToAdd, quantity: 1 }]
}

export const removeCartItem = (
  cartItems: CartItemType[],
  itemToRemove: CartItemType
): CartItemType[] => {
  return cartItems.filter(
    (cartItem: CartItemType) => cartItem.id !== itemToRemove.id
  )
}

export const increaseItemQuantity = (
  cartItems: CartItemType[],
  item: CartItemType
): CartItemType[] => {
  return cartItems.map((cartItem: CartItemType) =>
    cartItem.id === item.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : { ...cartItem }
  )
}

export const decreaseItemQuantity = (
  cartItems: CartItemType[],
  item: CartItemType
): CartItemType[] => {
  return (
    cartItems
      .map((cartItem: CartItemType) => {
        return cartItem.id === item.id
          ? cartItem.quantity > 1
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : // : null
              { ...cartItem }
          : { ...cartItem }
      })
      // .filter((cartItem: any) => cartItem !== null)
      .filter((cartItem: any) => cartItem.quantity >= 1)
  )
}
