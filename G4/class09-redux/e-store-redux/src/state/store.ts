import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/products.slice";
import { selectProductsInCart } from "./selectors";
import { saveCartInLocalStorage } from "../services/data.service";

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
  },
});

//Subscribe callback is called whenever an action related to the store is dispatch
store.subscribe(() => {
  console.log("subscribe callback");

  const cartProducts = selectProductsInCart(store.getState());

  if (cartProducts.length) saveCartInLocalStorage(cartProducts);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
