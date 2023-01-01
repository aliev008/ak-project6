import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import { CartIconContainer, CartLogo, ItemCount } from "./cart-icon.styles";

export const CartIcon = () => {
  const { setCartStatus, isCartOpen, totalItemsInCart } =
    useContext(CartContext);

  const handleClick = () => setCartStatus(!isCartOpen);

  return (
    <CartIconContainer onClick={handleClick}>
      <CartLogo />
      <ItemCount>{totalItemsInCart}</ItemCount>
    </CartIconContainer>
  );
};
