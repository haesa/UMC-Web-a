import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../constants/cartItems';

const total = cartItems.reduce((total, item) => total + item.price * item.amount, 0);

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: cartItems,
    total: total,
  },
  reducers: {
    increase: (state, action) => {
      return {
        ...state,
        cart: state.cart.map((item) => item.id === action.payload ? { ...item, amount: item.amount + 1 } : item),
      };
    },
    decrease: (state, action) => {
      return {
        ...state,
        cart: state.cart.map((item) => item.id === action.payload ? { ...item, amount: item.amount - 1 } : item),
      };
    },
    remove: (state, action) => {
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      };
    },
    clear: () => {
      return { cart: [], total: 0 };
    },
    calculateTotal: (state) => {
      return {
        ...state,
        total: state.cart.reduce((total, item) => total + item.price * item.amount, 0)
      };
    },
  },
});

export const { increase, decrease, remove, clear, calculateTotal } = cartSlice.actions;
export default cartSlice.reducer;