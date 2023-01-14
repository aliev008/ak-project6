import { call, put, all, takeLatest } from "redux-saga/effects";
import { USER_ACTION_TYPES } from "./user.types";
import {
  signInSucces,
  signUpFailed,
  signUpSuccess,
  singInFailed,
} from "./user.action";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  getCurrentuser,
  signInUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

export function* getUserDocSnapshot(user: any, additionalDetails?: any): any {
  try {
    const userSnapshot = yield call(createUserDocumentFromAuth, user, {
      ...additionalDetails,
    });
    yield put(signInSucces({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(singInFailed(error));
  }
}

export function* isUserAuthenticated(): any {
  try {
    const currentUser = yield call(getCurrentuser);
    if (!currentUser) return;
    yield call(getUserDocSnapshot, currentUser);
  } catch (error) {
    yield put(singInFailed(error));
  }
}

export function* signInWithGoogle(): any {
  try {
    let { user } = yield call(signInWithGooglePopup);
    if (!user) return;
    yield call(getUserDocSnapshot, user);
  } catch (error) {
    yield put(singInFailed(error));
  }
}

export function* signInWithEmail({ payload: { email, password } }: any): any {
  try {
    const response = yield call(
      signInUserWithEmailAndPassword,
      email,
      password
    );
    if (!response.user.uid) return;
    yield call(getUserDocSnapshot, response.user);
    alert(`You successfully signed in!`);
  } catch (error: any) {
    yield put(singInFailed(error));
    switch (error.code) {
      case "auth/wrong-password":
        alert("Sorry, password is incorrect for this e-mail.");
        break;
      case "auth/user-not-found":
        alert("Sorry, no user associated with this e-mail.");
        break;
      default:
        console.error(error);
    }
  }
}

export function* signUp({
  payload: { email, password, displayName },
}: any): any {
  try {
    const { user } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );
    alert(`You successfully signed up!`);
    yield put(signUpSuccess(user, { displayName }));
  } catch (error: any) {
    yield put(signUpFailed(error));
    if (error.code === "auth/email-already-in-use") {
      alert("Sorry. User with this email is already exist");
    } else {
      alert("Password confirm went wrong!");
    }
  }
}

export function* signInAfterSignUp({
  payload: { user, additionalDetails },
}: any): any {
  try {
    yield call(getUserDocSnapshot, user, additionalDetails);
  } catch (error: any) {}
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onGoogleSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignUpStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ]);
}
