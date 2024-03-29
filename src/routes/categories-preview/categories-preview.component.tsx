import { useSelector } from "react-redux";

import { CategoryPreview } from "../../components/category-preview/category-preview.component";
import { Spinner } from "../../components/spinner/spinner.component";

import {
  selectCategoriesMap,
  selectIsLoading,
} from "../../store/category/category.selector";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </>
  );
};

export default CategoriesPreview;
