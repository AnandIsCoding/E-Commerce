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
 *               title:
 *                 type: string
 *                 description: Title of the product (5-50 characters)
 *                 example: "Smartphone X"
 *               price:
 *                 type: number
 *                 description: Price of the product (Minimum 5 rupees)
 *                 example: 9999
 *               description:
 *                 type: string
 *                 description: Description of the product (Min 5 characters)
 *                 example: "A high-quality smartphone with excellent features."
 *               category:
 *                 type: string
 *                 description: Category of the product
 *                 enum: ["electronics", "jewelery", "mens clothing", "womens clothing", "others"]
 *                 example: "electronics"
 *               image:
 *                 type: string
 *                 description: URL of the product image
 *                 example: "https://example.com/product.jpg"
 *               rating:
 *                 type: object
 *                 properties:
 *                   rate:
 *                     type: number
 *                     minimum: 1
 *                     maximum: 5
 *                     description: Product rating (1 to 5)
 *                     example: 4.5
 *                   count:
 *                     type: number
 *                     description: Number of reviews
 *                     example: 120
 *     responses:
 *       201:
 *         description: Product added successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Product added successfully"
 *                 product:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: "60d21b4667d0d8992e610c85"
 *                     title:
 *                       type: string
 *                       example: "Smartphone X"
 *                     price:
 *                       type: number
 *                       example: 9999
 *                     description:
 *                       type: string
 *                       example: "A high-quality smartphone with excellent features."
 *                     category:
 *                       type: string
 *                       example: "electronics"
 *                     image:
 *                       type: string
 *                       example: "https://example.com/product.jpg"
 *                     rating:
 *                       type: object
 *                       properties:
 *                         rate:
 *                           type: number
 *                           example: 4.5
 *                         count:
 *                           type: number
 *                           example: 120
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
