import React, { useState, useEffect } from 'react'
import { FaAnglesLeft } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";
import data from '../utils/CarouselData.json'  // a json file of array of objects, each object contain image and it's index


// Carousel component to display an auto changing image carousel with navigation next >  prev <  buttons
function Carousel() {
  const [index, setIndex] = useState(0)  // State to keep track of the current image index

  // Increment index to show the next image, wrap around if at the end
  const handleIncrement = () =>{
    setIndex((prev => prev >= data.length-1 ? 0 : prev+1))
  }

   //decrement
  const handleDecrement = () =>{
    setIndex((prev => prev <= 0 ? data.length-1 : prev-1))
  }

  // Automatically increment the index every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleIncrement();
    }, 2000);  
    // Cleanup the interval on unmount or before re-creating
    return () => clearInterval(interval);
  }, [handleIncrement]);
  
  return (
    <div className='w-full h-[60vh] md:h-[64vh] overflow-hidden  bg-[#9183eb] relative'>
    {/* Display the current image */}
      <img src={data[index].url} alt={`carousel_image_${index}`} className='w-full h-full object-top' />

      {/* Button to navigate/show to the previous image */}
      <button onClick={()=>handleDecrement()} className='absolute top-1/2 left-1 text-white bg-[#41187F] px-4 py-2 rounded-md'> <FaAnglesLeft size={32} className='text-white' id='next' /> </button>

       {/* Button to navigate/show to the next image */}
      <button onClick={()=>handleIncrement()} className='absolute top-1/2 right-1 text-white bg-[#41187F] px-4 py-2 rounded-md'><FaAnglesRight size={32} className='text-white'/></button>
    </div>
  )
}

export default Carousel
