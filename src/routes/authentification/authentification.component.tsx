import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";

import {
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
  auth,
} from "../../utils/firebase/firebase.utils";
import { SignUpForm, SignInForm } from "../../components";
import { Button } from "../../components/button/button.component";

import {
  FormsContainer,
  GoogleSignInContainer,
} from "./authentification.styles";

export const Authentification = () => {
  useEffect(() => {
    (async () => {
      try {
        const response: any = await getRedirectResult(auth);
        response.user.uid && createUserDocumentFromAuth(response.user);
      } catch (error) {}
    })();
  }, []);

  const signInPopupHandler = async () => {
    await signInWithGooglePopup();
  };

  return (
    <>
      <GoogleSignInContainer>
        <h2>Sign In With Google Account</h2>
        <Button buttonType="google" onClick={signInPopupHandler}>
          Click here to Sign In with Pop Up
        </Button>
        <br />
        <Button buttonType="google" onClick={signInWithGoogleRedirect}>
          Click here to Sign In with Redirect
        </Button>
        <br />
      </GoogleSignInContainer>
      <FormsContainer>
        <SignUpForm />
        <SignInForm />
      </FormsContainer>
    </>
  );
};
