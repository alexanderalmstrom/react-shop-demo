import { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.scss";
import { CartContext } from "../context/CartContext";

const Navigation = () => {
  const { cart } = useContext(CartContext);

  return (
    <nav className={styles.root}>
      <Link to="/login" className={styles.link}>
        Login
      </Link>
      <Link to="/users" className={styles.link}>
        Users
      </Link>
      <Link to="/cart" className={styles.link}>
        Cart (
        {cart.reduce((count, item) => {
          return count + item.quantity;
        }, 0)}
        )
      </Link>
    </nav>
  );
};

export default Navigation;
