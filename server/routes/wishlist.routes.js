import express from 'express';
import { Router } from "express"


const wishlistRouter = express.Router()

// Import controllers
import { addToWishlistController, getWishlistController } from '../controllers/wishlist.controller.js';


wishlistRouter.post('/add-remove', addToWishlistController)
wishlistRouter.get('/products', getWishlistController)


export default wishlistRouter