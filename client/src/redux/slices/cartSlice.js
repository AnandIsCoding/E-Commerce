import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],//empty array for cart
  reducers: {
    addToCart: (state, action) => {
      // state means cart [] push product which will come from action.payload
       state.push(action.payload); // Replace state with the new data
    },
    removeFromCart: (state, action) => {
      // filter on the basis of id, excluding the item
      return state.filter((i) => i.id !== action.payload); 
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions; // Export actions
export default cartSlice.reducer; // Export reducer
