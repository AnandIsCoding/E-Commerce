import React from "react";
import { FaHome } from "react-icons/fa";
import { TbTableOptions } from "react-icons/tb";
import { BiSolidUserAccount } from "react-icons/bi";
import { FaCartPlus } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

function MobileOption({setAnimatecategories}) {
  return (
    <nav
      aria-label="Mobile Navigation"
      className="fixed bottom-0 left-0 right-0 md:hidden w-full px-2 pt-4 pb-1 text-white bg-[#41187F] z-[1] flex justify-between"
    >
      <button aria-label="Home">
        <FaHome size={32} aria-hidden="true" />
        <p>Home</p>
      </button>

      <button aria-label="Categories" onClick={()=>setAnimatecategories(prev => !prev)}>
        <TbTableOptions size={32} aria-hidden="true" />
        <p>Categories</p>
      </button>

      <button aria-label="Account">
        <BiSolidUserAccount size={32} aria-hidden="true" />
        <p>Account</p>
      </button>

      <button aria-label="Cart">
        <FaCartPlus size={32} aria-hidden="true" />
        <p>Cart</p>
      </button>

      <button aria-label="Wishlist" >
        <FaRegHeart size={32} aria-hidden="true"  />
        <p>Wishlist</p>
      </button>
    </nav>
  );
}

export default MobileOption;
