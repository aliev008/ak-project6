import { Link } from "react-router-dom";
import { ProductCard } from "../product-card/product-card.component";

import {
  CategoryInterface,
  ProductInterface,
} from "../../interfaces/interfaces";
import { CategoryPreviewContainer } from "./category-preview.styles";

export const CategoryPreview = ({ title, products }: CategoryInterface) => {
  return (
    <CategoryPreviewContainer>
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
    </CategoryPreviewContainer>
  );
};
