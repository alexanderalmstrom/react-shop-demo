import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Cart = () => {
  const { cart, removeProductFromCart } = useContext(GlobalContext);

  return (
    <div>
      <h1>Cart</h1>
      {cart.map((product) => {
        return (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <p>QTY: {product.quantity}</p>
            <button onClick={() => removeProductFromCart(product.id)}>
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
