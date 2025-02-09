// Import required modules
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv' // Dotenv to load environment variables
import chalk from 'chalk'   // Chalk for colored console logs
import path from 'path'
import { fileURLToPath } from 'url';

// Import Swagger documentation configuration file
import swaggerDocs from './config/swagger.config.js'

// Import database connection configuration file
import connectToDb from './config/database.config.js'

// Import routes routers
import productRouter from './routes/product.routes.js'
import cartRouter from './routes/cart.routes.js'
import wishlistRouter from './routes/wishlist.routes.js'

// Load environment variables from .env file
dotenv.config()

const app = express()
swaggerDocs(app); // Initialize Swagger


// SERVER PORT 
const PORT = process.env.SERVER_PORT || 7000

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))



// CORS configuration
const allowedOrigins = ["https://almacommerce.onrender.com", "http://localhost:3000"];
const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
};
app.use(cors(corsOptions));


// frontend deployed url :  https://almacommerce.onrender.com/


// all routes
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