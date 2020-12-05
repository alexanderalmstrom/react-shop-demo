import { useContext } from "react";
import styles from "./Cart.module.scss";
import Layout from "../components/Layout";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <Layout>
      <div className={styles.root}>
        <h1>Cart</h1>
        {cart.length < 1 ? (
          <p>No products in cart.</p>
        ) : (
          cart.map((product) => {
            return <CartItem key={product._id} product={product} />;
          })
        )}
      </div>
    </Layout>
  );
};

export default Cart;
