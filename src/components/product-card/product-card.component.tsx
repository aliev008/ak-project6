import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, setCartStatus } from "../../store/cart/cart.action";
import { selectCartStatus } from "../../store/cart/cart.selector";
import { Button } from "../button/button.component";

import { ProductCardContainer, Footer } from "./product-card.styles";

interface ProductCardProps {
  product: any;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { name, imageUrl, price } = product;
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectCartStatus);

  const addToCartHandler = () => {
    dispatch(addItemToCart(product));
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
      <Button onClick={addToCartHandler} buttonType="inverted">
        ADD TO CARD
      </Button>
    </ProductCardContainer>
  );
};
