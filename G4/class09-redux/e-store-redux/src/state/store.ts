import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/products.slice";

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
