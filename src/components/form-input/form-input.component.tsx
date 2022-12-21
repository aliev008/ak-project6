import { Group, FormInputLabel, Input } from "./form-input.styles";

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
    <Group>
      <Input
        readOnly
        onFocus={(e: Event) =>
          (e.target as HTMLInputElement).removeAttribute("readonly")
        }
        {...otherProps}
      />
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
