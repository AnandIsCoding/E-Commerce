import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { removeFromCart } from "../redux/slices/cartSlice";
import { RiDeleteBin6Line } from "react-icons/ri";

function Cart() {
  const dispatch = useDispatch();
  //get cart data from localstorage if it's null than []
  const cart = JSON.parse(localStorage.getItem('cart')) || []
  const navigate = useNavigate();
  // using reduce finding total sum of price of products in cart
  const [totalOfproduct, setTotalofproduct] = useState(
    cart.reduce((acc, curr) => acc + curr.price, 0)
  );
  const [quantities, setQuantities] = useState(
    cart.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
  );

  // stop propogation becoz on click of increment decrement quantity event was propogating and product details page
  const handleIncrement = (event, id) => {
    event.stopPropagation();
    setQuantities((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const handleRemoveFromCartBtn = (event, id) => {
    event.stopPropagation();
    dispatch(removeFromCart(id));
    toast.success("Product removed from cart successfully");
  };

  const handleDecrement = (event, id) => {
    event.stopPropagation();
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(0, prev[id] - 1), // Prevent quantity from going below 0
    }));
  };

  const shippingOptions = [
    { id: "standard", label: "Standard Shipping (3-5 days)", price: 5 },
    { id: "express", label: "Express Shipping (1-2 days)", price: 10 },
    { id: "free", label: "Free Shipping (7-10 days)", price: 0 },
  ];


  return (
    <div className="bg-black h-screen">
      {/* if cart is [] empty than show cart is empty and a button to go back to home page / */}
      {cart.length < 1 ? (
        <div className="absolute w-full h-full flex flex-col gap-5 justify-center items-center self-center px-8 py-5 rounded-xl">
          <h1 className="text-4xl font-bold text-white"> Your cart is empty</h1>
          <NavLink
            to="/"
            className="px-14 py-4  bg-[#41187F] text-white font-bold text-3xl"
          >
            Explore products
          </NavLink>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row w-full ">
          {/* left section for cart images andtitle */}
          {/* onclick of cart item navigate to show full detail of product */}
          <div className="w-full md:w-2/3 bg-black overflow-y-auto px-4 py-6 space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                onClick={(event) => {
                  if (!event.defaultPrevented) navigate(`/product/${item.id}`);
                }}
                className="flex flex-col md:flex-row items-center justify-between p-4 bg-white rounded-md shadow-md cursor-pointer space-y-4 md:space-y-0"
              >
                {/* Product Info */}
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt="Product"
                    className="w-20 h-20 md:w-32 md:h-32 rounded-md object-cover"
                  />
                  <h1 className="text-lg font-semibold md:text-xl">
                    {item.title.slice(0, 45)}...
                  </h1>
                </div>

                {/* Price & Controls */}
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                  <span className="text-lg font-bold md:text-xl">
                    ${item.price}
                  </span>
                  <div className="flex items-center border rounded-md">
                    <button
                      onClick={(event) => handleDecrement(event, item.id)}
                      className="px-2 py-1 text-xl font-bold hover:bg-gray-100"
                    >
                      –
                    </button>
                    <span className="px-4 py-1 text-xl font-semibold">
                      {quantities[item.id]}
                    </span>
                    <button
                      onClick={(event) => handleIncrement(event, item.id)}
                      className="px-2 py-1 text-xl font-bold hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={(event) => handleRemoveFromCartBtn(event, item.id)}
                    className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
                  >
                    <RiDeleteBin6Line />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* right section */}
          <div className="md:w-[35%] bg-black px-1 py-3 md:px-8 md:py-10">
            <div className="w-full h-full bg-white rounded-lg px-4 py-5 ">
              <h1 className="text-xl font-bold items-center">Cart Total</h1>
              <div className="w-[100%] h-[2px] bg-zinc-300 "></div>
              <div className="w-full px-3 flex justify-between my-6">
                <h1 className="text-xl font-semibold">Subtotal:</h1>
                <h1 className="text-xl font-semibold">${totalOfproduct}</h1>
              </div>

              <h2 className="text-xl font-bold mb-4 mt-6 px-3">
                Shipping Options
              </h2>
              <div className="flex flex-col gap-4 px-3">
                {shippingOptions.map((option) => (
                  <label key={option.id} className="flex items-center gap-4">
                    <input
                      type="radio"
                      name="shipping"
                      value={option.id}
                      className="w-5 h-5 cyrsor-pointer"
                    />
                    <span className="text-lg cursor-pointer">
                      {option.label} - ${option.price}
                    </span>
                  </label>
                ))}
              </div>

              <div className="w-full px-4 py-4 bg-gray-100 rounded-md mt-4">
                <h3 className="text-lg font-semibold mb-2">
                  Have a Coupon Code?
                </h3>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Enter your coupon code"
                    className="w-full px-4 py-2 border rounded-md outline-none "
                  />
                  <button className="px-6 py-2 bg-violet-800 text-white font-bold rounded-md hover:bg-violet-900 transition">
                    Apply
                  </button>
                </div>
              </div>

              <div className="w-full px-3 flex justify-between my-7">
                <h1 className="text-xl font-semibold">Total:</h1>
                <h1 className="text-xl font-semibold">${totalOfproduct}</h1>
              </div>

              <button
                onClick={() =>
                  toast.error(
                    "At this moment We are not Accepting New Orders🥲🥲"
                  )
                }
                className="w-full text-center bg-[#41187F] text-white py-6 text-xl font-semibold rounded-md"
              >
                Proceed to Checkout
              </button>
            </div>
            <br className="block lg:hidden"></br>
            <br className="block lg:hidden"></br>
            <br className="block lg:hidden"></br>
            <br className="block lg:hidden"></br>
            <br className="block lg:hidden"></br>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
