import "./form-input.styles.scss";

interface FormProps {
  label: string;
  type?: string;
  name?: string;
  value: string;
  readOnly?: boolean | undefined;
  onChange?: (event: any) => void;
  onFocus?: any;
  required?: boolean;
  autoComplete?: string;
}

const FormInput = ({ label, ...otherProps }: FormProps) => {
  return (
    <div className={`group`}>
      <input
        readOnly
        onFocus={(e: Event) =>
          (e.target as HTMLInputElement).removeAttribute("readonly")
        }
        className={`form-input`}
        {...otherProps}
      />
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
