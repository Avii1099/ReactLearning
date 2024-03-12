import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const CounterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    toIncrement: (state) => {
      state.value = state.value < 10 ? state.value + 1 : state.value;
    },
    toDecrement: (state) => {
      state.value = state.value ? state.value - 1 : 0;
    },
  },
});

export const { toIncrement, toDecrement } = CounterSlice.actions;
export default CounterSlice.reducer;
