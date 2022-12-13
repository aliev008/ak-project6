import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { ReactComponent as CartLogo } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

export const CartIcon = () => {
  const { setCartStatus, isCartOpen, totalItemsInCart } =
    useContext(CartContext);

  const handleClick = () => setCartStatus(!isCartOpen);

  return (
    <div onClick={handleClick} className="cart-icon-container">
      <CartLogo className="shopping-icon" />
      <span className="item-count">{totalItemsInCart}</span>
    </div>
  );
};
