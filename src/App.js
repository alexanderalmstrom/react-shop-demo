import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { PRODUCTS_QUERY } from "./graphql/products";
import { GlobalContext } from "./context/GlobalContext";
import Home from "./components/Home";
import Cart from "./components/Cart";

const App = () => {
  const products = useQuery(PRODUCTS_QUERY);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const addProductToCart = (product) => {
    const updatedCart = [...cart];
    const cartItemIndex = updatedCart.findIndex(
      (cartItem) => cartItem._id === product._id
    );

    if (cartItemIndex < 0) {
      updatedCart.push({ ...product, quantity: 1 });
    } else {
      const updatedProduct = {
        ...updatedCart[cartItemIndex],
      };

      updatedProduct.quantity++;
      updatedCart[cartItemIndex] = updatedProduct;
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    setCart(updatedCart);
  };

  const removeProductFromCart = (id) => {
    const updatedCart = [...cart];
    const cartItemIndex = updatedCart.findIndex(
      (cartItem) => cartItem._id === id
    );
    const updatedProduct = {
      ...updatedCart[cartItemIndex],
    };

    updatedProduct.quantity--;

    if (updatedProduct.quantity <= 0) {
      updatedCart.splice(cartItemIndex, 1);
    } else {
      updatedCart[cartItemIndex] = updatedProduct;
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    setCart(updatedCart);
  };

  return (
    <Router>
      <GlobalContext.Provider
        value={{
          products: {
            ...products,
          },
          cart,
          addProductToCart,
          removeProductFromCart,
        }}
      >
        <Route path="/" exact component={Home} />
        <Route path="/cart" component={Cart} />
      </GlobalContext.Provider>
    </Router>
  );
};

export default App;
