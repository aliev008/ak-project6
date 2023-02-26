import { call, put, all, takeLatest } from 'typed-redux-saga/macro'
import { USER_ACTION_TYPES } from './user.types'
import {
  EmailSignInStart,
  signInSuccess,
  signOutFailed,
  signOutSuccess,
  signUpFailed,
  SignUpStart,
  SignUpSuccess,
  signUpSuccess,
  singInFailed,
} from './user.action'
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  getCurrentUser,
  signInUserWithEmailAndPassword,
  signInWithGooglePopup,
  signOutUser,
} from '../../utils/firebase/firebase.utils'
import { User, AuthError, AuthErrorCodes } from 'firebase/auth'
import {
  AdditionalInformation,
} from '../../utils/firebase/firebase.types'

export function* getUserDocSnapshot(
  user: User,
  additionalDetails?: AdditionalInformation
) {
  try {
    const userSnapshot = yield* call(
      createUserDocumentFromAuth,
      user,
      additionalDetails
    )
    if (userSnapshot) {
      yield* put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
    }
  } catch (error) {
    yield* put(singInFailed(error as Error))
  }
}

export function* isUserAuthenticated() {
  try {
    const currentUser = yield* call(getCurrentUser)
    if (currentUser) {
      yield* call(getUserDocSnapshot, currentUser)
    }
  } catch (error) {
    yield* put(singInFailed(error as Error))
  }
}

export function* signInWithGoogle() {
  try {
    const userCredential = yield* call(signInWithGooglePopup)
    if (userCredential) {
      const { user } = userCredential
      yield* call(getUserDocSnapshot, user)
    }
  } catch (error) {
    yield* put(singInFailed(error as Error))
  }
}

export function* signInWithEmail({
  payload: { email, password },
}: EmailSignInStart) {
  try {
    const userCredential = yield* call(
      signInUserWithEmailAndPassword,
      email,
      password
    )

    if (userCredential) {
      const { user } = userCredential
      yield* call(getUserDocSnapshot, user)
      alert(`You successfully signed in!`)
    }
  } catch (error) {
    yield* put(singInFailed(error as Error))
    switch ((error as AuthError).code) {
      case AuthErrorCodes.INVALID_PASSWORD:
        alert('Sorry, password is incorrect for this e-mail.')
        break
      case AuthErrorCodes.USER_DELETED:
        alert('Sorry, no user associated with this e-mail.')
        break
      default:
        console.error(error)
    }
  }
}

export function* signUp({
  payload: { email, password, displayName },
}: SignUpStart) {
  try {
    const userCredential = yield* call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    )

    if (userCredential) {
      const { user } = userCredential
      alert(`You successfully signed up!`)
      yield* put(signUpSuccess(user, { displayName }))
    }
  } catch (error) {
    yield* put(signUpFailed(error as Error))
    if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
      alert('Sorry. User with this email is already exist')
    } else {
      alert('Password confirm went wrong!')
    }
  }
}

export function* signOut() {
  try {
    yield* call(signOutUser)
    alert(`You successfully signed out!`)
    yield* put(signOutSuccess())
  } catch (error) {
    yield* put(signOutFailed(error as Error))
    alert('Sorry. Something Gone Wrong')
  }
}

export function* signInAfterSignUp({
  payload: { user, additionalDetails },
}: SignUpSuccess) {
  try {
    yield* call(getUserDocSnapshot, user, additionalDetails)
  } catch (error) {}
}

export function* onCheckUserSession() {
  yield* takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onGoogleSignInStart() {
  yield* takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
  yield* takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onSignUpStart() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp)
}

export function* onSignUpSuccess() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* onSignOutStart() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut)
}

export function* userSagas() {
  yield* all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ])
}
