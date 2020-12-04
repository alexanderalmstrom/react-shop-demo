import { useContext } from "react";
import styles from "./CartItem.module.scss";
import { CartContext } from "../context/CartContext";
import { roundPrice } from "../lib/price";

const CartItem = ({ product }) => {
  const { removeProductFromCart } = useContext(CartContext);

  return (
    <div className={styles.root}>
      <h2 className={styles.name}>
        {product.name} x {product.quantity}
      </h2>
      <p className={styles.price}>
        {roundPrice(product.price * product.quantity)} SEK
      </p>
      <button onClick={() => removeProductFromCart(product._id)}>Remove</button>
    </div>
  );
};

export default CartItem;
