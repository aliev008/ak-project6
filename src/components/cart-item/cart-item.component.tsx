import { CartItemInterface } from "../../interfaces/interfaces";

import "./cart-item.styles.scss";

export const CartItem = ({ product }: CartItemInterface) => {
  const { imageUrl, price, name, quantity } = product;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span>
          {quantity} * {price} $
        </span>
      </div>
    </div>
  );
};
