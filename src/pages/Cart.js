import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export function Cart() {
  const { cart, decreaseQuantity, increaseQuantity } = useContext(CartContext);
  return (
    <div>
      {cart.length === 0 && <h2> Cart empty. Why don't you buy something </h2>}
      {cart.map(({ id, name, price, quantity, isItemInCart }, index) => {
        return (
          <div
            key={index}
            style={{
              border: "1px solid gray",
              margin: "0.5rem",
              padding: "0.5rem"
            }}
          >
            <h2>
              {name} <small> INR {price} </small>
            </h2>
            <h3>
              Quantity: <button onClick={() => decreaseQuantity(id)}>-</button>{" "}
              {quantity} <button onClick={() => increaseQuantity(id)}>+</button>
            </h3>
          </div>
        );
      })}
      <h3>
        Total Price:{" "}
        {cart.reduce(
          (total, { price, quantity }) => (total += price * quantity),
          0
        )}
      </h3>
    </div>
  );
}
