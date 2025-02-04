import chalk from "chalk"

export const addToWishlistController = async(req,res) =>{
    try {
        const {_id} = req.body
        if(!_id) return res.status(403).json({success:false, message:"id is required to add product in wishlist"})
    } catch (error) {
        console.log(chalk.bgRedBright('Error in addToWishlistController ------>>> ', error))
        return res.status(500).json({success:false, message:'Internal Server Error'})
    }
}