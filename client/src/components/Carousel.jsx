import React, { useState, useEffect } from 'react'
import { FaAnglesLeft } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";
import data from '../utils/CarouselData.json'
function Carousel() {
  const [index, setIndex] = useState(0)
  const handleIncrement = () =>{
    setIndex((prev => prev >= data.length-1 ? 0 : prev+1))
  }
  const handleDecrement = () =>{
    setIndex((prev => prev <= 0 ? data.length-1 : prev-1))
  }
  useEffect(() => {
    const interval = setInterval(() => {
      handleIncrement();
    }, 2000);  
    // Cleanup the interval on unmount or before re-creating
    return () => clearInterval(interval);
  }, [handleIncrement]);
  
  return (
    <div className='w-full h-[60vh] md:h-[64vh] overflow-hidden  bg-[#9183eb] relative'>
      <img src={data[index].url} alt={`carousel_image_${index}`} className='w-full h-full object-top' />
      <button onClick={()=>handleDecrement()} className='absolute top-1/2 left-1 text-white bg-[#41187F] px-4 py-2 rounded-md'> <FaAnglesLeft size={32} className='text-white' id='next' /> </button>
      <button onClick={()=>handleIncrement()} className='absolute top-1/2 right-1 text-white bg-[#41187F] px-4 py-2 rounded-md'><FaAnglesRight size={32} className='text-white'/></button>
    </div>
  )
}

export default Carousel
