import { useState } from "react";
import { signInUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-in-form.styles.scss";

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
      const response: any = await signInUserWithEmailAndPassword(
        email,
        password
      );
      alert(`You successfully signed in!`);
      resetFormFields();
    } catch (error: any) {
      if (error.code === "auth/wrong-password")
        alert("Sorry, your password or e-mail is wrong.");
    }
  };
  return (
    <div className="sign-in-container">
      <h2>Have an accont?</h2>
      <span>Sign In</span>
      <form autoComplete="disabled" onSubmit={handleSubmit}>
        <FormInput
          label="Enter Your E-mail"
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
          readOnly
          onFocus={(e: Event) =>
            (e.target as HTMLInputElement).removeAttribute("readonly")
          }
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
    </div>
  );
};
