import { useContext } from "react";
import { ReactComponent as RemoveSymbol } from "../../assets/x-symbol.svg";
import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.scss";

export const CheckoutItem = ({ product }: any) => {
  const { imageUrl, name, quantity, price } = product;
  const { removeItemFromCart } = useContext(CartContext);

  const removeItem = () => {
    removeItemFromCart(product);
  };

  return (
    <>
      <tr>
        <td>
          <img className="images" src={imageUrl} alt={name} />
        </td>
        <td>{name}</td>
        <td>{quantity}</td>
        <td>{price} $</td>
        <td>
          <RemoveSymbol className="remove-button" onClick={removeItem} />
        </td>
      </tr>
    </>
  );
};
