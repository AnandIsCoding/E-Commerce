// Import necessary libraries, components, and icons
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { IoSearchOutline } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import Carousel from "../components/Carousel";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import Shimmer from "../components/Shimmer";
import Pagination from "../components/Pagination";
import WhatWeSell from "../components/WhatWeSell";
import FAQs from "../components/FAQs";
import Footer from "../components/Footer";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { FaBell } from "react-icons/fa";
import { addToCart } from "../redux/slices/cartSlice";
import ErrorBoundary from '../components/ErrorBoundary'
import { addToWishlist } from "../redux/slices/wishlistSlice";

function Home({ animateCategories, setAnimatecategories }) {
   const dispatch = useDispatch()
  // subscribe to wishlist and cart data from Redux store
  const cart = useSelector(state => state.cart)
  const wishlist = useSelector(state => state.wishlist);

  const getAllCartProducts = async() => {
      try {
        const res = await axios.get("http://localhost:3000/api/v1/cart/products");
        dispatch(addToCart(res.data.data))
        
      } catch (error) {
        console.log("error in fetch cart products => ", error);
        toast.error("Something went wrong");
      }
    };


    const getAllWishlistProducts = async() => {
      try {
        const res = await axios.get("http://localhost:3000/api/v1/wishlist/products");
        dispatch(addToWishlist(res.data.data))
        
      } catch (error) {
        console.log("error in fetch wishlist products in home.jsx ======>> ", error);
        toast.error("Something went wrong");
      }
    };

    

    useEffect(()=>{
      getAllCartProducts()
      getAllWishlistProducts()
    },[])

    useEffect(()=>{
      getAllCartProducts()
    },[cart?.length])

    useEffect(()=>{
      getAllWishlistProducts()
    },[wishlist?.length])

  // Initialize states to manage cart and wishlist stored locally
  //const [inlocal, setInlocal] = useState(JSON.parse(localStorage.getItem('cart')))
  //const [inLocalWish, setInlocalWish] = useState(JSON.parse(localStorage.getItem('wishlist')))

 

  // Update local wishlist state whenever the Redux wishlist state changes
  // useEffect(()=>{    
  //   // 
  //   setInlocalWish(JSON.parse(localStorage.getItem('wishlist')))
  // },[wishlist])


  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Fetch all products from API
  const getAllProducts = async() => {
    try {
      const res = await axios.get("http://localhost:3000/api/v1/products/all");
      setAllProducts(res.data.data);
      setFilteredProducts(res.data.data);
    } catch (error) {
      console.log("error in fetch all products => ", error);
      toast.error("Something went wrong");
    }
  };
  

  // filter on the basis on input value, in included in title or category
  const handleInputChange = (event) => {
    const inputValue = event.target.value.toLowerCase();
    const filtered = allProducts.filter((product) => {
      return (
        product?.title?.toLowerCase().includes(inputValue) ||
        product?.category?.toLowerCase().includes(inputValue)
      );
    });
    setFilteredProducts(filtered); // Update filtered list
    setPage(1); // Reset pagination
  };

  // Fetch products by category
  //http://localhost:3000/api/v1/products/category/jewelery
  const handleCategory = async (category) => {
    try {
      const res = await axios.get(
        `http://localhost:3000/api/v1/products/category/${category}`
      );
      //data.data 
      setFilteredProducts(res.data.data);
    } catch (error) {
      console.log("error in category handling ----> ", error);
    }
  };

  // Load products  fetch 
  useEffect(() => {
    getAllProducts()
  }, []);

  return (
    <div className="w-full h-screen">
      {/* complete navbar searchbar etc */}

      <div className="w-full fixed z-[999] bg-white ">
        <Navbar />
        {/* search bar for all screen and   cart wishlist icon for big screen */}
        <div className="pl-0 pr-1 md:pr-3 w-full py-2 flex justify-between relative ">
          <div className="w-[10%] md:w-[6%] h-full  bg-black absolute top-5 md:top-4">
            <img
              src="/logo.png"
              alt="logo"
              className="w-full h-full object-cover"
            />
          </div>
          {/* search bar */}

          <div className="flex mt-10 w-[90%] ml-10 md:w-[55%] md:mx-auto ">
            <input
              onChange={(event) => handleInputChange(event)}
              type="text"
              name="searchbar"
              id="searchbar"
              placeholder="Search products"
              className=" w-full  px-5 py-3 md:py-0  border-2 border-[#41187F] rounded-l-xl outline-none text-lg font-bold text-[#41187F] "
            />
            <button className="px-4 py-1 md:py-0 text-white rounded-r-md bg-[#41187F]">
              {" "}
              <IoSearchOutline size={25} />{" "}
            </button>
          </div>

          {/* cart */}

          <div className="mt-10 hidden md:flex px-10 gap-5 text-[#41187F] relative">
            <button aria-label="Cart" onClick={() => navigate("/cart")}>
              <FaCartPlus size={28} aria-hidden="true" />
              <p>Cart </p>
              <span className="text-xl font-extrabold absolute bottom-10 bg-violet-800 text-white right-24  px-3 py-0 rounded-full">
                {cart?.length}
              </span>
            </button>

            <button
              aria-label="Wishlist relative"
              onClick={() => navigate("/wishlist")}
            >
              <FaRegHeart size={28} aria-hidden="true" />
              <p>Wishlist</p>
              <span className="text-xl font-extrabold absolute bottom-10 bg-violet-800 text-white right-14  px-3 py-0 rounded-full">
                {wishlist?.length}
              </span>
            </button>
          </div>
        </div>

        {/* categories options */}
        <div
          onClick={() => setAnimatecategories(false)}
          className="w-full md:px-2 md:justify-center bg-[#41187F] py-2 text-white flex gap-2 overflow-x-scroll relative"
        >
          {[
            "electronics",
            "jewelery",
            "mens clothing",
            "womens clothing",
            "others"
          ].map((category) => (
            <h1
              key={category}
              onClick={() => handleCategory(category)}
              className={`${
                animateCategories && "animate-bounce"
              } px-4 py-2 rounded-lg text-xl flex-shrink-0 cursor-pointer hover:bg-white hover:text-black duration-[0.5s]`}
            >
              {category}
            </h1>
          ))}
          <h1 className="flex bg-white text-black px-4 py-2 rounded-lg text-xl flex-shrink-0 ml-[10%] gap-2">
            <FaBell size={24} className="mt-1 text-[#41187F]" />
            Clearance Up To 20% Off
          </h1>
        </div>
      </div>

      {/* carousel */}
      <div className="pt-[10.8vw] ">
        <Carousel />
      </div>

      {/*display all products, if not product  matches than display no products found , else show shimmer cards */}
      <div className="w-full flex flex-wrap px-0 md:px-3 py-4 justify-around md:justify-evenly gap-x-0 gap-y-4 md:gap-3 overflow-y-hidden">
        {filteredProducts?.length > 0 ? (
          filteredProducts
            .slice(page * 5 - 5, page * 5)
            .map((product, index) => (
              <ErrorBoundary key={index}>
              <ProductCard product={product} key={product._id} />
              </ErrorBoundary>
            ))
        ) : allProducts.length > 0 ? (
          <h1 className="w-full text-center text-lg font-bold text-[#41187F]">
            No products found.
          </h1>
        ) : (
          Array(10)
            .fill(null)
            .map((_, index) => <Shimmer key={index} />)
        )}
      </div>

      {/* pagination passing allproducts page and setpage function, passing filteredProducts */}
      <Pagination
        allProducts={filteredProducts}
        page={page}
        setPage={setPage}
      />

      <WhatWeSell />

      <FAQs />

      <Footer />
    </div>
  );
}

export default Home;