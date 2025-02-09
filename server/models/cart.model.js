import mongoose from 'mongoose'

// Define Cart schema with an array of product references
const cartSchema = new mongoose.Schema({
    items:[
       {
        _id:{type:mongoose.Schema.Types.ObjectId, ref:"Product", required:true}
       }
    ]
},{timestamps:true}) // Adds createdAt and updatedAt fields

// Create Cart model
const cartModel = mongoose.model('Cart', cartSchema)

export default cartModel