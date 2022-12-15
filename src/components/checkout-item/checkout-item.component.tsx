import { useContext } from "react";
import { ReactComponent as RemoveSymbol } from "../../assets/x-symbol.svg";
import { CartContext } from "../../contexts/cart.context";
import { CartItemInterface } from "../../interfaces/interfaces";

import "./checkout-item.styles.scss";

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
          <span className="item-count-arrow" onClick={decreaseQuantity}>
            &#10094;
          </span>
          {quantity}
          <span className="item-count-arrow" onClick={increaseQuantity}>
          &#10095;
          </span>
        </td>
        <td>{price} $</td>
        <td>
          <RemoveSymbol className="remove-button" onClick={removeItem} />
        </td>
      </tr>
    </>
  );
};
