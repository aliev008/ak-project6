import { SignUpForm, SignInForm } from "../../components";
import { Button } from "../../components/button/button.component";

import {
  FormsContainer,
  GoogleSignInContainer,
} from "./authentification.styles";
import { useDispatch } from "react-redux";
import { googleSignInStart } from "../../store/user/user.action";

export const Authentification = () => {
  const dispatch = useDispatch();

  const signInPopupHandler = async (e: any) => {
    e.preventDefault();
    dispatch(googleSignInStart());
  };

  return (
    <>
      <GoogleSignInContainer>
        <h2>Sign In With Google Account</h2>
        <Button buttonType="google" onClick={signInPopupHandler}>
          Click here to Sign In with Google
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
