import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import { CheckoutItem } from "../../components";

import "./checkout-table.styles.scss";
import { CartItemInterface } from "../../interfaces/interfaces";

export const CheckoutTable = () => {
  const { cartItems, totalPrice } = useContext(CartContext);
  return (
    <div className="table-container">
      <table>
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
      </table>
      <div className="total">Total Price: {totalPrice} $</div>
    </div>
  );
};
