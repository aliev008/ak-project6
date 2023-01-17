import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Button, BUTTON_CLASS_TYPES } from "../button/button.component";
import { PaymentFormContainer, FormContainer } from "./payment-form.styles";

export const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (event: any) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: 10000 }),
    }).then((response) => response.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: "Farid Aliev",
        },
      },
    } as any);

    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert(`Payment successfull`);
      }
    }
  };
  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit card payment: </h2>
        <CardElement />
        <Button buttonType={BUTTON_CLASS_TYPES.inverted}> Pay now </Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};
