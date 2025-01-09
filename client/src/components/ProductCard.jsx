import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import {addToCart, removeFromCart} from '../redux/slices/cartSlice'
import toast from 'react-hot-toast';
import { addToWishlist, removeFromWishlist } from '../redux/slices/wishlistSlice';
import { FaRegHeart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";

function ProductCard({product}) {
  // extract all properties from prodyct
  const {title, category, price, image, id} = product
   const cart = useSelector(state => state.cart)
   const wishlist = useSelector(state => state.wishlist)
   const dispatch = useDispatch()
    const handleAddToCartBtn = (product) =>{
      dispatch(addToCart(product))
      toast.success('Product added to cart successfully')
    }
    const handleRemoveFromCartBtn = (id) =>{
        dispatch(removeFromCart(id))
        toast.success('Product removed from cart successfully')
    }
    const handleAddToWishlistBtn = (product) =>{
      dispatch(addToWishlist(product))
      toast.success('Product added to wishlist successfully')
    }
    const handleRemoveFromWishlist = (id) =>{
      toast.success('Product removed from wishlist successfully')
      dispatch(removeFromWishlist(id))
    }
  return (
    // todo : on card hover, card should slightly up on the y-axis
    <div key={product?.id} className='products  transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex-shrink-0 w-[45%] md:w-[18%] pb-0   p-2 md:px-2 md:pt-4 rounded-md relative overflow-y-scroll md:h-[60vh] ' >
                   
                   {
              wishlist.find((i)=>i.id === product.id) ? <button onClick={(id) => handleRemoveFromWishlist(product.id) } className="absolute top-1 right-1 text-lg px-2 py-3  rounded-sm mb-4 ">
              {" "}
              <IoIosHeart className='text-[red]' size={38} /> 
            </button> : <button onClick={()=> handleAddToWishlistBtn(product)} className="absolute top-1 right-1 text-lg px-1 py-1  text-black rounded-sm mb-4 ">
              {" "}
              <IoIosHeart className='text-[#f79b9b]' size={38}/>
            </button>
            }


    <div className='w-full h-[50%]  rounded-xl'>
    <img src={image} alt='product_imaage' className='w-full h-full object-cover rounded-xl' />
    </div>

    <div className=''>
    <p className='text-lg font-semibold text-violet-800 text-center '>{category}</p>
    {/* not showing full title , only showing from 0 to 29  */}
    <p className='text-sm font-semibold text-black '>{title.slice(0,30)}...</p>      
    <p className='text-lg font-semibold text-black text-center '>${price}</p>
    </div>

    <div className='flex flex-col gap-2'>
      <NavLink to={`/product/${id}`} className='w-[100%] px-8 py-3 bg-[#41187F] text-white text-center rounded-lg '>View Product</NavLink>
      {/* if item is present in cart show remove button otherwise show add button  */}
      {
        cart.find((i)=> i.id === id) ? <button onClick={()=> handleRemoveFromCartBtn(product.id)} className='w-[100%] px-2 py-3 bg-[#41187F] text-white rounded-lg mb-4 flex justify-center items-center gap-2'> <RiDeleteBin6Line/> Remove From Cart</button> : <button onClick={() => handleAddToCartBtn(product)} className='w-[100%] px-2 py-3 bg-[#41187F] text-white rounded-lg mb-4 '> 🛒 Add to Cart</button>
      }
    </div>
     
</div>
  )
}

export default ProductCard
