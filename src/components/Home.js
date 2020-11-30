import { useQuery } from "@apollo/client";
import styles from "./Home.module.scss";
import { PRODUCTS_QUERY } from "../graphql/products";
import Layout from "./Layout";
import ProductList from "./ProductList";

const Home = () => {
  const products = useQuery(PRODUCTS_QUERY);

  return (
    <Layout>
      <div className={styles.root}>
        <h1>Home</h1>
        <ProductList products={products} />
      </div>
    </Layout>
  );
};

export default Home;
