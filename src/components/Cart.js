import { useContext } from "react";
import styles from "./Cart.module.scss";
import { CartContext } from "../context/CartContext";
import Layout from "./Layout";
import { roundPrice } from "../utils/helpers";

const Cart = () => {
  const { cart, removeProductFromCart } = useContext(CartContext);

  return (
    <Layout>
      <div className={styles.root}>
        <h1>Cart</h1>
        {cart.length < 1 ? (
          <p>No products in cart :(</p>
        ) : (
          cart.map((product) => {
            const price = roundPrice(product.price * product.quantity);

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
          })
        )}
      </div>
    </Layout>
  );
};

export default Cart;
