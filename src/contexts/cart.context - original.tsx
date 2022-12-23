import { createContext, useState } from "react";
import { CartItemInterface } from "../interfaces/interfaces";

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

export const CartProvider = ({ children }: { children: JSX.Element }) => {
  const [isCartOpen, setCartStatus] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const totalItemsInCart = cartItems.reduce(
    (acc, item: CartItemInterface) => acc + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (acc, item: CartItemInterface) => acc + item.quantity * item.price,
    0
  );

  const addItemToCart = (itemToAdd: CartItemInterface) => {
    setCartItems(addCartItem(cartItems, itemToAdd));
  };
  const removeItemFromCart = (itemToRemove: CartItemInterface) => {
    setCartItems(removeCartItem(cartItems, itemToRemove));
  };
  const incrementQuantity = (item: CartItemInterface) => {
    setCartItems(increaseItemQuantity(cartItems, item));
  };
  const decrementQuantity = (item: CartItemInterface) => {
    setCartItems(decreaseItemQuantity(cartItems, item));
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
