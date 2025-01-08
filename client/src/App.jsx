import React, { lazy,Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";
// lazy loading for better performance
const Home = lazy(() => import("./pages/Home"));
const MobileOption = lazy(() => import("./components/MobileOption"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Cart = lazy(() => import("./pages/Cart"));
const Wishlist = lazy(()=>import("./pages/Wishlist"))
const Signup = lazy(()=>import('./pages/Signup'))
const ProductDetail = lazy(()=>import('./pages/ProductDetail'))

function App() {
  // Function to disable the default context menu
  const disableContextMenu = (event) => {
    event.preventDefault();
  };
  const [animateCategories, setAnimatecategories] = useState(false);
  return (
    <div onContextMenu={disableContextMenu}>
      <Suspense
      // on basic loading will show loader
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
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path='signup' element={<Signup />} />
          <Route path='product/:id' element={<ProductDetail/>}/>

          <Route path="*" element={<NotFound />} />
        </Routes>
        <MobileOption setAnimatecategories={setAnimatecategories} />
      </Suspense>
    </div>
  );
}

export default App;
