import express from 'express';
import { Router } from "express";

const cartRouter = express.Router();

// Import controllers
import { addRemoveCartController, getCartController } from '../controllers/cart.controller.js';

/**
 * @swagger
 * /api/v1/cart/add-remove:
 *   post:
 *     summary: Add or Remove item from cart
 *     description: Toggles a product in the cart (add if not exists, remove if already exists).
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
 *         description: Product added/removed from cart successfully
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
