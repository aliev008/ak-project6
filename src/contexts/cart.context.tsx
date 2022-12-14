import { createContext, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setCartStatus: (cart: any) => null,
  cartItems: [],
  addItemToCart: (item: any) => {},
  removeItemFromCart: (item: any) => {},
  totalItemsInCart: null,
});

const addCartItem = (cartItems: any, itemToAdd: any) => {
  const itemExists = cartItems.some((item: any) => item.id === itemToAdd.id);
  if (itemExists) {
    return cartItems.map((item: any) =>
      item.id === itemToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : { ...item }
    );
  }
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems: any, itemToAdd: any) => {
  return cartItems.filter((item: any) => item.id !== itemToAdd.id);
};

export const CartProvider = ({ children }: { children: JSX.Element }) => {
  const [isCartOpen, setCartStatus] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const addItemToCart = (itemToAdd: any) => {
    setCartItems(addCartItem(cartItems, itemToAdd));
  };
  const removeItemFromCart = (itemToRemove: any) => {
    setCartItems(removeCartItem(cartItems, itemToRemove));
  };
  const totalItemsInCart = cartItems.reduce(
    (acc, item: any) => acc + item.quantity,
    0
  );

  const value: any = {
    isCartOpen,
    cartItems,
    totalItemsInCart,
    setCartStatus,
    addItemToCart,
    removeItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
