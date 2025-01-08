import React, { useState } from "react";

// Sample FAQ data array with title and description for each FAQ item
const data = [
  {
    title: "What is your return policy?",
    description:
      "We accept returns within 30 days of purchase. The product must be in its original condition with all tags and packaging intact.",
  },
  {
    title: "Do you offer free shipping?",
    description:
      "Yes, we ship to over 50 countries worldwide. Shipping fees (free in India) and delivery times vary depending on your location.",
  },
  {
    title: "How can I track my order?",
    description:
      "Once your order is shipped, you will receive an email with a tracking link. You can use this link to monitor the delivery status of your order.",
  },
  {
    title: "What payment methods do you accept?",
    description:
      "We accept credit and debit cards, PayPal, and other major payment methods depending on your region.",
  },
  {
    title: "Is my personal info secure",
    description:
      "Yes, we take data security seriously. Your personal information is encrypted and securely stored. We do not share your data with third parties without your consent.",
  },
];

function FAQs() {
  // State to keep track of which FAQ item is currently open
  const [openIndex, setOpenindex] = useState(0);  // be default open 1 

  // show hide FAQ item's description
  const handleOpen = (index) => {
    setOpenindex(index === openIndex ? null : index); // Close the item if already open, otherwise open it
  };

  return (
    <div className="w-full py-10 flex flex-col md:flex-row ">
      {/* Left section with a video dior*/}
      <div className="md:w-[40%] bg-violet-300 rounded-lg">
        <video
          src="/video.mp4" 
          autoPlay
          loop
          muted
          playsInline 
          className="w-full h-full object-cover md:rounded-r-lg"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Right section with FAQ titles and descriptions */}
      <div className="w-full md:w-[60%] px-0 md:px-8">
        {/* Header section for the FAQ title */}
        <h1 className="text-[14vw] md:text-[4vw] font-extrabold text-[#41187F]">Frequently </h1>
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#41187F]">
          &nbsp; Asked Questions
        </h1>

        {/* FAQ list container */}
        <div className="w-full flex flex-col justify-center items-center px-2 md:px-8">
          {data.map((item, index) => {
            return (
              // click show hide
              <div
                key={index}
                onClick={() => handleOpen(index)} 
                className="bg-violet-200 rounded-lg text-center mt-4 py-2 w-full cursor-pointer"
              >
                {/* FAQ title */}
                <h1 className="text-2xl font-bold relative">
                  {item.title} <span className="absolute right-2"> {openIndex === index ? '▬' : '✙'}  </span>
                </h1>

                {/* FAQ description if openIndex === index than only show otherwise not */}
                {openIndex === index && (
                  <h2 className="text-sm font-semibold text-center">
                    {item.description}
                  </h2>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FAQs;
