import { setStorage } from "./helpers";

export const addProductToCart = (product, state) => {
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

  setStorage("cart", cart);

  return { ...state, cart };
};

export const removeProductFromCart = (id, state) => {
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

  setStorage("cart", cart);

  return { ...state, cart };
};
