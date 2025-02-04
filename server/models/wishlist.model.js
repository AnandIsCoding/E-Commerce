import mongoose from 'mongoose'
const wishlistSchema = new mongoose.Schema({
    items:[
        {
            _id:{type:mongoose.Schema.Types.ObjectId, ref:"Product", required:true}
        }
    ]
},{timestamps:true})

const wishlistModel = mongoose.model('Wishlist', wishlistSchema)
export default wishlistModel