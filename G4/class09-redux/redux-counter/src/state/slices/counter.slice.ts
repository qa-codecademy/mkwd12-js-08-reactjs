import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 1,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementOne(state) {
      state.value++;
    },
    decrementOne(state) {
      state.value--;
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      console.log(action);
      state.value += action.payload;
    },
    decrementByAmount(state, action: PayloadAction<number>) {
      state.value -= action.payload;
    },
  },
});

export const {
  incrementOne,
  decrementOne,
  incrementByAmount,
  decrementByAmount,
} = counterSlice.actions;

export default counterSlice.reducer;
