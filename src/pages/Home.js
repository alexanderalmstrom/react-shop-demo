import { useQuery } from "@apollo/client";
import styles from "./Home.module.scss";
import { PRODUCTS_QUERY } from "../graphql/products";
import Layout from "../components/Layout";
import ProductList from "../components/ProductList";

const Home = () => {
  const { loading, error, data: products } = useQuery(PRODUCTS_QUERY);

  return (
    <Layout>
      <div className={styles.root}>
        <ProductList
          products={products?.allProducts?.data}
          loading={loading}
          error={error}
        />
      </div>
    </Layout>
  );
};

export default Home;
