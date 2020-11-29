import { Link } from "react-router-dom";
import styles from "./Navigation.module.scss";

const Navigation = ({ cart }) => {
  return (
    <nav className={styles.root}>
      <Link to="/cart">
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
