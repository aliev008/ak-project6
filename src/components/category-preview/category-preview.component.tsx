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
        <span className="title">{title.toUpperCase()}</span>
      </h2>
      <div className="preview">
        {products &&
          products
            .filter((_: any, index: any) => index < 4)
            .map((product: ProductInterface) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
};
