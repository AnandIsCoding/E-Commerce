import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { IoSearchOutline } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";
import Carousel from '../components/Carousel';
import axios from 'axios'
import ProductCard from '../components/ProductCard';
import Shimmer from '../components/Shimmer'
import Pagination from '../components/Pagination';
import WhatWeSell from '../components/WhatWeSell';
import FAQs from '../components/FAQs';
import Footer from '../components/Footer';


function Home({animateCategories, setAnimatecategories}) {
  const [page, setPage] = useState(1)
  const [allProducts, setAllProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [prompt, setPrompt] = useState('')
  const getAllProducts = async() =>{
    try {
      const res = await axios.get('https://fakestoreapi.com/products')      
      setAllProducts(res.data)
      setFilteredProducts(res.data)
    } catch (error) {
      console.log('error in fetch all products => ',error)
    }
  }

  const handleInputChange = (event) =>{
    setPrompt(event.target.value)
    const filteredProducts = allProducts.filter((product) =>{
      return product?.title?.toLowerCase().includes(prompt.toLowerCase())
    })
    setFilteredProducts(filteredProducts)
    setPage(1)
  }

   const handleCategory = async(category) =>{
        try {
          const res = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
          setFilteredProducts(res.data)
        } catch (error) {
          console.log('error in category handling ----> ', error)
        }
   }

   useEffect(()=>{
    getAllProducts()
   },[])


  return (
    <div className='w-full h-screen'>
     
     {/* complete navbar searchbar etc */}
     
     <div className='w-full fixed z-[999] bg-white '>
     <Navbar/>
      {/* search bar for all screen and   cart wishlist icon for big screen */}
      <div className='px-3 w-full py-2 flex justify-between '>
        {/* search bar */}
        <div className='flex mt-10 w-full md:w-[55%] md:mx-auto ' >
            <input onChange={(event)=> handleInputChange(event)} type='text' name='searchbar' id='searchbar' placeholder='Search products' className=' w-full  px-5 py-3 md:py-0  border-2 border-[#41187F] rounded-l-xl outline-none text-lg font-bold text-[#41187F] ' />
            <button className='px-4 py-1 md:py-0 text-white rounded-r-md bg-[#41187F]'> <IoSearchOutline size={25}/> </button>
        </div>

        {/* cart */}

        <div className='mt-10 hidden md:flex px-10 gap-5 text-[#41187F]'>
          <button aria-label="Cart">
                  <FaCartPlus size={28} aria-hidden="true" />
                  <p>Cart</p>
                </button>
          
                <button aria-label="Wishlist" >
                  <FaRegHeart size={28} aria-hidden="true"  />
                  <p>Wishlist</p>
                </button>
        </div>


      </div>

      {/* categories options */}
      <div
          onClick={() => setAnimatecategories(false)}
          className='w-full md:px-2 md:justify-center bg-[#41187F] py-2 text-white flex gap-2 overflow-x-scroll relative'
        >
          {["electronics",
            "jewelery",
            "men's clothing",
            "women's clothing"].map((category) => (
            <h1
              key={category}
              onClick={() => handleCategory(category)}
              className={`${
                animateCategories && 'animate-bounce'
              } px-4 py-2 rounded-lg text-xl flex-shrink-0 cursor-pointer hover:bg-white hover:text-black duration-[0.5s]`}
            >
              {category}
            </h1>
          ))}
          <h1 className='hidden md:flex bg-white text-black px-4 py-2 rounded-lg text-xl flex-shrink-0 ml-[10%] gap-2'>
            <MdLocalOffer size={24} className='mt-1 text-[#41187F]' />
            Clearance Up To 20% Off
          </h1>
        </div>
      </div>


      {/* carousel */}
      <div className='pt-[10.8vw]'>
      <Carousel/>
     
      </div>


            {/*display all products  */}
            <div className='w-full flex flex-wrap px-0 md:px-3 py-4 justify-around md:justify-evenly gap-x-0 gap-y-4 md:gap-3 overflow-y-hidden'>
            {
              filteredProducts?.length > 0? filteredProducts.slice(page*5-5,page*5).map((product,index) => (
                 <ProductCard product={product} key={index} />              
                
              )) : (
                
                  Array(10).fill(null).map((_,index) =>{
                    return <Shimmer key={index} />
                  })
                
              )
            }
            </div>


            {/* pagination passing allproducts page and setpage function */}
            <Pagination allProducts={allProducts} page={page} setPage={setPage} />
            
            <WhatWeSell/>

            <FAQs/>

            <Footer/>  
      

      
    </div>
  )
}

export default Home
