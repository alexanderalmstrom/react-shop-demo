import { useContext } from "react";
import styles from "./Home.module.scss";
import { CartContext } from "../context/CartContext";
import Layout from "./Layout";

const Home = () => {
  const { products, addProductToCart } = useContext(CartContext);

  if (products.loading) return <p>Loading...</p>;
  if (products.error) return <p>Error :(</p>;

  const allProducts = products?.data?.allProducts?.data;

  return (
    <Layout>
      <div className={styles.root}>
        <h1>Home</h1>
        {allProducts &&
          allProducts.map((product) => {
            return (
              <div key={product._id}>
                <h2>{product.name}</h2>
                <p>{product.price} SEK</p>
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
