import mongoose from 'mongoose';

// Define Product schema 
const productSchema = new mongoose.Schema({
   title: {
      type: String,
      required: [true, "Title is required for every product"],
      minlength: [5, "Title must be at least 5 characters long"],
      maxlength: [100, "Title must be less than 50 characters"]
   },
   price: {
      type: Number,
      required: [true, 'Price is required for all products'],
      min: [5, "No product price should be less than 5 rupees"]
   },
   description: {
      type: String,
      required: [true, 'Description is required'],
      minlength: [5, "Description must be at least 5 characters long"]
   },
   category: {
      type: String,
      required: [true, 'Category is required for every product'],
      enum: {
         values: ['electronics', 'jewelery', 'mens clothing', 'womens clothing', 'others'],
         message: 'Category must be either electronics, jewelery, mens clothing, womens clothing, or others'
      }
   },
   image: {
      type: String,
      required: [true, 'Product image is required']
   },
   rating: {
      rate: {
         type: Number,
         min: 1,
         max: 5,
         required: true
      },
      count: {
         type: Number,
         default: 0
      }
   }
});

// Create Product model
const productModel = mongoose.model('Product', productSchema);
export default productModel;
