import "./form-input.styles.scss";

interface FormProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (event: any) => void;
  required: boolean;
}

const FormInput = ({ label, ...otherProps }: FormProps) => {
  return (
    <div className={`group`}>
      <input className={`form-input`} {...otherProps} />
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
