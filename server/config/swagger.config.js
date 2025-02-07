import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import path from "path";
import { fileURLToPath } from "url";

// Define __dirname manually for ES module support
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "📘 AB E-commerce API",
            version: "1.0.0",
            description: "🔖 API documentation for Almabetter module 4 E-commerce project, demo id: 679e57e9eb55a0a3cecd1e46 ",
        },
        servers: [
            { url: "https://almacommerce.onrender.com" } // Change this after hosting
        ],
    },
    apis: [path.join(__dirname, "../routes/*.routes.js")], // Correct path to route folder
};

const swaggerSpec = swaggerJSDoc(options);

export const swaggerDocs = (app) => {
    app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
    console.log("Swagger documentation available at https://almacommerce.onrender.com/api-docs");
};

export default swaggerDocs