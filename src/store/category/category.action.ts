import {
  Action,
  ActionWithPayload,
  withMatcher,
} from '../../utils/reducer/createAction.utils'
import { createAction } from '../../utils/reducer/createAction.utils'
import { Category, CATEGORY_ACTION_TYPES } from './category.types'

export type FetchCategoriesStart =
  Action<CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START>

export type FetchCategoriesSuccess = ActionWithPayload<
  CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
  Category[]
>

export type FetchCategoriesFailed = ActionWithPayload<
  CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
  Error
>

export const fetchCategoriesStart = withMatcher(
  (): FetchCategoriesStart =>
    createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START)
)

export const fetchCategoriesSuccess = withMatcher(
  (categoriesArray: Category[]): FetchCategoriesSuccess =>
    createAction(
      CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
      categoriesArray
    )
)

export const fetchCategoriesFailed = withMatcher(
  (error: Error): FetchCategoriesFailed =>
    createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error)
)
