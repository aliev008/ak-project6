import { CartItemInterface } from "../../interfaces/interfaces";

import { CartItemContainer,ImageDetails } from "./cart-item.styles";

export const CartItem = ({ cartItem }: {cartItem: CartItemInterface}) => {
  const { imageUrl, price, name, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ImageDetails>
        <span className="name">{name}</span>
        <span>
          {quantity} * {price} $
        </span>
      </ImageDetails>
    </CartItemContainer>
  );
};
