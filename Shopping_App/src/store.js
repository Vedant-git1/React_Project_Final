import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './features/cartSlice';
import locationSlice from './features/locationSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    location: locationSlice,
  },
});
