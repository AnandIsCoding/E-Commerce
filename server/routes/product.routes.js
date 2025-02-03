import { Router } from "express"
import express from "express"
const productRouter = express.Router()

// Import controllers
import { addProductController, getProductByCategoryController, getProductController, getSingleProductController } from "../controllers/product.controller.js"



//added routes
productRouter.post('/add', addProductController)
productRouter.get('/all', getProductController)

// https://fakestoreapi.com/products/category/${category}

productRouter.get('/category/:category', getProductByCategoryController)
productRouter.get('/product/:_id', getSingleProductController)

export default productRouter