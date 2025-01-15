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

   // subscribe to wishlist and cart
   const cart = useSelector(state => state.cart)
   const wishlist = useSelector((state) => state.wishlist);

     //get cart and wishlist from localstorage, for local updation 
 const [inlocalcart, setInlocalcart] = useState(JSON.parse(localStorage.getItem('cart')))
 const [inLocalWish, setInlocalWish] = useState(JSON.parse(localStorage.getItem('wishlist')))

 //update local cart and wishlist state with updated cart from localstorage
 useEffect(()=>{   
   setInlocalcart(JSON.parse(localStorage.getItem('cart')))
 },[cart])


 useEffect(()=>{    
   setInlocalWish(JSON.parse(localStorage.getItem('wishlist')))
 },[wishlist])



  return (
    <nav
      aria-label="Mobile Navigation"
      className="fixed bottom-0 left-0 right-0 md:hidden w-full px-2 pt-4 pb-1 text-white bg-[#41187F] z-[1] flex justify-between"
    >
      <button aria-label="Home" onClick={()=>navigate('/')}>
        <FaHome size={32} aria-hidden="true" />
        <p>Home</p>
      </button>

      <button aria-label="Categories" onClick={()=>setAnimatecategories(prev => !prev)}>
        <TbTableOptions size={32} aria-hidden="true" />
        <p>Categories</p>
      </button>

      <button aria-label="Account" onClick={()=>toast.error('Account will be updated soon')}>
        <BiSolidUserAccount size={32} aria-hidden="true" />
        <p>Account</p>
      </button>

      <button aria-label="Cart" onClick={()=>navigate('/cart')}>
        <FaCartPlus size={32} aria-hidden="true" />
        <p> { `Cart ${inlocalcart?.length}` } </p>
      </button>

      <button aria-label="Wishlist" onClick={()=>navigate('/wishlist')}>
        <FaRegHeart size={32} aria-hidden="true"  />
        <p> { `WishList ${inLocalWish?.length}` } </p>
      </button>
    </nav>
  );
}

export default MobileOption;
