import mongoose from 'mongoose'
const cartSchema = new mongoose.Schema({
    items:[
       {
        _id:{type:mongoose.Schema.Types.ObjectId, ref:"Product", required:true}
       }
    ]
},{timestamps:true})

const cartModel = mongoose.model('Cart', cartSchema)

export default cartModel