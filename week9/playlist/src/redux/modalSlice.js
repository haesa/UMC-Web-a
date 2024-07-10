import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
  },
  reducers: {
    open: (state) => {
      return {
        isOpen: true,
      };
    },
    close: (state) => {
      return {
        isOpen: false,
      };
    },
  },
});

export const { open, close } = modalSlice.actions;
export default modalSlice.reducer;