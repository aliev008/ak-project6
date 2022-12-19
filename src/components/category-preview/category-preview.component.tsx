import { Link } from "react-router-dom";
import { ProductCard } from "../product-card/product-card.component";

import {
  CategoryInterface,
  ProductInterface,
} from "../../interfaces/interfaces";
import "./category-preview.styles.scss";

export const CategoryPreview = ({ title, products }: CategoryInterface) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link to={title}>
          <span className="title">{title.toUpperCase()}</span>
        </Link>
      </h2>
      <div className="preview">
        {products &&
          products.map((product: ProductInterface, index: number) => {
            if (index < 4) {
              return <ProductCard key={product.id} product={product} />;
            } else {
              return null;
            }
          })}
      </div>
    </div>
  );
};
