import { FC, ButtonHTMLAttributes } from 'react'

import {
  BasicButton,
  InvertedButton,
  GoogleSigninButton,
  Spinner,
} from './button.style'

export enum BUTTON_CLASS_TYPES {
  base = 'base',
  google = 'google',
  inverted = 'inverted',
}

export type ButtonProps = {
  buttonType?: BUTTON_CLASS_TYPES
  isLoading?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

const getButton = (buttonType = BUTTON_CLASS_TYPES.base): typeof BasicButton =>
  ({
    [BUTTON_CLASS_TYPES.base]: BasicButton,
    [BUTTON_CLASS_TYPES.google]: GoogleSigninButton,
    [BUTTON_CLASS_TYPES.inverted]: InvertedButton,
  }[buttonType])

export const Button: FC<ButtonProps> = ({
  children,
  buttonType,
  isLoading,
  ...otherProps
}) => {
  const CustomButton = getButton(buttonType)
  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <Spinner /> : children}
    </CustomButton>
  )
}
