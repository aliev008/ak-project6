import { useDispatch, useSelector } from "react-redux";
import { setCartStatus } from "../../store/cart/cart.action";
import { selectCartStatus, selectTotalItemsInCart } from "../../store/cart/cart.selector";

import { CartIconContainer, CartLogo, ItemCount } from "./cart-icon.styles";

export const CartIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectCartStatus);
  const totalItemsInCart = useSelector(selectTotalItemsInCart);

  const handleClick = () => dispatch(setCartStatus(!isCartOpen))

  return (
    <CartIconContainer onClick={handleClick}>
      <CartLogo />
      <ItemCount>{totalItemsInCart}</ItemCount>
    </CartIconContainer>
  );
};
