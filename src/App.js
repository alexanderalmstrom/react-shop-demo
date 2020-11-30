import { useReducer } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import { cartReducer } from "./reducers/cart";
import { getStorage } from "./utils/helpers";
import Home from "./components/Home";
import Cart from "./components/Cart";

const App = () => {
  const [{ cart }, dispatch] = useReducer(cartReducer, {
    cart: getStorage("cart"),
  });

  const addProductToCart = (product) => {
    dispatch({ type: "PRODUCT_ADD", product });
  };

  const removeProductFromCart = (id) => {
    dispatch({ type: "PRODUCT_REMOVE", id });
  };

  return (
    <Router>
      <CartContext.Provider
        value={{
          cart,
          addProductToCart,
          removeProductFromCart,
        }}
      >
        <Route path="/" exact component={Home} />
        <Route path="/cart" component={Cart} />
      </CartContext.Provider>
    </Router>
  );
};

export default App;
