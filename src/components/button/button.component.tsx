import "./button.style.scss";

const BUTTON_CLASS_TYPES: { [key: string]: any } = {
  google: "google-sign-in",
  inverted: "inverted",
};

interface ButtonProps {
  children: string;
  buttonType?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: any;
}

const Button = ({ children, buttonType, ...otherProps }: ButtonProps) => {

  return (
    <button
      className={`button-container ${
        buttonType ? BUTTON_CLASS_TYPES[buttonType] : ''
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
