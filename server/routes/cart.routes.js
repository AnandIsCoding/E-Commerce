import express from 'express';
import { Router } from "express"

const cartRouter = express.Router()

// Import controllers
import { addRemoveCartController, getCartController } from '../controllers/cart.controller.js';


cartRouter.post('/add-remove', addRemoveCartController)
cartRouter.get('/products', getCartController)


export default cartRouter