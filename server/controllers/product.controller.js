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
            console.error(chalk.bgRed('Validation Error =>>>'), messages);
            return res.status(400).json({ success: false, message: 'Validation Error', errors: messages });
        }
        console.error(chalk.bgRed('Error in addProductController =>>> ',error))
        return res.status(500).json({success:false,message:'Internal Server Error'})
    }
}


export const getProductController = async(req,res) =>{
    try{
        const products = await productModel.find();
        res.status(200).json({success:true, message:'products fetched successfully', data:products})
    }catch(error){
        console.error(chalk.bgRed('Error in getProductsController ===>> ', error))
        res.status(500).json({success:false,message:'Internal Server Error'})
    }
}


export const getProductByCategoryController = async(req,res) =>{
    try {
        const {category} = req.params
        const data = await productModel.find({category:category})
        return res.status(200).json({success:true, message:'products fetched successfully for category'+ category, data:data})
    } catch (error) {
        console.error(chalk.bgRedBright('Error in getProductByCategoryController =>> ',error))
        res.status(500).json({success:false, message:'Internal Server Error'})
    }
}

export const getSingleProductController = async(req,res) =>{
    try {
        const {_id} = req.params
        const data = await productModel.findOne({_id:_id})
        return res.status(200).json({success:true, message:'Signle product fetched successfully', data:data})
    } catch (error) {
        console.error(chalk.bgRedBright('Error in getSingleProductController =>> ',error))
        res.status(500).json({success:false, message:'Internal Server Error'})
    }
}