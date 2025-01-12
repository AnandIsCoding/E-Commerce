import React, { useEffect, useState } from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addToCart, removeFromCart } from '../redux/slices/cartSlice';
import toast from 'react-hot-toast';
import { addToWishlist, removeFromWishlist } from '../redux/slices/wishlistSlice';
import { IoIosHeart } from "react-icons/io";

function ProductCard({ product }) {
  const { title, category, price, image, id } = product;
  const dispatch = useDispatch();
  
  // Redux state for cart
  const cart = useSelector((state) => state.cart);  // Access the cart from Redux store
  
  // Local state for wishlist
  const [wishlist, setWishlist] = useState([]);

  // Fetch wishlist from localStorage on mount
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    if (Array.isArray(storedWishlist)) {
      setWishlist(storedWishlist);
    } else {
      setWishlist([]);
    }
  }, []);  // Empty dependency array to run once on mount

  // Add to cart handler
  const handleAddToCartBtn = (product) => {
    dispatch(addToCart(product));  // Dispatch action to add to Redux state
    toast.success('Product added to cart successfully');
  };

  // Remove from cart handler
  const handleRemoveFromCartBtn = (id) => {
    dispatch(removeFromCart(id));  // Dispatch action to remove from Redux state
    toast.success('Product removed from cart successfully');
  };

  // Add to wishlist handler
  const handleAddToWishlistBtn = (product) => {
    const updatedWishlist = [...wishlist, product];
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));  // Update localStorage
    dispatch(addToWishlist(product));
    toast.success('Product added to wishlist successfully');
  };

  // Remove from wishlist handler
  const handleRemoveFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter(item => item.id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));  // Update localStorage
    dispatch(removeFromWishlist(id));
    toast.success('Product removed from wishlist successfully');
  };

  // Sync cart with localStorage whenever the cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));  // Sync Redux cart state to localStorage
  }, [cart.length]);  // Runs whenever the cart state in Redux is updated

  return (
    <div key={product?.id} className='products transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex-shrink-0 w-[45%] md:w-[18%] pb-0 p-2 md:px-2 md:pt-4 rounded-md relative overflow-y-scroll md:h-[60vh]'>
      {
        wishlist?.find((i) => i.id === product.id) ? (
          <button onClick={() => handleRemoveFromWishlist(product.id)} className="absolute top-1 right-1 text-lg px-2 py-3 rounded-sm mb-4">
            <IoIosHeart className='text-[red]' size={38} />
          </button>
        ) : (
          <button onClick={() => handleAddToWishlistBtn(product)} className="absolute top-1 right-1 text-lg px-1 py-1 text-black rounded-sm mb-4">
            <IoIosHeart className='text-[#fcafaf]' size={38} />
          </button>
        )
      }

      <div className='w-full h-[50%] rounded-xl'>
        <img src={image} alt='product_image' className='w-full h-full object-cover rounded-xl' />
      </div>

      <div>
        <p className='text-lg font-semibold text-violet-800 text-center'>{category}</p>
        <p className='text-sm font-semibold text-black'>{title.slice(0, 30)}...</p>
        <p className='text-lg font-semibold text-black text-center'>${price}</p>
      </div>

      <div className='flex flex-col gap-2'>
        <NavLink to={`/product/${id}`} className='w-[100%] px-8 py-3 bg-[#41187F] text-white text-center rounded-lg'>View Product</NavLink>
        {
          cart?.find((i) => i.id === id) ? (
            <button onClick={() => handleRemoveFromCartBtn(product.id)} className='w-[100%] px-2 py-3 bg-[#41187F] text-white rounded-lg mb-4 flex justify-center items-center gap-2'>
              <RiDeleteBin6Line /> Remove From Cart
            </button>
          ) : (
            <button onClick={() => handleAddToCartBtn(product)} className='w-[100%] px-2 py-3 bg-[#41187F] text-white rounded-lg mb-4'>
              🛒 Add to Cart
            </button>
          )
        }
      </div>
    </div>
  );
}

export default ProductCard;
