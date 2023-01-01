import { createAction } from "../../utils/reducer/createAction.utils";
import { CATEGORY_ACTION_TYPES } from "./category.types";

export const setCategories = (categoriesArray: any) =>
  createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES, categoriesArray);
