import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { FaRegHeart } from "react-icons/fa";
import MultiStepDescription from "../components/MultiStepDescription";

function ProductDetail() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(0);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProductDetails = async () => {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching product details:", err);
      setError("Failed to load product details");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  //  if loading show loader gif, it gives modern look, and if error than show error toast
  if (loading)
    return (
      <div className="absolute top-0 left-0 bottom-0 right-0 bg-black flex justify-center items-center duration-[2s]">
        <img src="/loader.gif" alt="loader" className="" />
      </div>
    );
  if (error) return toast.error("Failed to load product details");

  return (
    <div className="w-screen  mx-auto p-0 flex flex-col ">
      <div className=" md:max-h-[40vw]  flex flex-col md:flex-row gap-4">
        {/* Left Section */}
        <div className=" w-full md:w-1/2 flex flex-col md:flex-row">
          {/* Thumbnail List */}
          <div className="flex  gap-2 overflow-x-auto flex-row md:flex-col md:overflow-y-auto md:h-full p-1 ">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="h-[24%] w-24  bg-violet-100 flex-shrink-0 rounded-md border-2 border-violet-300 shadow-xl shadow-zinc-200"
              >
                <img
                  src={product?.image}
                  alt={`product_image_${index}`}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            ))}
          </div>
          {/* Main Image */}
          <div className=" flex-grow h-[50vh] md:h-[100%] flex justify-center items-center">
            <img
              src={product?.image}
              alt="product_image_main"
              className="w-full h-full object-contain max-h-[98%] max-w-[98%]"
            />
          </div>
        </div>

        {/* Right Section product details*/}
        <div className="md:w-1/2 h-full py-2 px-1  flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold">{product?.title}</h1>
            <p className="text-xl font-semibold text-blue-900 mt-4">
              Price: ${product?.price}
            </p>
            {/* displaying star and rating, using Math.ceil upper round off the ration, and than map, .fill method gives error */}
            <p className="text-xl font-semibold text-blue-900 mt-4">
              Ratings: {product?.rating.rate}
              {Array.from({ length: Math.ceil(product?.rating?.rate) }).map(
                (_, index) => {
                  return <span key={index}>⭐</span>;
                }
              )}
            </p>
            <div className="flex gap-2 mt-4 ">
              <p className="text-xl font-semibold text-blue-900">Color :</p>
              <div className="flex gap-2">
                <div className="w-[8vw] h-[8vw] md:w-[2vw] md:h-[2vw] rounded-md bg-violet-500 cursor-pointer"></div>
                <div className="w-[8vw] h-[8vw] md:w-[2vw] md:h-[2vw] rounded-md bg-pink-500 cursor-pointer"></div>
                <div className="w-[8vw] h-[8vw] md:w-[2vw] md:h-[2vw] rounded-md bg-black cursor-pointer"></div>
                <div className="w-[8vw] h-[8vw] md:w-[2vw] md:h-[2vw] rounded-md bg-blue-500 cursor-pointer"></div>
              </div>
            </div>

            {/* size */}
            <div className="flex gap-2 mt-4 ">
              <p className="text-xl font-bold text-blue-900">Size :</p>
              <div className="flex gap-4">
                <select value="size" className="font-bold text-xl ">
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                  <option value="extra large">Extra Large</option>
                  <option value="small">Small</option>
                </select>

                <h1 className="text-xl font-bold">📏 Size Guide</h1>
              </div>
            </div>
            <p className=" text-gray-700 mt-4 ">{product?.description}</p>
          </div>

          {/* quantity */}
          <div className="flex gap-2 mt-4 items-center">
            <h1>Qty :</h1>
            <div className="w-[35%] border-2 rounded-md  flex ">
              <span
                onClick={() => setQuantity((prev) => (prev === 0 ? 0 : --prev))}
                className="w-[33.3%] text-2xl py-2 font-bold text-center cursor-pointer hover:bg-gray-100"
              >
                –
              </span>
              <span className="w-[33.3%] text-2xl py-2 font-bold text-center">
                {quantity}
              </span>
              <span
                onClick={() => setQuantity((prev) => ++prev)}
                className="w-[33.3%] text-2xl py-2 font-bold text-center cursor-pointer hover:bg-gray-100"
              >
                +
              </span>
            </div>
            <div></div>
          </div>

          {/* buttons for cart wishlist etc */}

          <div className="w-full flex mt-8  gap-4">
            <button className="md:w-[33.33%] text-lg px-2 py-3 border-2 border-zinc-300 hover:border-[#41187F] hover:text-[#41187F] text-black rounded-sm mb-4 ">
              {" "}
              🤍 Add to wishlist
            </button>
            <button className="md:w-[33.33%] text-lg px-2 py-3 border-2 border-zinc-300 hover:border-[#41187F] hover:text-[#41187F] text-black rounded-sm mb-4 ">
              🛒 Add to Cart
            </button>
            <button className="md:w-[33.33%] text-lg px-2 py-3 border-2 border-zinc-300 hover:border-[#41187F] hover:text-[#41187F] text-black rounded-sm mb-4 ">
              ⚖ Add to Compare
            </button>
          </div>

          <div className="w-full h-[2px] bg-zinc-200 mt-4 mb-4"></div>

          {/* category and share options */}
          <div className="w-full flex ">
            <div className="w-[50%] px-4 flex gap-2">
              <h1 className="text-lg font-semibold">Category :</h1>
              <p className="text-lg ">{product.category}</p>
            </div>
            <div className="w-[50%] px-4 flex gap-2">
              <h1 className="text-lg font-semibold flex gap-4">Share :</h1>
              <span className="text-2xl">ⓕ</span>
              <span className="text-2xl">𝕏</span>
              <span className="text-2xl">📧</span>
            </div>
          </div>
        </div>
      </div>

      {/* multi step like */}
      <div className="w-full pt-2 ">
        <MultiStepDescription />
      </div>
    </div>
  );
}

export default ProductDetail;
