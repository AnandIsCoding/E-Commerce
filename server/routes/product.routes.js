import { Router } from "express"
import express from "express"
const productRouter = express.Router()

// Import controllers
import { addProductController, getProductController } from "../controllers/product.controller.js"



//added routes
productRouter.post('/add', addProductController)
productRouter.get('/all', getProductController)


export default productRouter