import { useContext } from "react";
import { CartContext } from "../context/CartContext";

import styles from "./ProductCard.module.scss";

const ProductCard = ({ product }) => {
  const { addProductToCart } = useContext(CartContext);

  return (
    <div className={styles.root}>
      <h2 className={styles.name}>{product.name}</h2>
      <p className={styles.price}>{product.price} SEK</p>
      <button
        className={styles.button}
        onClick={() => addProductToCart(product)}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
