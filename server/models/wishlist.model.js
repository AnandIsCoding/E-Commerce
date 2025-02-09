import mongoose from 'mongoose'

// Define Cart schema with an array of product references
const wishlistSchema = new mongoose.Schema({
    items:[
        {
            _id:{type:mongoose.Schema.Types.ObjectId, ref:"Product", required:true}
        }
    ]
},{timestamps:true})   // Adds createdAt and updatedAt fields

// Create Cart model
const wishlistModel = mongoose.model('Wishlist', wishlistSchema)
export default wishlistModel