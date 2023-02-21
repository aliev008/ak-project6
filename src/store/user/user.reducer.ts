import { AnyAction } from 'redux'
import { UserData } from '../../utils/firebase/firebase.types'
import {
  signInSuccess,
  singInFailed,
  signOutFailed,
  signOutSuccess,
  signUpFailed,
} from './user.action'

export type UserState = {
  readonly currentUser: UserData | null
  readonly isLoading: boolean
  readonly error: Error | null
}

const INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
}

export const userReducer = (
  state = INITIAL_STATE,
  action: AnyAction
): UserState => {
  if (signInSuccess.match(action)) {
    return {
      ...state,
      currentUser: action.payload,
    }
  }

  if (signOutSuccess.match(action)) {
    return {
      ...state,
      currentUser: null,
    }
  }

  if (
    signOutFailed.match(action) ||
    signUpFailed.match(action) ||
    singInFailed.match(action)
  ) {
    return {
      ...state,
      error: action.payload,
    }
  }

  return state;
}
