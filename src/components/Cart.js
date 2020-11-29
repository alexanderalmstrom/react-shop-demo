import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Cart = () => {
  const { cart, removeProductFromCart } = useContext(GlobalContext);

  return (
    <div>
      <h1>Cart</h1>
      {cart.map((product) => {
        const price = Math.round(product.price * product.quantity * 100) / 100;

        return (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{price} SEK</p>
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
