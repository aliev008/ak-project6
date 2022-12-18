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
