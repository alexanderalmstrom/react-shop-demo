import { useQuery } from "@apollo/client";
import styles from "./Home.module.scss";
import { PRODUCTS_QUERY } from "../graphql/products";
import Layout from "./Layout";
import ProductList from "./ProductList";

const Home = () => {
  const { loading, error, data } = useQuery(PRODUCTS_QUERY);

  return (
    <Layout>
      <div className={styles.root}>
        <ProductList
          products={data?.allProducts?.data}
          loading={loading}
          error={error}
        />
      </div>
    </Layout>
  );
};

export default Home;
