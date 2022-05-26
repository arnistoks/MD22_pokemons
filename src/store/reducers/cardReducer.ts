import { createSlice } from '@reduxjs/toolkit';

export const cardReducer = createSlice({
  name: 'card',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = cardReducer.actions;

export default cardReducer.reducer;
