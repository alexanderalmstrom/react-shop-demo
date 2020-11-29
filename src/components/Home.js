import { useContext } from "react";
import styles from "./Home.module.scss";
import { GlobalContext } from "../context/GlobalContext";
import Layout from "./Layout";

const Home = () => {
  const { products, addProductToCart } = useContext(GlobalContext);

  return (
    <Layout>
      <div className={styles.root}>
        <h1>Home</h1>
        {products.map((product) => {
          return (
            <div key={product.id}>
              <h2>{product.name}</h2>
              <p>{product.price}</p>
              <button onClick={() => addProductToCart(product)}>
                Add to cart
              </button>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Home;
