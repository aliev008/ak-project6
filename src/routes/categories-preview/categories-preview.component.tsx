import { useSelector } from "react-redux";

import { CategoryPreview } from "../../components/category-preview/category-preview.component";

import { selectCategoriesMap } from "../../store/category/category.selector";

export const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title as keyof typeof categoriesMap];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};
