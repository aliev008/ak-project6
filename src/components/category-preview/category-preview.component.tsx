import { useNavigate } from "react-router-dom";
import { ProductCard } from "../product-card/product-card.component";

import {
  CategoryInterface,
  ProductInterface,
} from "../../interfaces/interfaces";
import "./category-preview.styles.scss";

export const CategoryPreview = ({ title, products }: CategoryInterface) => {
  const navigate = useNavigate();

  const goToCategoryHandler = () => {
    navigate(`/shop/${title}`);
  };

  return (
    <div className="category-preview-container">
      <h2>
        <span className="title" onClick={goToCategoryHandler}>
          {title.toUpperCase()}
        </span>
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
