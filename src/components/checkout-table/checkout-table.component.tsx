import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import { CheckoutItem } from "../../components";

import "./checkout-table.styles.scss";

export const CheckoutTable = () => {
  const { cartItems } = useContext(CartContext);
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
          {cartItems.map((item: any) => (
            <CheckoutItem key={item.id} product={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
