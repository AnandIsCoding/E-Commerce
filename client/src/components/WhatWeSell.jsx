import React from 'react';
import { IoIosRocket } from "react-icons/io";
import { GiReturnArrow } from "react-icons/gi";
import { MdDiscount, MdOutlineSupportAgent } from "react-icons/md";

// Array to store details of the benefits
const benefits = [
  {
    icon: <IoIosRocket size={38} aria-label="Free Shipping Icon" className="text-violet-800 mt-3" />,
    title: "Free Shipping",
    description: "Order $50 or more", 
  },
  {
    icon: <GiReturnArrow size={38} aria-label="Free Return Icon" className="text-violet-800 mt-3" />,
    title: "Free Return",
    description: "Within 10 days", 
  },
  {
    icon: <MdDiscount size={38} aria-label="Discount Icon" className="text-violet-800 mt-3" />,
    title: "Get 20% Off",
    description: "On first signup", 
  },
  {
    icon: <MdOutlineSupportAgent size={38} aria-label="Support Icon" className="text-violet-800 mt-3" />,
    title: "We Support",
    description: "24/7 amazing service", 
  },
];

// Functional Component for the "What We Sell" section
function WhatWeSell() {
  return (
    <div className="w-full px-5 py-4 flex flex-col mt-14 gap-5 bg-violet-100 hover:bg-violet-200 duration-200">
      {/* Section Title */}
      <h1 className="text-center text-violet-900 font-bold text-xl">What We Believe</h1>

      {/* Grid layout to display the benefits */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {benefits.map((benefit, index) => (
          <div 
            key={index} // Unique key for each benefit
            className="flex gap-4 items-start justify-center"
          >
            {/* Display the icon */}
            {benefit.icon}

            {/* Display the title and description */}
            <div>
              <h1 className="text-xl text-violet-950 font-bold">{benefit.title}</h1>
              <p className="text-sm text-violet-950 font-bold">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhatWeSell; 
