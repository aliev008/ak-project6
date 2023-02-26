import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { StripeCardElement } from '@stripe/stripe-js';
import { useState, FormEvent } from 'react';
import { useSelector } from 'react-redux';
import { selectTotalPrice } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import { BUTTON_CLASS_TYPES } from '../button/button.component';
import {
  PaymentFormContainer,
  FormContainer,
  PaymentButton,
} from './payment-form.styles';

const ifValidCardElement = (card: null | StripeCardElement): card is StripeCardElement => card !== null;

export const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectTotalPrice);
  const user = useSelector(selectCurrentUser);

  const [isProccessingPayment, setIsProccessingPayment] = useState(false);

  const paymentHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProccessingPayment(true);

    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((response) => response.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    const cardDetails = elements.getElement(CardElement);
    if (!ifValidCardElement(cardDetails)) return;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: cardDetails,
        billing_details: {
          name: user ? user.displayName : 'Guest',
        },
      },
    });

    setIsProccessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert(`Payment successfull`);
      }
    }
  };
  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit card payment: </h2>
        <CardElement />
        <PaymentButton
          isLoading={isProccessingPayment}
          buttonType={BUTTON_CLASS_TYPES.inverted}
        >
          Pay now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};
