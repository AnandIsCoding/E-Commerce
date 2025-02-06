import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import chalk from 'chalk'
import path from 'path'
import { fileURLToPath } from 'url';

// Import Swagger documentation configuration file
import swaggerDocs from './config/swagger.config.js'
import connectToDb from './config/database.config.js'
import productRouter from './routes/product.routes.js'
import cartRouter from './routes/cart.routes.js'
import wishlistRouter from './routes/wishlist.routes.js'

dotenv.config()

const app = express()
swaggerDocs(app); // Initialize Swagger



const PORT = process.env.SERVER_PORT || 7000

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin: "http://localhost:5173",
    credentials:true
}))



//routes
app.use('/api/v1/products', productRouter)
app.use('/api/v1/cart', cartRouter)
app.use('/api/v1/wishlist', wishlistRouter)


// Get the directory name in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve React frontend
app.use(express.static(path.resolve(__dirname, '..', 'client', 'dist')));

// This sends all other requests to the React app's index.html (single-page application routing)
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'client', 'dist', 'index.html'));
});


connectToDb().then(()=>{
    console.log(chalk.bgMagenta('Connected to MongoDB Database successfully ✅ ✅ '))
    app.listen(PORT,()=>{
        console.log(chalk.bgGreenBright(`🚀 Server is listening at http://localhost:${PORT}`))
    })
}).catch((error)=>{
    console.error(chalk.bgRed('❌Error in connecting to MongoDB Database :'+ error.message))
    process.exit(1)  // exit the process with an error status code 1
})



// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});