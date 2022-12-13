import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { Route, Routes } from "react-router-dom";

import Button from "../button/button.component";
import { CartItem } from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";

export const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item: any) => (
          <CartItem key={item.id} product={item} />
        ))}
      </div>
      <Routes>
        <Route path="/checkout" element={<Button> GO TO CHECKOUT </Button>} />
      </Routes>
    </div>
  );
};
