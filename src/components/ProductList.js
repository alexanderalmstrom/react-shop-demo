import ProductCard from "./ProductCard";

import styles from "./ProductList.module.scss";

const ProductList = ({ products, loading, error }) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (!products) return null;

  return (
    <div className={styles.root}>
      {products.map((product) => {
        return <ProductCard key={product._id} product={product} />;
      })}
    </div>
  );
};

export default ProductList;
