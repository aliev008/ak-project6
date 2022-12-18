import { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import { useParams } from "react-router-dom";
import { ProductInterface } from "../../interfaces/interfaces";
import { ProductCard } from "../../components/product-card/product-card.component";

import "./category.styles.scss";

export const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category as keyof typeof categoriesMap]);
  }, [categoriesMap, category]);

  return (
    <div className="category-page-container">
      {products &&
        products.map((product: ProductInterface) => {
          return <ProductCard key={product.id} product={product} />;
        })}
    </div>
  );
};
