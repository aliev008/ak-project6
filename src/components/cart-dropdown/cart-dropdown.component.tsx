import { useNavigate } from "react-router-dom";

import { Button } from "../button/button.component";
import { CartItem } from "../cart-item/cart-item.component";

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles";
import { CartItemType } from "../../store/cart/cart.types";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

export const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem: CartItemType) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Cart Is Empty</EmptyMessage>
        )}
        {}
      </CartItems>
      <Button onClick={goToCheckoutHandler}> GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};
