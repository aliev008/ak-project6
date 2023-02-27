import { CategoryItem } from "../category/category.types";

export enum CART_ACTION_TYPES {
  SET_CART_STATUS = 'cart/SET_CART_STATUS',
  SET_CART_ITEMS = 'cart/SET_CART_ITEMS',
}

export type CartItemType = CategoryItem & {
  quantity: number;
}

export type CartItemsMap = {
  [key: string]: CartItemType
}
