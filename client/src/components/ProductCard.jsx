import React, { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { addToCart, removeFromCart } from "../redux/slices/cartSlice";
import toast from "react-hot-toast";
import {
  addToWishlist,
  removeFromWishlist,
} from "../redux/slices/wishlistSlice";
import { IoIosHeart } from "react-icons/io";
import axios from "axios";

function ProductCard({ product }) {
  const { title, category, price, image, _id } = product;
  const dispatch = useDispatch();

  // Subscribe to the Redux store to access cart and wishlist data
  const [allCart, setAllCart] = useState([]);
  const [allWishlist, setAllwishlist] = useState([])
  const cart = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.wishlist);

  useEffect(() => {
    if (Array.isArray(cart)) {
      setAllCart(cart?.map((item) => item._id)); // Set cart data properly if it's an array
    } else {
      setAllCart([]); // Fallback to an empty array if cart is not an array
    }
  }, [cart]); // Ensure this runs when cart changes

  useEffect(() => {
    if (Array.isArray(wishlist)) {
      setAllwishlist(wishlist?.map((item) => item._id)); // Set cart data properly if it's an array
    } else {
      setAllwishlist([]); // Fallback to an empty array if cart is not an array
    }
  }, [wishlist]); // Ensure this runs when wishlist changes

  useEffect(() => {
    if (Array(cart)) {
      setAllCart(cart?.map((item) => item._id)); // Initialize allCart with product IDs from Redux state
    } else {
      setAllCart([]); // If cart is null or undefined, set an empty array
    }
  }, []);

  // Local state for wishlist management
  //const [wishlist, setWishlist] = useState([]);

  //  // Fetch wishlist  when the component mounts
  useEffect(() => {
    if (Array(wishlist)) {
      setAllwishlist(wishlist?.map((item) => item._id)); // Initialize allCart with product IDs from Redux state
    } else {
      setAllwishlist([]); // If cart is null or undefined, set an empty array
    }
  }, []); // Empty dependency array to run once

  // Toggle add/remove from cart
  const handleAddToCartBtn = async (product) => {
    try {
      const res = await axios.post(
        "https://almacommerce.onrender.com/api/v1/cart/add-remove",
        { _id: product._id }
      );

      if (res.data.success) {
        // Check if item exists in the cart and toggle accordingly
        const isInCart = cart?.some((item) => item._id === _id);
        if (isInCart) {
          dispatch(removeFromCart(product._id)); // Remove from cart
          setAllCart((prev) => prev.filter((id) => id !== product._id)); // Update local cart state
          toast.success(res.data.message);
        } else {
          dispatch(addToCart(product)); // Add to cart
          setAllCart((prev) => [...prev, product._id]); // Update local cart state
          toast.success(res.data.message);
        }
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error("Error updating cart:", error);
      toast.error("Something went wrong! Try again.");
    }
  };
  
  const handleAddToWishlistBtn = async (product) => {
    try {
      const res = await axios.post(
        "https://almacommerce.onrender.com/api/v1/wishlist/add-remove",
        { _id: product._id }
      );

      if (res.data.success) {
        // Check if item exists in the cart and toggle accordingly
        const isInWishlist = wishlist.some((item) => item._id === _id);
        if (isInWishlist) {
          dispatch(removeFromCart(product._id)); // Remove from cart
          setAllwishlist((prev) => prev.filter((id) => id !== product._id)); // Update local cart state
          toast.success(res.data.message);
        } else {
          dispatch(addToWishlist(product)); // Add to cart
          setAllwishlist((prev) => [...prev, product._id]); // Update local cart state
          toast.success(res.data.message);
        }
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error("Error updating wishlist", error);
      toast.error("Something went wrong! Try again.");
    }
  };
  // Remove from cart handler,  remove product from cart and display success toast
  // const handleRemoveFromCartBtn = (__id) => {
  //   dispatch(removeFromCart(__id));  // Dispatch action to remove from Redux state
  //   toast.success('Product removed from cart successfully');
  // };

  // Add to wishlist handler
  // const handleAddToWishlistBtn = (product) => {
  //   const updatedWishlist = [...wishlist, product];
  //   setWishlist(updatedWishlist);
  //   localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); // Save updated wishlist to localStorage
  //   dispatch(addToWishlist(product));
  //   toast.success("Product added to wishlist successfully");
  // };

  // // Remove from wishlist handler
  // const handleRemoveFromWishlist = (_id) => {
  //   const updatedWishlist = wishlist.filter((item) => item._id !== _id);
  //   setWishlist(updatedWishlist);
  //   l; //ocalStorage.setItem('wishlist', JSON.stringify(updatedWishlist));  // Update localStorage
  //   dispatch(removeFromWishlist(_id));
  //   toast.success("Product removed from wishlist successfully");
  // };

  // Sync cart with localStorage whenever the cart changes
  // useEffect(() => {
  //   //localStorage.setItem('cart', JSON.stringify(cart));  // Sync Redux cart state to localStorage

  // }, [cart?.length]);  // Runs whenever the cart length changes

  return (
    <div
      key={product?.__id}
      className="products transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex-shrink-0 w-[45%] md:w-[18%] pb-0 py-2 md:px-2 md:pt-4 rounded-md relative overflow-y-scroll md:h-[60vh]"
    >
      {/* Wishlist button toggles between add and remove */}
      {allWishlist?.find((i) => i._id === product._id) ? (
        <button
          onClick={() => handleAddToWishlistBtn(product)}
          className="absolute top-1 right-1 text-lg px-2 py-3 rounded-sm mb-4"
        >
          <IoIosHeart className="text-[red]" size={38} />
        </button>
      ) : (
        <button
          onClick={() => handleAddToWishlistBtn(product)}
          className="absolute top-1 right-1 text-lg px-1 py-1 text-black rounded-sm mb-4"
        >
          <IoIosHeart className="text-[#fcafaf]" size={38} />
        </button>
      )}

      {/* Product image */}

      <div className="w-full h-[50%] rounded-xl">
        <img
          src={image}
          alt="product_image"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* Product details */}
      <div>
        <p className="text-lg font-semibold text-violet-800 text-center">
          {category}
        </p>
        <p className="text-sm font-semibold text-black">
          {title.slice(0, 30)}...
        </p>
        <p className="text-lg font-semibold text-black text-center">₹{price}</p>
      </div>

      {/* Actions: View Product, Add/Remove from Cart */}
      <div className="flex flex-col gap-2">
        <NavLink
          to={`/product/${_id}`}
          className="w-[100%] px-8 py-3 bg-[#41187F] text-white text-center rounded-lg"
        >
          View Product
        </NavLink>
        {
          <button
            onClick={() => handleAddToCartBtn(product)}
            className="w-[100%] px-2 py-3 bg-[#41187F] text-white rounded-lg mb-4 flex justify-center items-center gap-2"
          >
            {allCart?.some((i) => i?._id === _id) ? (
              <>
                <RiDeleteBin6Line /> Remove From Cart
              </>
            ) : (
              <>🛒 Add to Cart</>
            )}
          </button>
        }
      </div>
    </div>
  );
}

export default ProductCard;
