import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className={styles.root}>
      <div className={styles.container}>
        <Link to="/">React Shop Demo</Link>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
