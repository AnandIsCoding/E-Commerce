import chalk from "chalk"
import productModel from '../models/product.model.js'

export const addProductController = async(req,res) =>{
    try {
        const {title,price, description,category,image,rating} = req.body
        if(!title || !price || !description || !category || !image || !rating) return res.status(403).json({success:false,message:'All fields are required'})
        const product = await productModel.create({title,price, description,category,image,rating})

        return res.status(201).json({success:true, message:'Product created successfully', product})

    } catch (error) {
        if (error.name === 'ValidationError') {
            // Extract validation messages
            const messages = Object.values(error.errors).map(err => err.message);
            console.log(chalk.bgRed('Validation Error =>>>'), messages);
            return res.status(400).json({ success: false, message: 'Validation Error', errors: messages });
        }
        console.log(chalk.bgRed('Error in addProductController =>>> ',error))
        return res.status(500).json({success:false,message:'Internal Server Error'})
    }
}


export const getProductController = async(req,res) =>{
    try{
        const products = await productModel.find();
        res.status(200).json({success:true, message:'products fetched successfully', data:products})
    }catch(error){
        console.log(chalk.bgRed('Error in getProductsController ===>> ', error))
        res.status(500).json({success:false,message:'Internal Server Error'})
    }
}

