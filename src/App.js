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
import Home from "./components/Home";
import Cart from "./components/Cart";
import Auth from "./components/Auth";
import Users from "./components/Users";

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

    const link = createHttpLink({
      uri: "https://graphql.fauna.com/graphql",
      headers: {
        authorization: `Bearer ${process.env.REACT_APP_FAUNA_SECRET}`,
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
          <Route path="/auth" component={Auth} />
          <Route path="/users" component={Users} />
        </CartContext.Provider>
      </Router>
    </ApolloProvider>
  );
};

export default App;
