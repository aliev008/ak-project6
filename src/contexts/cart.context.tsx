import { createContext, useState } from "react";

export const CartContext = createContext({
  cartIsOpen: null,
  setCartStatus: (cart: any) => null,
});

export const CartProvider = ({ children }: {children: JSX.Element}) => {
  const [cartIsOpen, setCartStatus] = useState(false);
  const value: any = { cartIsOpen, setCartStatus };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
