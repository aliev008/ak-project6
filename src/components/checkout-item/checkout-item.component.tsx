import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as RemoveSymbol } from "../../assets/x-symbol.svg";
import { CartItemType } from "../../types/types";
import {
  decrementQuantity,
  incrementQuantity,
  removeItemFromCart,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

import { CountArrow } from "./checkout-item.styles";

type CheckoutItemProps = {
  checkoutItem: CartItemType;
};

export const CheckoutItem: FC<CheckoutItemProps> = ({
  checkoutItem,
}) => {
  const { imageUrl, name, quantity, price } = checkoutItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const removeItem = () => {
    dispatch(removeItemFromCart(cartItems, checkoutItem));
  };

  const increaseQuantity = () => {
    dispatch(incrementQuantity(cartItems, checkoutItem));
  };

  const decreaseQuantity = () => {
    dispatch(decrementQuantity(cartItems, checkoutItem));
  };

  return (
    <>
      <tr>
        <td>
          <img className="images" src={imageUrl} alt={name} />
        </td>
        <td>{name}</td>
        <td>
          <CountArrow onClick={decreaseQuantity}>&#10094;</CountArrow>
          {quantity}
          <CountArrow onClick={increaseQuantity}>&#10095;</CountArrow>
        </td>
        <td>{price} $</td>
        <td>
          <RemoveSymbol className="remove-button" onClick={removeItem} />
        </td>
      </tr>
    </>
  );
};
