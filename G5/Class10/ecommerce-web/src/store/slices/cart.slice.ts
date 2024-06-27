import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../types/product.type";

export interface CartState {
  cartItems: Product[];
}

const initialCartState: CartState = {
  cartItems: [],
};

/**
 * IMPORTANT!!!
 * When we use createSlice, in the reducers we are mutating the state, but Redux Toolkit uses Immer under the hood to allow us to write code that "mutates" the state.
 *
 * Immer is a library that allows you to work with immutable state in a more convenient way. It allows you to write code that "mutates" some data, but in reality, it creates a copy of the data, applies the changes, and returns the copy.
 *
 * But in "real world", we must not mutate the state directly, instead the reduders should return a new copy of the state object.
 */
export const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,

  reducers: {
    addToCart: (state, { payload }: PayloadAction<Product>) => {
      console.log(state.cartItems);
      console.log(payload);
      console.log("ADD TO CART");
      state.cartItems.push(payload);
    },

    removeFromCart: (state, { payload }: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        (product) => product.id !== payload
      );
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
