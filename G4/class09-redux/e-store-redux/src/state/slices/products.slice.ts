import { Product } from "../../models/product.model";
import {
  ActionReducerMapBuilder,
  PayloadAction,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { httpService } from "../../services/http.service";

interface ProductsState {
  value: Product[];
  isLoading: boolean;
}

const initialState: ProductsState = {
  value: [],
  isLoading: false,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const { data } = await httpService.get("/products");

    const products: Product[] = data.map((product: Product) => ({
      ...product,
      inCart: false,
      quantity: 0,
      price: Number(product.price),
    }));

    return products;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart(state, { payload: selectedProduct }: PayloadAction<Product>) {
      for (const product of state.value) {
        if (product.id === selectedProduct.id) {
          product.inCart = true;
          product.quantity = 1;
          break;
        }
      }
    },
    removeFromCart(
      state,
      { payload: selectedProduct }: PayloadAction<Product>
    ) {
      for (const product of state.value) {
        if (product.id === selectedProduct.id) {
          product.inCart = false;
          product.quantity = 0;
          break;
        }
      }
    },
    addProductQuantity(
      state,
      { payload: selectedProduct }: PayloadAction<Product>
    ) {
      for (const product of state.value) {
        if (product.id === selectedProduct.id) {
          product.quantity++;
          break;
        }
      }
    },
    removeProductQuantity(
      state,
      { payload: selectedProduct }: PayloadAction<Product>
    ) {
      for (const product of state.value) {
        if (product.id === selectedProduct.id) {
          if (product.quantity > 1) product.quantity--;
          break;
        }
      }
    },
    resetCart(state) {
      for (const product of state.value) {
        product.quantity = 0;
        product.inCart = false;
      }
    },
    setupLocalStorageCart(
      state,
      { payload: cartProducts }: PayloadAction<Product[]>
    ) {
      console.log(cartProducts);

      cartProducts.forEach(cartProduct => {
        for (const product of state.value) {
          if (cartProduct.id === product.id) {
            product.inCart = cartProduct.inCart;
            product.quantity = cartProduct.quantity;
            break;
          }
        }
      });
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<ProductsState>) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      console.log("success");
      state.isLoading = false;
      state.value = action.payload;
    });
    builder.addCase(fetchProducts.pending, state => {
      state.isLoading = true;
      console.log("loading");
    });
    builder.addCase(fetchProducts.rejected, state => {
      state.isLoading = false;
      console.log("error");
    });
  },
});

export const {
  addToCart,
  removeFromCart,
  addProductQuantity,
  removeProductQuantity,
  resetCart,
  setupLocalStorageCart,
} = productsSlice.actions;

export default productsSlice;
