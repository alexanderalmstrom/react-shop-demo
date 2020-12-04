import { addProductToCart, removeProductFromCart } from "../lib/cart";

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
