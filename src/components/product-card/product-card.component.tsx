import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, setCartStatus } from "../../store/cart/cart.action";
import { selectCartItems, selectCartStatus } from "../../store/cart/cart.selector";
import { CategoryItem } from "../../store/category/category.types";
import { Button, BUTTON_CLASS_TYPES } from "../button/button.component";

import { ProductCardContainer, Footer } from "./product-card.styles";

type ProductCardProps = {
  product: CategoryItem;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { name, imageUrl, price } = product;
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectCartStatus);
  const cartItems = useSelector(selectCartItems);

  const addToCartHandler = () => {
    dispatch(addItemToCart(cartItems, product));
    if (!isCartOpen) {
      dispatch(setCartStatus(true));
    }
  };

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <span className="name">{name}</span>
        <span className="price">{price} $</span>
      </Footer>
      <Button onClick={addToCartHandler} buttonType={BUTTON_CLASS_TYPES.inverted}>
        ADD TO CARD
      </Button>
    </ProductCardContainer>
  );
};
