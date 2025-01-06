import React from 'react'
import Navbar from '../components/Navbar'
import { IoSearchOutline } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";
import Carousel from '../components/Carousel';


function Home() {
  return (
    <div className='w-full h-screen'>
     
     {/* complete navbar searchbar etc */}
     
     <div className='w-full fixed z-[999] bg-white '>
     <Navbar/>
      {/* search bar for all screen and   cart wishlist icon for big screen */}
      <div className='px-3 w-full py-2 flex justify-between '>
        {/* search bar */}
        <div className='flex mt-10 w-full md:w-[55%] md:mx-auto ' >
            <input type='text' name='searchbar' id='searchbar' placeholder='Search products' className=' w-full  px-5 py-3 md:py-0  border-2 border-[#41187F] rounded-l-xl outline-none text-lg font-bold text-[#41187F] ' />
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
      <div className='w-full  md:px-2 md:justify-center bg-[#41187F]  py-2   text-white flex gap-2 overflow-x-scroll relative '>
      <h1 className=' px-4 py-2 rounded-lg text-xl flex-shrink-0 cursor-pointer hover:bg-white hover:text-black duration-[0.5s]'>All</h1>
        <h1 className=' px-4 py-2 rounded-lg text-xl flex-shrink-0 cursor-pointer hover:bg-white hover:text-black duration-[0.5s]'>Electronics</h1>
        <h1 className=' px-4 py-2 rounded-lg text-xl flex-shrink-0 cursor-pointer hover:bg-white hover:text-black duration-[0.5s]'>Mens</h1>
        <h1 className=' px-4 py-2 rounded-lg text-xl flex-shrink-0 cursor-pointer hover:bg-white hover:text-black duration-[0.5s]'>Womens</h1>
        <h1 className=' px-4 py-2 rounded-lg text-xl flex-shrink-0 cursor-pointer hover:bg-white hover:text-black duration-[0.5s]'>Jewellery</h1>

        <h1 className='hidden md:flex bg-white text-black px-4 py-2 rounded-lg text-xl flex-shrink-0 ml-[10%] gap-2 '> <MdLocalOffer size={24} className='mt-1 text-[#41187F]' /> Clearance Up To 20% Off</h1>
      </div>

     </div>

      {/* carousel */}
      <div className='pt-[10.8vw]'>
      <Carousel/>
     
      </div>


      <h1>hii</h1>
      <h1>hii</h1>
      <h1>hii</h1>
      <h1>hii</h1>
      <h1>hii</h1>
      <h1>hii</h1>
      <h1>hii</h1>
      <h1>hii</h1>
      <h1>hii</h1>
      <h1>hii</h1>
      <h1>hii</h1>
      <h1>hii</h1>
      <h1>hii</h1>
      <h1>hii</h1>
      <h1>hii</h1>
      <h1>hii</h1>
      <h1>hii</h1>
      <h1>hii</h1>
      <h1>hii</h1>
      <h1>hii</h1>
      <h1>hii</h1>
      <h1>hii</h1>
      <h1>hii</h1>
      <h1>hii</h1>
      <h1>hii</h1>
      <h1>hii</h1>
      <h1>hii</h1>
      <h1>hii</h1>
      <h1>hii</h1>
      <h1>hii</h1>
      <h1>hii</h1>
      <h1>hii</h1>
      <h1>hii</h1>
      <h1>hii</h1>
      <h1>hii</h1>
      <h1>hii</h1>
      <h1>hii</h1>
      <h1>hii</h1>
      <h1>hii</h1>
      <h1>hii</h1>
      <h1>hii</h1>
      <h1>hii</h1>
     
      

      
      

      
    </div>
  )
}

export default Home
