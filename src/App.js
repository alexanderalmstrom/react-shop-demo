import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { GlobalContext } from "./context/GlobalContext";
import Home from "./components/Home";
import Cart from "./components/Cart";

import "./App.css";

const App = () => {
  const products = [
    { id: 1, name: "Gaming mouse", price: 499.9 },
    { id: 2, name: "Harry potter", price: 399.9 },
    { id: 3, name: "T-shirt", price: 249.9 },
    { id: 4, name: "Sneakers", price: 999.9 },
  ];
  const [cart, setCart] = useState([]);

  const addProductToCart = (product) => {
    const updatedCart = [...cart];
    const addedProductIndex = updatedCart.findIndex(
      (cartItem) => cartItem.id === product.id
    );

    if (addedProductIndex < 0) {
      updatedCart.push({ ...product, quantity: 1 });
    } else {
      const addedProduct = {
        ...updatedCart[addedProductIndex],
      };

      addedProduct.quantity++;
      updatedCart[addedProductIndex] = addedProduct;
    }

    setCart(updatedCart);
  };

  const removeProductFromCart = (id) => {
    const updatedCart = [...cart];
    const removedProductIndex = updatedCart.findIndex(
      (cartItem) => cartItem.id === id
    );
    const removedProduct = {
      ...updatedCart[removedProductIndex],
    };

    updatedCart.splice(removedProduct, 1);

    setCart(updatedCart);
  };

  useEffect(() => {
    console.log("cart: ", cart);
  }, [cart]);

  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>
      <GlobalContext.Provider
        value={{
          products,
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
