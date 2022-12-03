import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";

import {
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
  auth,
} from "../../utils/firebase/firebase.utils";
import { SignUpForm } from "../../components";

const SignIn = () => {
  useEffect(() => {
    (async () => {
      try {
        const response: any = await getRedirectResult(auth);
        response.user.uid && createUserDocumentFromAuth(response.user);
      } catch (error) {}
    })();
  }, []);

  const signInPopupHandler = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };

  return (
    <>
      <div>Sign In Form</div>
      <button onClick={signInPopupHandler}>
        Click here to Sign In with Pop Up
      </button>
      <br />
      <button onClick={signInWithGoogleRedirect}>
        Click here to Sign In with Redirect
      </button>
      <br/>
      <SignUpForm />
    </>
  );
};

export default SignIn;
