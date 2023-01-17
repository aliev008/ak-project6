import { CheckoutItem } from "..";

import { TableContainer, Table, Total } from "./checkout-table.styles";
import { CartItemInterface } from "../../interfaces/interfaces";
import {
  selectCartItems,
  selectTotalPrice,
} from "../../store/cart/cart.selector";
import { useSelector } from "react-redux";
import { PaymentForm } from "../payment-form/payment-form.component";

export const CheckoutTable = () => {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice);
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((cartItem: CartItemInterface) => (
            <CheckoutItem key={cartItem.id} checkoutItem={cartItem} />
          ))}
        </tbody>
      </Table>
      <Total className="total">Total Price: {totalPrice} $</Total>
      <PaymentForm />
    </TableContainer>
  );
};
