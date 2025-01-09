import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name:'wishlist',
    initialState:[], //empty cart for wishlist
    reducers:{
        addToWishlist : (state,action) => {
            // add to wishlist push action.payload in wishlist array which is initially empty array []
            state.push(action.payload)
        },
        //filter out if action.payload is equal to any element's id, if not equal than return state with those element
        removeFromWishlist : (state, action) =>{
            return state.filter((i)=> i.id !== action.payload)
        }
    }
})

export const {addToWishlist, removeFromWishlist} = wishlistSlice.actions //export actions
export default wishlistSlice.reducer //export reducer