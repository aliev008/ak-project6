import { Link } from "react-router-dom";
import { ProductCard } from "../product-card/product-card.component";

import {
  CategoryInterface,
  ProductInterface,
} from "../../interfaces/interfaces";
import { CategoryPreviewContainer, Title, Preview } from "./category-preview.styles";

export const CategoryPreview = ({ title, products }: CategoryInterface) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Link to={title}>
          <Title className="title">{title.toUpperCase()}</Title>
        </Link>
      </h2>
      <Preview>
        {products &&
          products.map((product: ProductInterface, index: number) => {
            if (index < 4) {
              return <ProductCard key={product.id} product={product} />;
            } else {
              return null;
            }
          })}
      </Preview>
    </CategoryPreviewContainer>
  );
};
