import { createContext, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setCartStatus: (cart: any) => null,
  cartItems: [],
  addItemToCart: (item: any) => {},
  removeItemFromCart: (item: any) => {},
  incrementQuantity: (item: any) => {},
  decrementQuantity: (item: any) => {},
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

const increaseItemQuantity = (cartItems: any, item: any) => {
  return cartItems.map((product: any) => {
    return product.id === item.id
      ? { ...product, quantity: product.quantity + 1 }
      : { ...product };
  });
};

const decreaseItemQuantity = (cartItems: any, item: any) => {
  return cartItems
    .map((product: any) => {
      return product.id === item.id
        ? product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : null
        : { ...product };
    })
    .filter((product: any) => product !== null);
};

export const CartProvider = ({ children }: { children: JSX.Element }) => {
  const [isCartOpen, setCartStatus] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const totalItemsInCart = cartItems.reduce(
    (acc, item: any) => acc + item.quantity,
    0
  );

  const addItemToCart = (itemToAdd: any) => {
    setCartItems(addCartItem(cartItems, itemToAdd));
  };
  const removeItemFromCart = (itemToRemove: any) => {
    setCartItems(removeCartItem(cartItems, itemToRemove));
  };
  const incrementQuantity = (item: any) => {
    setCartItems(increaseItemQuantity(cartItems, item));
  };
  const decrementQuantity = (item: any) => {
    setCartItems(decreaseItemQuantity(cartItems, item));
  };

  const value: any = {
    isCartOpen,
    cartItems,
    totalItemsInCart,
    setCartStatus,
    addItemToCart,
    removeItemFromCart,
    incrementQuantity,
    decrementQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
