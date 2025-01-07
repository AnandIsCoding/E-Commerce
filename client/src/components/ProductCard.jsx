import React from 'react'

function ProductCard({product}) {
    // extract all properties from prodyct
    const {title, category, price, image} = product
  return (
    <div key={product?.id} className='products flex-shrink-0 w-[45%] md:w-[18%] pb-0   p-2 md:px-2 md:pt-4 rounded-md relative overflow-y-scroll md:h-[60vh] ' >
                   
    <div className='w-full h-[50%]  rounded-xl'>
    <img src={image} alt='product_imaage' className='w-full h-full object-cover rounded-xl' />
    </div>

    <div className=''>
    <p className='text-lg font-semibold text-violet-800 text-center '>{category}</p>
    <p className='text-sm font-semibold text-black '>{title.slice(0,30)}...</p>
    <p className='text-lg font-semibold text-black text-center '>${price}</p>
    </div>

    <div className='flex flex-col gap-2 '>
      <button className='w-[100%] px-8 py-3 bg-[#41187F] text-white rounded-lg '>View Product</button>
      <button className='w-[100%] px-2 py-3 bg-[#41187F] text-white rounded-lg mb-4 '>🛒 Add to Cart</button>
    </div>
     
</div>
  )
}

export default ProductCard
