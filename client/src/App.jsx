import React, { lazy,Suspense, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { addToCart } from "./redux/slices/cartSlice";
import axios from "axios";
import ErrorBoundary from "./components/ErrorBoundary";


// Lazy loading components for better performance
const Home = lazy(() => import("./pages/Home"));
const MobileOption = lazy(() => import("./components/MobileOption"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Cart = lazy(() => import("./pages/Cart"));
const Wishlist = lazy(()=>import("./pages/Wishlist"))
const Signup = lazy(()=>import('./pages/Signup'))
const ProductDetail = lazy(()=>import('./pages/ProductDetail'))



function App() {
  const dispatch = useDispatch()
  
  // Function to disable the default right-click context menu, only by F12 btn click
  const disableContextMenu = (event) => {
    event.preventDefault();
  };
  
  
  const [animateCategories, setAnimatecategories] = useState(false);
  return (
    <div onContextMenu={disableContextMenu}>
      <Suspense
      // Fallback loader while components are loading
        fallback={
          <div className="absolute top-0 left-0 bottom-0 right-0 bg-black flex justify-center items-center duration-[2s]">
            <img src='/loader.gif' alt="loader" className="" />
          </div>
        }
      >
        <Routes>
          <Route
            path="/"
            element={
              <Home
                animateCategories={animateCategories}
                setAnimatecategories={setAnimatecategories}
              />
            }
          />
          <Route path="/cart" element={<ErrorBoundary><Cart /></ErrorBoundary>} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path='signup' element={<Signup />} />
          <Route path='product/:id' element={<ProductDetail/>}/>


          {/* Route for handling 404 - Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* Mobile option component to handle mobile-related features */}
        <MobileOption setAnimatecategories={setAnimatecategories} />
      </Suspense>
    </div>
  );
}

export default App;
