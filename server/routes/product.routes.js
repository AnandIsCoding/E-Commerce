import express from "express";
const productRouter = express.Router();

// Import controllers
import { 
    addProductController, 
    getProductByCategoryController, 
    getProductController, 
    getSingleProductController 
} from "../controllers/product.controller.js";

/**
 * @swagger
 * /api/v1/products/add:
 *   post:
 *     summary: Add a new product
 *     description: Adds a new product to the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the product
 *               price:
 *                 type: number
 *                 description: Price of the product
 *               category:
 *                 type: string
 *                 description: Category of the product
 *     responses:
 *       201:
 *         description: Product added successfully
 */
productRouter.post('/add', addProductController);

/**
 * @swagger
 * /api/v1/products/all:
 *   get:
 *     summary: Get all products
 *     description: Retrieves all products from the database.
 *     responses:
 *       200:
 *         description: Successfully fetched all products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: Product ID
 *                   name:
 *                     type: string
 *                     description: Product name
 *                   price:
 *                     type: number
 *                     description: Product price
 *                   category:
 *                     type: string
 *                     description: Product category
 */
productRouter.get('/all', getProductController);

/**
 * @swagger
 * /api/v1/products/category/{category}:
 *   get:
 *     summary: Get products by category
 *     description: Fetches all products within a specific category.
 *     parameters:
 *       - in: path
 *         name: category
 *         required: true
 *         schema:
 *           type: string
 *         description: Category name
 *     responses:
 *       200:
 *         description: Successfully fetched products by category
 */
productRouter.get('/category/:category', getProductByCategoryController);

/**
 * @swagger
 * /api/v1/products/product/{_id}:
 *   get:
 *     summary: Get a single product by ID
 *     description: Retrieves a single product using its unique ID.
 *     parameters:
 *       - in: path
 *         name: _id
 *         required: true
 *         schema:
 *           type: string
 *         description: Product ID
 *     responses:
 *       200:
 *         description: Successfully fetched the product
 */
productRouter.get('/product/:_id', getSingleProductController);

export default productRouter;
