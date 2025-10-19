import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 'snake-plant', name: 'Snake Plant', category: 'Indoor', price: 25, quantity: 0, image: '/snake-plant.jpg' },
    { id: 'pothos', name: 'Pothos', category: 'Indoor', price: 15, quantity: 0, image: '/pothos.jpg' },
    { id: 'spider-plant', name: 'Spider Plant', category: 'Indoor', price: 20, quantity: 0, image: '/spider-plant.jpg' },
    { id: 'cactus', name: 'Cactus', category: 'Succulents', price: 10, quantity: 0, image: '/cactus.jpg' },
    { id: 'orchid', name: 'Orchid', category: 'Flowering', price: 35, quantity: 0, image: '/orchid.jpg' },
    { id: 'fern', name: 'Fern', category: 'Indoor', price: 18, quantity: 0, image: '/fern.jpg' },
  ],
  totalItems: 0,
  totalCost: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item && item.quantity === 0) {
        item.quantity = 1;
        state.totalItems += 1;
        state.totalCost += item.price;
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
        state.totalItems += 1;
        state.totalCost += item.price;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item && item.quantity > 0) {
        item.quantity -= 1;
        state.totalItems -= 1;
        state.totalCost -= item.price;
      }
    },
    removeFromCart: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        state.totalItems -= item.quantity;
        state.totalCost -= item.quantity * item.price;
        item.quantity = 0;
      }
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
