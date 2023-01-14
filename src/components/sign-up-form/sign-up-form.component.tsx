import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import { Button } from "../button/button.component";

import { SignUpContainer } from "./sign-up-form.styles";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.action";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmedPassword: "",
};

export const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmedPassword } = formFields;

  const dispatch = useDispatch();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (password === confirmedPassword) {
      try {
        dispatch(signUpStart(email, password, displayName));
        resetFormFields();
      } catch (error: any) {}
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
