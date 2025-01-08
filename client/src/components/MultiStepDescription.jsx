// dummy data for displaying multi step like content toggler
const data = [
    {
      id: 1,
      text: "Crafted from premium-grade materials, this product offers exceptional durability and top-notch performance. Every detail has been meticulously designed to ensure a perfect balance of practicality and sophistication. Whether you’re using it daily or for special events, this product delivers consistent results. It features innovative elements such as an ergonomic design and a sleek, modern finish, making it not just functional but also aesthetically pleasing. Ideal for those who appreciate high-quality craftsmanship, it’s a product that exceeds expectations and becomes a trusted companion over time.",
      title: "description",
    },
    {
      id: 2,
      text: "This product is packed with additional features that elevate its usability and convenience. It measures 18 inches in length, 12 inches in width, and 6 inches in height, offering ample space while remaining compact. Weighing just under 2 kilograms, it is lightweight yet robust. The material composition includes a durable blend of 70% recycled polyester and 30% organic cotton, ensuring environmental sustainability. Reinforced stitching enhances its durability, while its weather-resistant coating provides added protection. Each purchase comes with a detailed guide for optimal use, ensuring you can make the most of its advanced features.",
      title: "additional information",
    },
    {
      id: 3,
      text: "We are committed to providing an excellent customer experience with our comprehensive return and shipping policy. This product is eligible for free shipping across all domestic orders, with delivery times ranging from 2–4 business days. Need it faster? Choose our express delivery option for arrival within 24–48 hours. We also offer a no-questions-asked 45-day return policy, allowing you to return or exchange the item if it doesn’t meet your expectations. All returns are processed swiftly, and our support team is on hand to guide you through every step of the process.",
      title: "return & shipping",
    },
    {
      id: 4,
      text: "Customers are raving about this product, with over 90% rating it 5 stars for its quality and reliability. Users frequently highlight its thoughtful design and impressive durability. One satisfied customer noted, 'This is the best purchase I’ve made in years. The quality is unparalleled!' Another mentioned, 'It perfectly blends style and functionality. I’ve received countless compliments.' Detailed reviews also praise the attention to detail and how it performs flawlessly in a variety of settings. Discover why this product is a favorite by reading the glowing testimonials in the reviews section.",
      title: "reviews",
    },
  ];
  
  


  import React, { useState } from "react";

  function MultiStepDescription() {
    // state initialized with 1 becoz want to show 1st by default
    const [showText, setShowText] = useState(1);
  
    return (
      <div className="w-full mt-5 md:px-10 ">
        {/*Buttons for showind according to index */}
        <div className="flex flex-wrap gap-5 md:gap-0  justify-between border-2 border-[#41187F] p-2 md:p-5">
          {data.map((item) => (
            <button
              onClick={() => setShowText(item.id)} // Set current item's `id`
              key={item.id}
              className={`text-xl text-center flex-shrink-0 font-bold text-black ${
                showText === item.id ? "text-[#41187F]" : ""
              }`}
            >
              {`${item.title[0].toUpperCase()}${item.title.slice(1)}`}
            </button>
          ))}
        </div>
  
        {/* Text Content */}
        {/* by default show 1st  */}
        <div className="w-full p-2 md:px-20 md:py-10  flex-col bg-[#41187F] text-white border-2 border-violet-800 flex items-center justify-center">
        <h1 className="text-2xl font-bold text-violet-200 ">
        {/* find using find method find clicked id and show it's title, in uppercase  */}
        {
              data.find((item) => item.id === showText)?.title.toUpperCase()
              
            }
       
        </h1>
        <span className="w-full h-[2px] bg-zinc-300 rounded-xl my-8"></span>
          <p className="text-lg font-semibold ">
         
            {
              data.find((item) => item.id === showText)?.text 
            }
          </p>
        </div>
        
        {
            Array(3).fill(null).map((_,index)=>{
                return <br key={index} className="block md:hidden"></br>
            })
        }
        <br></br>
      </div>
    );
  }
  
  export default MultiStepDescription;
  


  
  
  