import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

import Button from "../button/button.component";

import "./cart-dropdown.styles.scss";

export const CartDropdown = () => {
  const { cartIsOpen } = useContext(CartContext);
  return (
    <div className={`cart-dropdown-container ${cartIsOpen ? "" : "inactive"}`}>
      <Button> GO TO CHECKOUT </Button>
    </div>
  );
};
