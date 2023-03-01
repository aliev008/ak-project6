import { SignUpForm, SignInForm } from "../../components";
import { Button, BUTTON_CLASS_TYPES } from "../../components/button/button.component";
import { MouseEvent } from "react";

import {
  FormsContainer,
  GoogleSignInContainer,
} from "./authentification.styles";
import { useDispatch } from "react-redux";
import { googleSignInStart } from "../../store/user/user.action";

const Authentification = () => {
  const dispatch = useDispatch();

  const signInPopupHandler = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(googleSignInStart());
  };

  return (
    <>
      <GoogleSignInContainer>
        <h2>Sign In With Google Account</h2>
        <Button buttonType={BUTTON_CLASS_TYPES.google} onClick={signInPopupHandler}>
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

export default Authentification;
