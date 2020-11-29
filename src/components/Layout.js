import styles from "./Layout.module.scss";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <main className={styles.root}>
      <Header />
      {children}
      <footer></footer>
    </main>
  );
};

export default Layout;
