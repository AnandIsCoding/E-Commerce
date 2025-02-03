import { createSlice } from "@reduxjs/toolkit";

//initially if available in localstorage than that otherwise empty []

const storedCart = null;

const cartSlice = createSlice({
  name: "cart",
  initialState: storedCart,//empty array for cart
  reducers: {
    addToCart: (state, action) => {
      // state means cart [] push product which will come from action.payload
       return action.payload // Replace state with the new data
      
       //localStorage.setItem('cart', JSON.stringify(state)) // set current state to local storage in cart key name
    },
    removeFromCart: (state, action) => {
      // filter on the basis of id, excluding the item
      const filteredCart = state.filter((i) => i._id !== action.payload); 
      //localStorage.setItem('cart', JSON.stringify(filteredCart)) // set current filtered cart state to local storage in
      return filteredCart //set to state by returning
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions; // Export actions
export default cartSlice.reducer; // Export reducer