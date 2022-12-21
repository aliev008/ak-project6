import { CartItemInterface } from "../../interfaces/interfaces";

import { CartItemContainer } from "./cart-item.styles";

export const CartItem = ({ cartItem }: {cartItem: CartItemInterface}) => {
  const { imageUrl, price, name, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span>
          {quantity} * {price} $
        </span>
      </div>
    </CartItemContainer>
  );
};
