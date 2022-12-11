import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";

import { ProductCard } from "../../components/product-card/product-card.component";

import "./shop.styles.scss";

interface Product {
  "id": number,
  "name": string,
  "imageUrl": string,
  "price": number
}

export const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products &&
        (products as any).map((product: Product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
    </div>
  );
};
