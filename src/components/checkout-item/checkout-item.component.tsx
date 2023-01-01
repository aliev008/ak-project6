import { useContext } from "react";
import { ReactComponent as RemoveSymbol } from "../../assets/x-symbol.svg";
import { CartContext } from "../../contexts/cart.context";
import { CartItemInterface } from "../../interfaces/interfaces";

import { CountArrow } from "./checkout-item.styles";

export const CheckoutItem = ({ checkoutItem }: {checkoutItem: CartItemInterface}) => {
  const { imageUrl, name, quantity, price } = checkoutItem;
  const { removeItemFromCart, incrementQuantity, decrementQuantity } =
    useContext(CartContext);

  const removeItem = () => {
    removeItemFromCart(checkoutItem);
  };

  const increaseQuantity = () => {
    incrementQuantity(checkoutItem);
  };

  const decreaseQuantity = () => {
    decrementQuantity(checkoutItem);
  };

  return (
    <>
      <tr>
        <td>
          <img className="images" src={imageUrl} alt={name} />
        </td>
        <td>{name}</td>
        <td>
          <CountArrow onClick={decreaseQuantity}>
            &#10094;
          </CountArrow>
          {quantity}
          <CountArrow onClick={increaseQuantity}>
          &#10095;
          </CountArrow>
        </td>
        <td>{price} $</td>
        <td>
          <RemoveSymbol className="remove-button" onClick={removeItem} />
        </td>
      </tr>
    </>
  );
};
