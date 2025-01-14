// dummy data for displaying multi step like content toggler
import {multiStepData} from '../utils/multistepData'


  import React, { useState } from "react";

  function MultiStepDescription() {
    // state initialized with 1 becoz want to show 1st by default
    const [showText, setShowText] = useState(1);
  
    return (
      <div className="w-full mt-5 md:px-10 ">
        {/*Buttons for showind according to index */}
        <div className="flex flex-wrap gap-5 md:gap-0  justify-between border-2 border-[#41187F] p-2 md:p-5">
          {multiStepData.map((item) => (
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
            multiStepData.find((item) => item.id === showText)?.title.toUpperCase()
              
            }
       
        </h1>
        <span className="w-full h-[2px] bg-zinc-300 rounded-xl my-8"></span>
          <p className="text-lg font-semibold ">
         
            {
              multiStepData.find((item) => item.id === showText)?.text 
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
  


  
  
  