import React from 'react'
import { FaAnglesLeft } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";
import data from '../utils/CarouselData.json'
console.log(data)

function Carousel() {
  return (
    <div className='w-full h-[40vh] md:h-[50vh] overflow-hidden  bg-green-800 relative'>
      <img src={data[0].url} alt="carousel_image" className='w-full h-full md:object-cover ' />
      <button className='absolute top-1/2 left-1 text-white bg-[#41187F] px-4 py-2 rounded-md'> <FaAnglesLeft size={32} className='text-white'/> </button>
      <button className='absolute top-1/2 right-1 text-white bg-[#41187F] px-4 py-2 rounded-md'><FaAnglesRight size={32} className='text-white'/></button>
    </div>
  )
}

export default Carousel
