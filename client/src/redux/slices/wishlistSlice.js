import { createSlice } from "@reduxjs/toolkit";



//initially empty array
const storedWishlist = []

const wishlistSlice = createSlice({
    name:'wishlist',
    initialState: storedWishlist, //empty cart for wishlist
    reducers:{
        addToWishlist : (state,action) => {
            // add to wishlist push action.payload in wishlist array which is initially empty array []
            return action.payload
        },
        //filter out if action.payload is equal to any element's id, if not equal than return state with those element
        removeFromWishlist : (state, action) =>{
            let filteredWishlist = state.filter((i)=> i.id !== action.payload)
            return filteredWishlist
        }
    }
})

export const {addToWishlist, removeFromWishlist} = wishlistSlice.actions //export actions
export default wishlistSlice.reducer //export reducer