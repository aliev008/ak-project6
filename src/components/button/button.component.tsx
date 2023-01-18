import {
  BasicButton,
  InvertedButton,
  GoogleSigninButton,
  Spinner,
} from "./button.style";

export const BUTTON_CLASS_TYPES: { [key: string]: any } = {
  base: "base",
  google: "google",
  inverted: "inverted",
};

interface ButtonProps {
  children: string;
  buttonType?: string;
  isLoading?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: any;
}

const getButton = (buttonType = BUTTON_CLASS_TYPES.base) =>
  ({
    [BUTTON_CLASS_TYPES.base]: BasicButton,
    [BUTTON_CLASS_TYPES.google]: GoogleSigninButton,
    [BUTTON_CLASS_TYPES.inverted]: InvertedButton,
  }[buttonType]);

export const Button = ({
  children,
  buttonType,
  isLoading,
  ...otherProps
}: ButtonProps) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <Spinner /> : children}
    </CustomButton>
  );
};
