import { useEffect, useState, useReducer } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { persistCache, LocalStorageWrapper } from "apollo3-cache-persist";
import { CartContext } from "./context/CartContext";
import { cartReducer } from "./reducers/cart";
import { getStorage } from "./lib/storage";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Users from "./pages/Users";
import { getToken } from "./lib/auth";
import User from "./pages/User";

const App = () => {
  const [client, setClient] = useState(undefined);
  const [{ cart }, dispatch] = useReducer(cartReducer, {
    cart: getStorage("cart"),
  });

  const addProductToCart = (product) => {
    dispatch({ type: "PRODUCT_ADD", product });
  };

  const removeProductFromCart = (id) => {
    dispatch({ type: "PRODUCT_REMOVE", id });
  };

  useEffect(() => {
    const cache = new InMemoryCache();
    const token = getToken() || process.env.REACT_APP_FAUNA_SECRET;

    const link = createHttpLink({
      uri: "https://graphql.fauna.com/graphql",
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    const client = new ApolloClient({ cache, link });

    persistCache({
      cache,
      storage: new LocalStorageWrapper(window.localStorage),
    }).then(() => {
      setClient(client);
    });

    return () => {};
  }, []);

  if (client === undefined) return <div>Loading...</div>;

  return (
    <ApolloProvider client={client}>
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
          <Route path="/login" component={Login} />
          <Route path="/user/:name" component={User} />
          <Route path="/users" component={Users} />
        </CartContext.Provider>
      </Router>
    </ApolloProvider>
  );
};

export default App;
