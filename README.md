# 🛍️ E-Commerce Website

An interactive and responsive e-commerce platform built with React.js and a backend powered by Node.js, Express, and MongoDB. This project was initially a frontend-only assignment from AlmaBetter, but now includes a complete backend for managing products, cart, and wishlist functionality.

---

## 🚀 Live Demo

You can view the live version of this project here:  
[🛒 E-Commerce Website - Live Demo](https://almacommerce.onrender.com/)


Frontend Devlopers can view api documentation here :  
[🛒 Swagger APIs Documentation](https://almacommerce.onrender.com/api-docs/)

You can view the video demonstration of this project:  
[🛒 E-Commerce Website - Video Demo](https://www.loom.com/share/73a24433c1e74dc7a4a4f51db48d20d0?sid=46c6f553-8f59-4fbe-bb68-8cc041ba2d04/)

You can view the Google Docs file, which includes a summary, useful links, etc.:  
[🛒 E-Commerce Website - Docs File](https://docs.google.com/document/d/1xDJTogeUi8fS2hVWYiwBRJoDAxBqJnL2/edit?usp=sharing&ouid=117885336231223452133&rtpof=true&sd=true)



---

## 📑 Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [API Endpoints](#api-endpoints)
6. [Usage](#usage)
7. [Screenshots](#screenshots)
8. [Folder Structure](#folder-structure)
9. [Testing](#testing)
10. [Challenges Faced](#challenges-faced)
11. [Future Enhancements](#future-enhancements)
12. [Acknowledgments](#acknowledgments)

---

## 📝 Overview

This e-commerce platform allows users to browse products, add them to their wishlist or cart, and manage items dynamically. The backend manages products, cart, and wishlist, but authentication and authorization are **not** implemented yet.

---

## ✨ Features

- 🛒 Add and remove items to/from the **cart**.
- 💖 Add and remove items to/from the **wishlist**.
- 🔍 Browse products by **categories**.
- 📱 Fully **responsive** design for mobile, tablet, and desktop views.
- ⭐ View product **ratings** with interactive icons.
- 📦 Manage **products** dynamically (admin feature).
- 🔗 **Social sharing** options for products.

### 🎨 Design Features

- Fully responsive **UI** for all screen sizes.
- **Tailwind CSS** for modern and customizable styling.
- Disabled right-click default browser behavior to prevent **inspect element**.

---

## 🛠️ Technologies Used

### **Frontend:**
- **React.js** - Frontend framework.
- **Redux Toolkit** - State management.
- **Tailwind CSS** - Styling.
- **React Icons** - Icons.
- **React Hot Toast** - Notifications.
- **React Router Dom** - Routing.

### **Backend:**
- **Node.js** - Runtime environment.
- **Express.js** - Backend framework.
- **MongoDB** - Database.
- **Mongoose** - ODM for MongoDB.
- **CORS** - Handling cross-origin requests.
- **dotenv** - Environment variables.
- **Swagger** - API documentation.
- **Nodemon** - Live server reload.

---

## ⚙️ Installation  

### **Frontend Setup**  

1. **Clone the repository**  
   ```bash
   git clone https://github.com/AnandIsCoding/E-Commerce


---

   
2. Navigate to the client directory:
   ```bash
   cd ecommerce-frontend
1. Install dependencies::
   ```bash
   npm install   
2. Start the development server:
   ```bash
   npm start
3. Open your browser and navigate to:
   ```bash
   http://localhost:5173
---
### **Backend Setup**  

1. **Navigate to the server directory**  
   ```bash
    cd ecommerce-backend

2. Install dependencies:
   ```bash
   npm install   
3. Create a .env file in the root and add the following variables
   ```bash
   NODE_ENV=development
   PORT=8000
   MONGO_URI=mongodb://127.0.0.1:27017/ecommerce

4. Start the backend server
   ```bash
   npm run dev

4. The API will be running at
   ```bash
   http://localhost:3000 
---


## Screenshots

### Home Page
![Home Page](/client/public/home1.png)

### FAQ Footer
![Footer](/client/public/home2.png)

### Mobile view
![Home Page](/client/public/mobileSS.png)

### Cart Page
![Cart Page](/client/public/cartSS.png)


### Wishlist Page
![Wishlist Page](/client/public/wishlistSS.png)


### Signup/Login Page
![Signup Page](/client/public/Signup.png)



### 📌 API Endpoints

| Method | Endpoint                                  | Description                         |
|--------|------------------------------------------|-------------------------------------|
| POST   | `/api/v1/products/add`                  | Add a new product                  |
| GET    | `/api/v1/products/category/{category}`  | Get products by category           |
| GET    | `/api/v1/products/product/{_id}`        | Get product details by ID          |
| POST   | `/api/v1/cart/add-remove`               | Add or remove an item from the cart |
| GET    | `/api/v1/cart/products`                 | Retrieve all cart products         |
| POST   | `/api/v1/wishlist/add-remove`           | Add or remove an item from wishlist |
| GET    | `/api/v1/wishlist/products`             | Retrieve all wishlist products     |


**⚠️ Note: Authentication and authorization are not implemented yet.**


## Testing 
 
 ### 2. **E2E Testing and unit testing implemented**

### 1. **Tools and Libraries Used**
- **Vitest**: Blazing fast unit testing framework.
- **React Testing Library**: For testing React components.


### **        Installation**
Install the necessary dependencies for testing :

bash
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom msw



## Challenges Faced
- **State Management**: implementing Redux Toolkit effectively.
- **Using own api after localstorage**: using own api after utilizing localstorage caused some problems in frontend api integration


## Learnings and Key Takeaways
- Improved proficiency in React.js and state management using Redux Toolkit.
- Learned to structure projects and write modular, reusable code.


## Contributions
This project was developed individually as part of an AlmaBetter assignment. Special thanks to the AlmaBetter team for their guidance.



## 🔮 Future Enhancements
🔐 Implement authentication & authorization.
💳 Add payment gateway integration.
📚 Improve product filtering & sorting.
📦 Implement order management and user profiles..



## 🙌 Acknowledgments
- Special thanks to **AlmaBetter** for providing the opportunity to work on this project.
- Inspired by various e-commerce platforms like Amazon and Flipkart.





## 👤Author
  **Anand Jha🌿🫰**




