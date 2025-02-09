import { createSlice } from "@reduxjs/toolkit";

//initially []

const storedCart = [];

const cartSlice = createSlice({
  name: "cart",
  initialState: storedCart,//empty array for cart
  reducers: {
    addToCart: (state, action) => {
      // state means cart [] push product which will come from action.payload
       return action.payload // Replace state with the new data     
       
    },
    removeFromCart: (state, action) => {
      // filter on the basis of id, excluding the item
      const filteredCart = state.filter((i) => i._id !== action.payload); 
      return filteredCart //set to state by returning
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions; // Export actions
export default cartSlice.reducer; // Export reducer