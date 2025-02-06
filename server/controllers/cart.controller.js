import chalk from 'chalk'
import cartModel from '../models/cart.model.js';
import productModel from '../models/product.model.js'; 

export const addRemoveCartController = async(req,res) =>{
    try {
        const {_id} = req.body
        if (! _id) return res.status(400).json({ message: "Product ID is required to add product in cart" });

        let cart = await cartModel.findOne();
        if (!cart) cart = new cartModel({items:[]});

        const exists = cart.items.some(item => item._id.toString() === _id)

        if (exists) {
            cart.items = cart.items.filter(item => item._id.toString() !== _id);
        } else {
            cart.items.push({ _id });
        }

        await cart.save();
        return res.status(200).json({success:true, message: exists ? "Product removed from cart" : "Product added to cart", data:cart });


    } catch (error) {
        console.error(chalk.bgRed('Error in addRemoveCartController ---->> ',error))
        res.status(500).json({success:false,message:'Internal Server Error'})
    }
}




export const getCartController = async (req, res) => {
  try {
    // Find the cart and populate the items array with product details
    const cart = await cartModel.findOne().populate('items._id');  // Populating _id field inside items

    // Check if the cart exists
    if (!cart) {
      return res.status(404).json({ success: false, message: 'Cart not found' });
    }

    // The cart will now contain populated product details in the items array
    res.status(200).json({
      success: true,
      message: 'Cart data fetched successfully',
      data: cart.items,  // Send only the populated items array (products)
    });
    
  } catch (error) {
    console.error(chalk.bgRed('Error in getCartController ---->> ', error));
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};
