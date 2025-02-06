import express from "express";
const wishlistRouter = express.Router();

// Import controllers
import { addToWishlistController, getWishlistController } from '../controllers/wishlist.controller.js';

/**
 * @swagger
 * /api/v1/wishlist/add-remove:
 *   post:
 *     summary: Add or Remove item from wishlist
 *     description: Toggles a product in the wishlist (adds if not exists, removes if already exists).
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               _id:
 *                 type: string
 *                 description: The ID of the product to be added or removed
 *                 example: "60d21b4667d0d8992e610c85"
 *     responses:
 *       200:
 *         description: Product successfully added or removed from wishlist
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
 *                   example: "Product added to wishlist successfully" 
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
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 wishlist:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         description: Wishlist item ID
 *                         example: "60d21b4667d0d8992e610c85"
 *                       product:
 *                         type: object
 *                         properties:
 *                           _id:
 *                             type: string
 *                             description: Product ID
 *                             example: "60d21b4667d0d8992e610c85"
 *                           title:
 *                             type: string
 *                             description: Product title
 *                             example: "Wireless Headphones"
 *                           price:
 *                             type: number
 *                             description: Product price
 *                             example: 1499
 *                           image:
 *                             type: string
 *                             description: Product image URL
 *                             example: "https://example.com/product.jpg"
 */

wishlistRouter.get('/products', getWishlistController);

export default wishlistRouter;




//  ✅ Consistent response structure: Matches your wishlistSchema for better API documentation.
//  ✅ Detailed response example: Helps frontend developers understand what to expect.
//  ✅ Improved descriptions: Provides better clarity on how each endpoint functions.
