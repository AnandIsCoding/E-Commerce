import React from 'react'

function Shimmer() {
  return (
    <div className='products flex-shrink-0 w-[45%] md:w-[18%] pb-0 p-2 md:px-2 md:pt-4 rounded-md relative overflow-y-scroll md:h-[60vh] '>
  {/* Image Shimmer */}
  <div className='w-full h-[50%] rounded-xl bg-gray-300 shimmer'></div>

  {/* Text Shimmers */}
  <div className='mt-2'>
    <p className='w-1/2 h-4 bg-gray-300 shimmer mx-auto rounded-md'></p>
    <p className='w-3/4 h-4 bg-gray-300 shimmer mt-2 rounded-md'></p>
    <p className='w-1/3 h-4 bg-gray-300 shimmer mx-auto mt-2 rounded-md'></p>
  </div>

  {/* Buttons Shimmers */}
  <div className='flex flex-col gap-2 mt-4'>
    <div className='w-full h-10 bg-gray-300 shimmer rounded-lg'></div>
    <div className='w-full h-10 bg-gray-300 shimmer rounded-lg mb-4'></div>
  </div>
</div>

  )
}

export default Shimmer
