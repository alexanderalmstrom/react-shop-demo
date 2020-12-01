import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductList = ({ products, loading, error }) => {
  const { addProductToCart } = useContext(CartContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  if (!products) return null;

  return (
    <>
      {products &&
        products.map((product) => {
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
    </>
  );
};

export default ProductList;
