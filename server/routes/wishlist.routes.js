import express from "express";
const wishlistRouter = express.Router();

// Import controllers
import { addToWishlistController, getWishlistController } from '../controllers/wishlist.controller.js';

/**
 * @swagger
 * /api/v1/wishlist/add-remove:
 *   post:
 *     summary: Add or Remove item from wishlist
 *     description: Adds or removes a product from the wishlist.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productId:
 *                 type: string
 *                 description: The ID of the product
 *     responses:
 *       200:
 *         description: Product added/removed from wishlist successfully
 */
wishlistRouter.post('/add-remove', addToWishlistController);

/**
 * @swagger
 * /api/v1/wishlist/products:
 *   get:
 *     summary: Get all products in wishlist
 *     description: Retrieves all products currently in the user's wishlist.
 *     responses:
 *       200:
 *         description: Successfully fetched wishlist products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: Product ID
 *                   name:
 *                     type: string
 *                     description: Product name
 *                   price:
 *                     type: number
 *                     description: Product price
 */
wishlistRouter.get('/products', getWishlistController);

export default wishlistRouter;
