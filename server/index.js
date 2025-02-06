import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import chalk from 'chalk'

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

connectToDb().then(()=>{
    console.log(chalk.bgMagenta('Connected to MongoDB Database successfully ✅ ✅ '))
    app.listen(PORT,()=>{
        console.log(chalk.bgGreenBright(`🚀 Server is listening at http://localhost:${PORT}`))
    })
}).catch((error)=>{
    console.log(chalk.bgRed('❌Error in connecting to MongoDB Database :'+ error.message))
    process.exit(1)  // exit the process with an error status code 1
})