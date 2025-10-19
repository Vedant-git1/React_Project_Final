import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currency: '£',
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    changeLocation: (state, action) => {
      state.currency = action.payload;
    },
  },
});

export const { changeLocation } = locationSlice.actions;
export default locationSlice.reducer;
