import { CategoryInterface } from "../../interfaces/interfaces";
import { createSelector } from "reselect";

const selectCategoryReducer = (state: any) => state.categories;

const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc: any, category: CategoryInterface) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);
