import React, { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { TbTableOptions } from "react-icons/tb";
import { BiSolidUserAccount } from "react-icons/bi";
import { FaCartPlus } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-hot-toast'
import { useSelector } from "react-redux";

function MobileOption({setAnimatecategories}) {
  const navigate = useNavigate()

   // Subscribe to the Redux store to access cart and wishlist data
   const cart = useSelector(state => state.cart) 
   const wishlist = useSelector((state) => state.wishlist) ;

    // State for tracking the local cart and wishlist data
//  const [inlocalcart, setInlocalcart] = useState(JSON.parse(localStorage.getItem('cart')))
 //const [inLocalWish, setInlocalWish] = useState(JSON.parse(localStorage.getItem('wishlist')))

 // Update local cart state when the Redux cart state changes
//  useEffect(()=>{   
//    setInlocalcart(JSON.parse(localStorage.getItem('cart')))
//  },[cart])

// Update local wishlist state when the Redux wishlist state changes
//  useEffect(()=>{    
//    setInlocalWish(JSON.parse(localStorage.getItem('wishlist')))
//  },[wishlist])



  return (
    <nav
      aria-label="Mobile Navigation"
      className="fixed bottom-0 left-0 right-0 md:hidden w-full px-2 pt-4 pb-1 text-white bg-[#41187F] z-[1] flex justify-between"
    >

     {/* Home Button onClick navigate to home */}
      <button aria-label="Home" onClick={()=>navigate('/')}>
        <FaHome size={32} aria-hidden="true" />
        <p>Home</p>
      </button>
     
      {/* Categories Button, onClick categories will start animating bounce again click stop animation */}
      <button aria-label="Categories" onClick={()=>setAnimatecategories(prev => !prev)}>
        <TbTableOptions size={32} aria-hidden="true" />
        <p>Categories</p>
      </button>


      {/* Account Button */}
      <button aria-label="Account" onClick={()=>toast.error('Account will be updated soon')}>
        <BiSolidUserAccount size={32} aria-hidden="true" />
        <p>Account</p>
      </button>

       {/* Cart Button */}
      <button aria-label="Cart" onClick={()=>navigate('/cart')}>
        <FaCartPlus size={32} aria-hidden="true" />
        <p> Cart <span>{cart?.length}</span>  </p>
      </button>


        {/* Wishlist Button */}
      <button aria-label="Wishlist" onClick={()=>navigate('/wishlist')}>
        <FaRegHeart size={32} aria-hidden="true"  />
        <p> WishList <span>{wishlist?.length}</span> </p>
      </button>
    </nav>
  );
}

export default MobileOption;
