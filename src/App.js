import { useReducer } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { PRODUCTS_QUERY } from "./graphql/products";
import { GlobalContext } from "./context/GlobalContext";
import { cartReducer } from "./reducers/cart";
import Home from "./components/Home";
import Cart from "./components/Cart";

const getCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
};

const App = () => {
  const products = useQuery(PRODUCTS_QUERY);
  const [{ cart }, dispatch] = useReducer(cartReducer, {
    cart: getCartFromLocalStorage(),
  });

  const addProductToCart = (product) => {
    dispatch({ type: "PRODUCT_ADD", product });
  };

  const removeProductFromCart = (id) => {
    dispatch({ type: "PRODUCT_REMOVE", id });
  };

  return (
    <Router>
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
