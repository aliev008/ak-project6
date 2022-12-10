import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { ReactComponent as CartLogo } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

export const CartIcon = () => {
  const { setCartStatus, cartIsOpen } = useContext(CartContext);

  const handleClick = () => {
    setCartStatus(!cartIsOpen);
  };

  return (
    <div onClick={handleClick} className="cart-icon-container">
      <CartLogo className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};
