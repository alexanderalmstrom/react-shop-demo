import { useContext } from "react";
import styles from "./Cart.module.scss";
import { GlobalContext } from "../context/GlobalContext";
import Layout from "./Layout";

const Cart = () => {
  const { cart, removeProductFromCart } = useContext(GlobalContext);

  return (
    <Layout>
      <div className={styles.root}>
        <h1>Cart</h1>
        {cart.map((product) => {
          const price =
            Math.round(product.price * product.quantity * 100) / 100;

          return (
            <div key={product._id}>
              <h2>{product.name}</h2>
              <p>{price} SEK</p>
              <p>QTY: {product.quantity}</p>
              <button onClick={() => removeProductFromCart(product._id)}>
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Cart;
