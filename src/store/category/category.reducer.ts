import { CATEGORY_ACTION_TYPES } from "./category.types";

const INITIAL_STATE = {
  categories: [],
  isLoading: false,
  error: null
};

export const categoryReducer = (
  state: any = INITIAL_STATE,
  action: any = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORY_ACTION_TYPES.SET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    default:
      return state;
  }
};
