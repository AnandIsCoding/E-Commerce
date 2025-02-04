import chalk from "chalk"
import wishlistModel from "../models/wishlist.model.js"

export const addToWishlistController = async(req,res) =>{
    try {
        const {_id} = req.body
        if(!_id) return res.status(403).json({success:false, message:"id is required to add product in wishlist"})

        let wishlist = await wishlistModel.findOne()
        if(!wishlist) wishlist = new wishlistModel({items:[]})

            const exists = wishlist.items.some(item => item._id.toString() === _id)

            if (exists) {
                wishlist.items = wishlist.items.filter(item => item._id.toString() !== _id);
            } else {
                wishlist.items.push({ _id });
            }
    
            await wishlist.save();
            return res.status(200).json({success:true, message: exists ? "Product removed from wishlist" : "Product added to wishlist", data:wishlist });
    
    
    } catch (error) {
        console.log(chalk.bgRedBright('Error in addToWishlistController ------>>> ', error))
        return res.status(500).json({success:false, message:'Internal Server Error'})
    }
}




export const getWishlistController = async (req, res) => {
    try {
      // Find the wishlist and populate the items array with product details
      const wishlist = await wishlistModel.findOne().populate('items._id');  // Populating _id field inside items
  
      // Check if the wishlist exists
      if (!wishlist) {
        return res.status(404).json({ success: false, message: 'Wishlist not found' });
      }
  
      // The wishlist will now contain populated product details in the items array
      return res.status(200).json({
        success: true,
        message: 'Wishlist data fetched successfully',
        data: wishlist.items,  // Send only the populated items array (products)
      });
      
    } catch (error) {
      console.log(chalk.bgRed('Error in getWishlistController ---->> ', error));
      return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  };