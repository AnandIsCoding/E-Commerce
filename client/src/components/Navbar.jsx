import React from "react";
import { BsTelephone } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
function Navbar() {
  return (
    <nav className="w-full px-2 py-1 backdrop-blur-3xl z-[999] bg-[#41187F] fixed text-white text-lg font-semibold flex justify-between ">
    {/* Contact Information */}
      <h1 className="flex gap-2"> <BsTelephone size={20} className="mt-1" /> Call: +123 456 7890</h1>
      <div className="flex gap-10">

      {/* Currency Selector */}
      <select name="Currency" id="USD" className="font-inherit  px-4 bg-[#41187F] cursor-pointer hidden md:block ">
        <option value="USD" className="">USD</option>
        <option value="value2">Future todo</option>
        <option value="value3">Future todo</option>
      </select>

       {/* Language Selector */}
      <select name="language" id="language" className="font-inherit bg-[#41187F] px-4 hidden md:block ">
        <option value="English" className="">English</option>
        <option value="value2">Future todo</option>
        <option value="value3">Future tod</option>
      </select>


      {/* Signin / Signup Link */}
      <NavLink to='/signup'   className="cursor-pointer ">Signin / Signup</NavLink>
      </div>

      
    </nav>
  );
}

export default Navbar;
