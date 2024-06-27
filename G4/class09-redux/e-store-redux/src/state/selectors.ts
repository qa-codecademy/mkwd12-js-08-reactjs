import { RootState } from "./store";

export const selectProductsInCart = (state: RootState) =>
  state.products.value.filter(product => product.inCart);

export const selectTotalAmount = (state: RootState) =>
  selectProductsInCart(state).reduce(
    (acc, product) => acc + product.quantity * product.price,
    0
  );
