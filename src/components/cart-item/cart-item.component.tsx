import { CartItemType } from "../../store/cart/cart.types";
import { FC } from "react";

import { CartItemContainer, ImageDetails } from "./cart-item.styles";

type CartItemProps = {
  cartItem: CartItemType;
};

export const CartItem: FC<CartItemProps> = ({ cartItem }) => {
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
