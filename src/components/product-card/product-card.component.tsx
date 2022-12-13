import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";

import "./product-card.styles.scss";

interface ProductCardProps {
  product: any;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart, isCartOpen, setCartStatus } = useContext(CartContext);

  const addToCartHandler = () => {
    addItemToCart(product);
    !isCartOpen && setCartStatus(!isCartOpen);
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price} $</span>
      </div>
      <Button onClick={addToCartHandler} buttonType="inverted">
        ADD TO CARD
      </Button>
    </div>
  );
};
