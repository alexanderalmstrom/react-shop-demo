import { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import { GlobalContext } from "./context/GlobalContext";
import Home from "./components/Home";
import Cart from "./components/Cart";

const App = () => {
  const products = [
    { id: 1, name: "Gaming mouse", price: 499.95 },
    { id: 2, name: "Harry potter", price: 399.95 },
    { id: 3, name: "T-shirt", price: 249.95 },
    { id: 4, name: "Sneakers", price: 999.95 },
  ];
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart") || [])
  );

  const addProductToCart = (product) => {
    const updatedCart = [...cart];
    const cartItemIndex = updatedCart.findIndex(
      (cartItem) => cartItem.id === product.id
    );

    if (cartItemIndex < 0) {
      updatedCart.push({ ...product, quantity: 1 });
    } else {
      const addedProduct = {
        ...updatedCart[cartItemIndex],
      };

      addedProduct.quantity++;
      updatedCart[cartItemIndex] = addedProduct;
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    setCart(updatedCart);
  };

  const removeProductFromCart = (id) => {
    const updatedCart = [...cart];
    const cartItemIndex = updatedCart.findIndex(
      (cartItem) => cartItem.id === id
    );
    const removedProduct = {
      ...updatedCart[cartItemIndex],
    };

    updatedCart.splice(removedProduct, 1);

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    setCart(updatedCart);
  };

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
