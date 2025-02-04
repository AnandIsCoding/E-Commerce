import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { removeFromWishlist } from "../redux/slices/wishlistSlice";
import toast from "react-hot-toast";

import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import axios from "axios";

function Wishlist() {

  const navigate = useNavigate()
  // Subscribe to the Redux store to access cart and wishlist data
  const wishlist = useSelector((state) => state.wishlist);
  const [allWishlist, setAllwishlist] = useState([])

  // Local state for wishlist management
  // const [wishlistLocal, setWishlistLocal] = useState(
  //   JSON.parse(localStorage.getItem("wishlist")) || []
  // );
  const dispatch = useDispatch();

  // remove product from wishlist handler
  // const handleRemoveFromWishlist = (id) => {
  //   toast.success("Product removed from wishlist successfully");
  //   dispatch(removeFromWishlist(id));
  // };

  // Update local cart state whenever the Redux cart state changes
  // useEffect(() => {
  //   setWishlistLocal(JSON.parse(localStorage.getItem("wishlist")));
  // }, [wishlist.length]);

     useEffect(()=>{
          setAllwishlist(wishlist?.map((item)=> item?._id))
        },[wishlist?.length])


        const handleAddToWishlistBtn = async (event, id) => {
          // Ensure event doesn't propagate to parent elements
         event.stopPropagation();        
          try {
            const res = await axios.post("http://localhost:3000/api/v1/wishlist/add-remove", { _id: id });
            setAllwishlist(prev => prev.filter(item => item._id !== id));  //update ui
            if (res.data.success) {
              const isInWishlist = wishlist.some(item => item._id === id);
              if (isInWishlist) {
                dispatch(removeFromWishlist(id));
                toast.success(res.data.message);
                console.log(res.data.message)
              } 
            } else {
              toast.error(res.data.message);
            }
          } catch (error) {
            console.error("Error updating Wishlist wishlist.jsx page: =>> ", error);
            toast.error("Something went wrong! Try again.");
          }
        };


        useEffect(()=>{
            setAllwishlist(wishlist?.map((item)=> item?._id))
        },[wishlist])

  return (
    <div className="bg-black min-h-screen">
      {allWishlist?.length < 1 ? (
        <div className="absolute w-full h-full flex flex-col gap-5 justify-center items-center px-8 py-5 rounded-xl">
          <h1 className="text-2xl lg:text-4xl font-bold text-white text-center">
            Your Wishlist is empty
          </h1>
          <NavLink
            to="/"
            className="px-10 py-3 bg-[#41187F] text-white font-bold text-xl lg:text-2xl rounded-lg hover:bg-purple-700 transition duration-300"
          >
            Explore Products
          </NavLink>
        </div>
      ) : (
        <div className="w-full flex flex-col md:flex-row text-white">
          <div className="flex-grow px-6 py-4">
            <h1 className="text-2xl lg:text-3xl font-bold my-3">
              Your Wishlist
            </h1>
            <div className="space-y-4 overflow-y-auto max-h-[75vh]">
              {allWishlist?.map((item, _) => (
                <div
                onClick={()=>navigate(`/product/${item._id}`)}
                  key={item?._id}
                  className="flex flex-col md:flex-row gap-4 p-4 bg-white text-black rounded-lg shadow-md cursor-pointer"
                >
                  {/* Product Image */}
                  <div className="w-full md:w-1/5 h-32 bg-violet-500 rounded-lg overflow-hidden">
                    <img
                      src={item?.image}
                      alt={item?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex flex-col md:flex-row justify-between w-full md:w-4/5">
                    <div className="flex flex-col items-start md:w-2/5">
                      <h1 className="text-lg lg:text-xl font-bold text-center">
                        {item?.title}
                      </h1>
                      <h1 className="text-lg lg:text-xl font-bold text-center mt-2">
                        ${item?.price}
                      </h1>
                    </div>

                    {/* Rating and Remove Button */}
                    <div className="flex flex-col items-center justify-center md:w-3/5">
                      <h1 className="text-lg font-bold flex items-center gap-1">
                        {item?.rating?.rate}{" "}
                        {Array.from({
                          length: Math.ceil(item?.rating?.rate),
                        }).map((_, index) => (
                          <span key={index}>⭐</span>
                        ))}
                      </h1>
                      <button
                        onClick={(event) => handleAddToWishlistBtn(event,item._id)}
                        className="mt-4 px-4 py-2 border-2 border-gray-300 rounded-lg text-black hover:border-[#41187F] hover:text-[#41187F] transition duration-300"
                      >
                        🖤 Remove from Wishlist
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full flex items-center gap-4 my-5">
              {/* social media icons, static */}
              <h1 className="text-xl font-bold mt-5">Share</h1>
              <div className="flex gap-3 pt-4">
                <div className="w-8 h-8 flex items-center rounded-full  justify-center text-white text-xl cursor-pointer">
                  <FaWhatsapp className="text-green-500 w-full h-full object-cover" />
                </div>
                <div className="w-8 h-8  items-center rounded-full flex justify-center text-white text-xl cursor-pointer ">
                  <AiFillInstagram className="text-[red] w-full h-full object-cover" />
                </div>
                <div className="w-8 h-8 flex items-center rounded-full  justify-center text-white text-xl cursor-pointer">
                  <FaFacebook className="text-[blue] w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* back button in desktop using bom functionality or method histore object's .go method */}
      <button
        onClick={() => window.history.go(-1)}
        className="absolute top-2 right-2 bg-violet-300 px-8 py-2 rounded-md hidden md:block"
      >
        Back
      </button>
    </div>
  );
}

export default Wishlist;
