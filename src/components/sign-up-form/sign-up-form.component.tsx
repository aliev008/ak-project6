import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import { Button } from "../button/button.component";

import { SignUpContainer } from "./sign-up-form.styles";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmedPassword: "",
};

export const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmedPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (password === confirmedPassword) {
      try {
        const { user }: any = await createAuthUserWithEmailAndPassword(
          email,
          password
        );
        alert(`You successfully signed up!`);
        await createUserDocumentFromAuth(user, { displayName });
        resetFormFields();
      } catch (error: any) {
        if (error.code === "auth/email-already-in-use")
          alert("Sorry. User with this email is already exist");
      }
    } else {
      alert("Password confirm went wrong!");
    }
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account yet?</h2>
      <span>Sign Up Form</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Enter Your Name"
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Enter Your E-mail"
          type="email"
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
          required
        />
        <FormInput
          label="Confirm Your Password"
          type="password"
          name="confirmedPassword"
          value={confirmedPassword}
          onChange={handleChange}
          required
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};
