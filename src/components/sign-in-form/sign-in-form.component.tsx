import { useState } from "react";
import { signInUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import { Button } from "../button/button.component";

import { SignInContainer } from "./sign-in-form.styles";

const defaultFormFields = {
  email: "",
  password: "",
};

export const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      await signInUserWithEmailAndPassword(email, password);
      alert(`You successfully signed in!`);
      resetFormFields();
    } catch (error: any) {
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
  };
  return (
    <SignInContainer>
      <h2>Have an accont?</h2>
      <span>Sign In</span>
      <form autoComplete="disabled" onSubmit={handleSubmit}>
        <FormInput
          label="Enter Your E-mail"
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Enter Your Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          autoComplete="new-password"
          required
        />
        <Button type="submit">Sign In</Button>
      </form>
    </SignInContainer>
  );
};
