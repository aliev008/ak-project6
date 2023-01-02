import { useDispatch } from "react-redux";
import { ReactComponent as RemoveSymbol } from "../../assets/x-symbol.svg";
import { CartItemInterface } from "../../interfaces/interfaces";
import {
  decrementQuantity,
  incrementQuantity,
  removeItemFromCart,
} from "../../store/cart/cart.action";

import { CountArrow } from "./checkout-item.styles";

export const CheckoutItem = ({
  checkoutItem,
}: {
  checkoutItem: CartItemInterface;
}) => {
  const { imageUrl, name, quantity, price } = checkoutItem;
  const dispatch = useDispatch();

  const removeItem = () => {
    dispatch(removeItemFromCart(checkoutItem));
  };

  const increaseQuantity = () => {
    dispatch(incrementQuantity(checkoutItem));
  };

  const decreaseQuantity = () => {
    dispatch(decrementQuantity(checkoutItem));
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
