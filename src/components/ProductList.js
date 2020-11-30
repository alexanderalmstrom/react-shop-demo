import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductList = ({ products }) => {
  const { addProductToCart } = useContext(CartContext);

  if (products.loading) return <p>Loading...</p>;
  if (products.error) return <p>Error :(</p>;

  const { data } = products?.data?.allProducts;

  return (
    <>
      {data &&
        data.map((product) => {
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
