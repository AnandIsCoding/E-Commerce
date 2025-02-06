import mongoose from 'mongoose'
import chalk from 'chalk';
import dotenv from 'dotenv'

dotenv.config()

const DATABASE_URI = process.env.DATABASE_URI;

const connectToDb = async() =>{
    try {
        await mongoose.connect(DATABASE_URI,{serverSelectionTimeoutMS: 60000})
    } catch (error) {
        console.log(chalk.bgMagenta('Error in monnecting to database cluster file --> config/database.config.js ==>>  : ' + error.message))
    }
}

export default connectToDb;
