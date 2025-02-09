// Import required modules
import swaggerJSDoc from "swagger-jsdoc"; // Swagger for API documentation
import swaggerUI from "swagger-ui-express"; // Swagger UI for API visualization
import path from "path"; // Path module for handling file paths
import { fileURLToPath } from "url"; // ES module compatibility for __dirname

// Define __dirname manually for ES module support
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Swagger configuration options
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "📘 AB E-commerce API",
            version: "1.0.0",
            description: "🔖 API documentation for Almabetter module 4 E-commerce project, demo id: 679e57e9eb55a0a3cecd1e46 ",
        },
        servers: [
            { url: "https://almacommerce.onrender.com" } // // Base URL for the API (Update after deployment)
        ],
    },
    apis: [path.join(__dirname, "../routes/*.routes.js")], // Correct path to route folder
};

// Generate Swagger documentation specification
const swaggerSpec = swaggerJSDoc(options);

export const swaggerDocs = (app) => {
    app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
    console.log("Swagger documentation available at https://almacommerce.onrender.com/api-docs");
};

// Export the function to integrate it with the main server file
export default swaggerDocs