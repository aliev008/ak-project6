import { useState, ChangeEvent, FormEvent } from 'react'

import FormInput from '../form-input/form-input.component'
import { Button } from '../button/button.component'

import { SignInContainer } from './sign-in-form.styles'
import { useDispatch } from 'react-redux'
import { emailSignInStart } from '../../store/user/user.action'

const defaultFormFields = {
  email: '',
  password: '',
}

export const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields
  const dispatch = useDispatch()

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      dispatch(emailSignInStart(email, password))
      resetFormFields()
    } catch (error) {}
  }
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
  )
}
