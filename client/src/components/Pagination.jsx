import React from "react";
import { FaAnglesLeft } from "react-icons/fa6";  // Icon for the left arrow
import { FaAnglesRight } from "react-icons/fa6";  // Icon for the right arrow

function Pagination({ allProducts, page, setPage }) {
  return (
    <div className="w-full  mb-4 flex flex-wrap items-center md:justify-center md:gap-x-2 mt-10 px-4 ">
   

       {/* Previous Button */}
      <button
        onClick={() => setPage((prev) => (prev <= 1 ? prev : prev - 1))}
        disabled={page <= 1} // Disable if on the first page
        className={`text-white px-4 py-2 rounded-md flex items-center ${
          page <= 1 ? "bg-white" : " bg-[#41187F] hover:bg-[#5a28a0]"
        }`}
      >
        <FaAnglesLeft size={18} className="text-white" />
      </button>

           {/* Page Numbers */}
      <div className="bg-white h-ful flex gap-x-8">
        {[...Array(Math.ceil(allProducts?.length / 6))].map((_, index) => {
          return (
            <button
              key={index}
              onClick={() => setPage(index + 1)}
              className={`bg-[#41187F]  text-white text-xl font-bold px-4 py-4 active:text-white rounded-xl `}
            >
              {index + 1}
            </button>
          );
        })}
      </div>

      {/* Next Button */}
      <button
        onClick={() =>
          setPage((prev) =>
            prev >= Math.ceil(allProducts?.length / 5) ? prev : prev + 1
          )
        }
        disabled={page >= Math.ceil(allProducts?.length / 5)} // Disable if on the last page
        className={`text-white px-4 py-2 rounded-md flex items-center ${
          page >= Math.ceil(allProducts?.length / 5)
            ? "bg-white"
            : "bg-[#41187F] hover:bg-[#5a28a0]"
        }`}
      >
        <FaAnglesRight size={18} className="text-white" />
      </button>
    </div>
  );
}

export default Pagination;
