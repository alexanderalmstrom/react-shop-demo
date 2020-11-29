import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Home = () => {
  const { products, addProductToCart } = useContext(GlobalContext);

  return (
    <div>
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
  );
};

export default Home;
