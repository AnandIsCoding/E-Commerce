import chalk from "chalk"
import productModel from '../models/product.model.js'

// controller to register add new product
export const addProductController = async(req,res) =>{
    try {
        // fetch title,price, description,category,image,rating from request body
        const {title,price, description,category,image,rating} = req.body
        if(!title || !price || !description || !category || !image || !rating) return res.status(403).json({success:false,message:'All fields are required'})
            // create new product
        const product = await productModel.create({title,price, description,category,image,rating})
        //success response with newly created product object details
        return res.status(201).json({success:true, message:'Product created successfully', product})

    } catch (error) {
         // Error handling, error response
        if (error.name === 'ValidationError') {
            // Extract validation messages
            const messages = Object.values(error.errors).map(err => err.message);
            console.error(chalk.bgRed('Validation Error =>>>'), messages);
            return res.status(400).json({ success: false, message: 'Validation Error', errors: messages });
        }
        console.error(chalk.bgRed('Error in addProductController =>>> ',error))
        return res.status(500).json({success:false,message:'Internal Server Error'})
    }
}

// Controller to get all products from the database 
export const getProductController = async(req,res) =>{
    try{
        const products = await productModel.find();
        res.status(200).json({success:true, message:'products fetched successfully', data:products})
    }catch(error){
         // Error handling, error response
        console.error(chalk.bgRed('Error in getProductsController ===>> ', error))
        res.status(500).json({success:false,message:'Internal Server Error'})
    }
}

//Controller to get all products by category wise
export const getProductByCategoryController = async(req,res) =>{
    try {
        // fetch category from request params
        const {category} = req.params
        const data = await productModel.find({category:category})
        return res.status(200).json({success:true, message:'products fetched successfully for category'+ category, data:data})
    } catch (error) {
         // Error handling, error response
        console.error(chalk.bgRedBright('Error in getProductByCategoryController =>> ',error))
        res.status(500).json({success:false, message:'Internal Server Error'})
    }
}

// Controller to get product by Id , _id will come from params , in frontend component will extract id from url using useParams, and in params sent to api
export const getSingleProductController = async(req,res) =>{
    try {
        // fetch _id from request params
        const {_id} = req.params
        const data = await productModel.findOne({_id:_id})
        return res.status(200).json({success:true, message:'Single product fetched by Id successfully', data:data})
    } catch (error) {
        // Error handling, error response
        console.error(chalk.bgRedBright('Error in getSingleProductController =>> ',error))
        res.status(500).json({success:false, message:'Internal Server Error'})
    }
}