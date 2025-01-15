import React, { useState } from "react";

// Importing FAQ data from the utils folder
import { FAQdata } from "../utils/faqData";

function FAQs() {
  // State to keep track of which FAQ item is currently open
  const [openIndex, setOpenindex] = useState(0);  // be default open 1 

  // show hide FAQ item's description, Toggles the open/close state of an FAQ item
  const handleOpen = (index) => {
    setOpenindex(index === openIndex ? null : index); // Close the item if already open, otherwise open it
  };

  return (
    <div className="w-full py-10 flex flex-col md:flex-row ">
       {/* Left section: A video area */}
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
          {FAQdata.map((item, index) => {
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
