import express from 'express';
import { Router } from "express";

//create cartRouter
const cartRouter = express.Router();

// Import controllers
import { addRemoveCartController, getCartController } from '../controllers/cart.controller.js';

/**
 * @swagger
 * /api/v1/cart/add-remove:
 *   post:
 *     summary: Add or Remove item from cart
 *     description: Toggles a product in the cart (adds if not exists, removes if already exists).
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
 *         description: Product successfully added or removed from cart
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
 *                   example: "Product added to cart successfully" 
 */

cartRouter.post('/add-remove', addRemoveCartController);

/**
 * @swagger
 * /api/v1/cart/products:
 *   get:
 *     summary: Get cart items
 *     description: Fetches all products currently in the user's cart.
 *     responses:
 *       200:
 *         description: Successfully fetched cart products
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
 *                   quantity:
 *                     type: integer
 *                     description: Quantity of product in cart
 */
cartRouter.get('/products', getCartController);

export default cartRouter;
