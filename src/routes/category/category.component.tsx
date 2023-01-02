import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductInterface } from "../../interfaces/interfaces";
import { ProductCard } from "../../components/product-card/product-card.component";

import { CategoryContainer, Title } from "./category.styles";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/category/category.selector";

export const Category = () => {  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category as keyof typeof categoriesMap]);

  useEffect(() => {
    setProducts(categoriesMap[category as keyof typeof categoriesMap]);
  }, [categoriesMap, category]);

  return (
    <>
      <Title>
        <span>{category?.toUpperCase()}</span>
      </Title>
      <CategoryContainer>
        {products &&
          products.map((product: ProductInterface) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </CategoryContainer>
    </>
  );
};
