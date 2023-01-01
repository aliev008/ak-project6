import { createContext, useReducer } from "react";
import { CartItemInterface } from "../interfaces/interfaces";
import { createAction } from "../utils/reducer/createAction.utils";

export const CartContext = createContext({
  isCartOpen: false,
  setCartStatus: (cart: any) => null,
  cartItems: [],
  addItemToCart: (cartItem: CartItemInterface) => {},
  removeItemFromCart: (cartItem: CartItemInterface) => {},
  incrementQuantity: (cartItem: CartItemInterface) => {},
  decrementQuantity: (cartItem: CartItemInterface) => {},
  totalItemsInCart: null,
  totalPrice: null,
});

const addCartItem = (cartItems: any, itemToAdd: CartItemInterface) => {
  const itemExists = cartItems.some(
    (cartItem: CartItemInterface) => cartItem.id === itemToAdd.id
  );
  if (itemExists) {
    return cartItems.map((cartItem: CartItemInterface) =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : { ...cartItem }
    );
  }
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems: any, itemToAdd: CartItemInterface) => {
  return cartItems.filter(
    (cartItem: CartItemInterface) => cartItem.id !== itemToAdd.id
  );
};

const increaseItemQuantity = (cartItems: any, item: CartItemInterface) =>
  cartItems.map((cartItem: CartItemInterface) =>
    cartItem.id === item.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : { ...cartItem }
  );

const decreaseItemQuantity = (cartItems: any, item: CartItemInterface) => {
  return cartItems
    .map((cartItem: CartItemInterface) => {
      return cartItem.id === item.id
        ? cartItem.quantity > 1
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : null
        : { ...cartItem };
    })
    .filter((cartIem: CartItemInterface) => cartIem !== null);
};

const INITIAL_STATE = {
  cartItems: [],
  isCartOpen: false,
  totalPrice: 0,
  totalItemsInCart: 0,
};

const CART_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_CART_STATUS: "SET_CART_STATUS",
};

const cartReducer = (state: any, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
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
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};

export const CartProvider = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { isCartOpen, cartItems, totalItemsInCart, totalPrice } = state;

  const updateCartItemsReducer = (newCartItems: any) => {
    const totalPrice = newCartItems.reduce(
      (acc: any, item: CartItemInterface) => acc + item.quantity * item.price,
      0
    );
    const totalItemsInCart = newCartItems.reduce(
      (acc: any, item: CartItemInterface) => acc + item.quantity,
      0
    );

    const payload = {
      cartItems: newCartItems,
      totalPrice,
      totalItemsInCart,
    };

    dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, payload));
  };

  const setCartStatus = (newStatus: boolean) => {
    dispatch(createAction(CART_ACTION_TYPES.SET_CART_STATUS, newStatus));
  };

  const addItemToCart = (itemToAdd: CartItemInterface) => {
    const newCartItems = addCartItem(cartItems, itemToAdd);
    updateCartItemsReducer(newCartItems);
  };
  const removeItemFromCart = (itemToRemove: CartItemInterface) => {
    const newCartItems = removeCartItem(cartItems, itemToRemove);
    updateCartItemsReducer(newCartItems);
  };
  const incrementQuantity = (item: CartItemInterface) => {
    const newCartItems = increaseItemQuantity(cartItems, item);
    updateCartItemsReducer(newCartItems);
  };
  const decrementQuantity = (item: CartItemInterface) => {
    const newCartItems = decreaseItemQuantity(cartItems, item);
    updateCartItemsReducer(newCartItems);
  };

  const value: any = {
    isCartOpen,
    cartItems,
    totalItemsInCart,
    totalPrice,
    setCartStatus,
    addItemToCart,
    removeItemFromCart,
    incrementQuantity,
    decrementQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
