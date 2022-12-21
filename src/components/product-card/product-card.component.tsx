import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { Button } from "../button/button.component";

import { ProductCardContainer } from "./product-card.styles";

interface ProductCardProps {
  product: any;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart, isCartOpen, setCartStatus } = useContext(CartContext);

  const addToCartHandler = () => {
    addItemToCart(product);
    if (!isCartOpen) {
      setCartStatus(true);
    }
  };

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price} $</span>
      </div>
      <Button onClick={addToCartHandler} buttonType="inverted">
        ADD TO CARD
      </Button>
    </ProductCardContainer>
  );
};
