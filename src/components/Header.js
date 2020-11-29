import { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { GlobalContext } from "../context/GlobalContext";
import Navigation from "./Navigation";

const Header = () => {
  const { cart } = useContext(GlobalContext);

  return (
    <header className={styles.root}>
      <div className={styles.container}>
        <Link to="/">React Shop Demo</Link>
        <Navigation cart={cart} />
      </div>
    </header>
  );
};

export default Header;
