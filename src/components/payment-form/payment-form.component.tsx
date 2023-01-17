import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Button, BUTTON_CLASS_TYPES } from "../button/button.component";
import { PaymentFormContainer, FormContainer } from "./payment-form.styles";

export const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const paymenHandler = async (event: any) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
  };
  return (
    <PaymentFormContainer>
      <FormContainer>
        <h2>Credit card payment: </h2>
        <CardElement />
        <Button buttonType={BUTTON_CLASS_TYPES.inverted}> Pay now </Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};
