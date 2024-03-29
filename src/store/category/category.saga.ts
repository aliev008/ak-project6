import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils'
import { call, all, put, takeLatest } from 'typed-redux-saga/macro'
import {
  fetchCategoriesFailed,
  fetchCategoriesSuccess,
} from './category.action'
import { CATEGORY_ACTION_TYPES } from './category.types'

function* fetchCategoriesAsync(): any {
  try {
    const categories = yield* call(getCategoriesAndDocuments)
    yield* put(fetchCategoriesSuccess(categories))
  } catch (error) {
    yield* put(fetchCategoriesFailed(error as Error))
  }
}

export function* onCategoriesFetch() {
  yield* takeLatest(
    CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  )
}

export function* categoriesSaga() {
  yield* all([call(onCategoriesFetch)])
}
