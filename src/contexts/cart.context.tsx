import { createContext, useState } from "react";

export const CartContext = createContext({
  cartIsOpen: null,
  setCartStatus: (user: any) => null,
});

export const CartProvider = ({ children }: any) => {
  const [cartIsOpen, setCartStatus] = useState(false);
  const value: any = { cartIsOpen, setCartStatus };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
