import { Link } from "react-router-dom";
import { ProductCard } from "../product-card/product-card.component";

import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./category-preview.styles";

import { FC } from "react";
import { CategoryItem } from "../../store/category/category.types";

type CategoriesPreviewProps = {
  title: string;
  products: CategoryItem[];
};


export const CategoryPreview: FC<CategoriesPreviewProps> = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Link to={title}>
          <Title className="title">{title.toUpperCase()}</Title>
        </Link>
      </h2>
      <Preview>
        {products &&
          products.map((product, index) => {
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
