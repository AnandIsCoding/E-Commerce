import { createSlice } from "@reduxjs/toolkit";



//initially if available in localstorage than that otherwise empty []
const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

const wishlistSlice = createSlice({
    name:'wishlist',
    initialState: storedWishlist, //empty cart for wishlist
    reducers:{
        addToWishlist : (state,action) => {
            // add to wishlist push action.payload in wishlist array which is initially empty array []
            state.push(action.payload)
            localStorage.setItem('wishlist', JSON.stringify(state))
        },
        //filter out if action.payload is equal to any element's id, if not equal than return state with those element
        removeFromWishlist : (state, action) =>{
            let filteredWish = state.filter((i)=> i.id !== action.payload)
            localStorage.setItem('wishlist', JSON.stringify(filteredWish))
            return filteredWish
        }
    }
})

export const {addToWishlist, removeFromWishlist} = wishlistSlice.actions //export actions
export default wishlistSlice.reducer //export reducer