const addProductToCart = (product, state) => {
  const cart = [...state.cart];
  const cartIndex = cart.findIndex((cartItem) => cartItem._id === product._id);

  if (cartIndex < 0) {
    cart.push({ ...product, quantity: 1 });
  } else {
    const updatedProduct = {
      ...cart[cartIndex],
    };

    updatedProduct.quantity++;
    cart[cartIndex] = updatedProduct;
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  return { ...state, cart };
};

const removeProductFromCart = (id, state) => {
  const cart = [...state.cart];
  const cartIndex = cart.findIndex((cartItem) => cartItem._id === id);
  const updatedProduct = {
    ...cart[cartIndex],
  };

  updatedProduct.quantity--;

  if (updatedProduct.quantity <= 0) {
    cart.splice(cartIndex, 1);
  } else {
    cart[cartIndex] = updatedProduct;
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  return { ...state, cart };
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "PRODUCT_ADD":
      return addProductToCart(action.product, state);
    case "PRODUCT_REMOVE":
      return removeProductFromCart(action.id, state);
    default:
      return state;
  }
};
