import { configureStore, createSlice } from "@reduxjs/toolkit";
import cartReducer from '../redux/slices/cartSlice'
import wishlistReducer from '../redux/slices/wishlistSlice'
// import {cartReducer} from 'cartSlice.js'


const appStore = configureStore({
    reducer:{
        // name of slice : name of reducer
        cart : cartReducer,
        wishlist : wishlistReducer
    }
})

export default appStore