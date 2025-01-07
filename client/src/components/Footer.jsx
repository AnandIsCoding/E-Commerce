import React from "react";
import { BsTelephone } from "react-icons/bs";
function Footer() {
  return (
    <div className="w-full flex flex-col md:flex-row  min-h-[10vw] pb-[4.8rem] md:pb-0">
      <div className="w-full flex md:flex-row">

        <div className="w-[50%]  bg-violet-950 text-white p-8 relative">
          <h1 className="text-2xl">आनंद Clothing</h1>
          <p className="text-sm text-gray-400">
            We are a leading online retailer, delivering quality products and
            exceptional customer service. Your satisfaction is our top priority.
          </p>
          <div className="flex gap-4 mt-4">
            <h1 className="flex gap-2 border-2 border-zinc-200 px-5 py-3">
              {" "}
              <BsTelephone size={20} className="mt-1" /> Call: +123 456 7890{" "}
            </h1>
            <h1 className="absolute bottom-2 right-0 left-0 border-2 border-white text-white bg-[#41187F] px-5 py-2 text-lg w-fit rounded-lg">Copyright &copy; AnandClothing Rights Reserved </h1>
          </div>

        </div>

        <div className="w-[50%]  bg-violet-950 flex flex-col justify-center items-center">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl mb-4 text-white font-bold">Quick Links</h3>
            <ul className="space-y-2 text-white text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full flex md:flex-row">
        <div className="w-[50%] bg-violet-950 flex flex-col justify-center items-center">
          {/* Customer Service */}
          <h3 className="text-xl mb-4 text-white font-bold">
            Customer Service
          </h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Payment Methods
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Money Back Gurantee
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Shipping & Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Payment Methods
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        <div className="w-[50%] bg-violet-950 flex flex-col justify-center items-center">
          <h3 className="text-xl mb-4 text-white font-bold mt-2">My Account</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:underline">
                Profile
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Orders
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Addresses
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Payment Methods
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Logout
              </a>
            </li>
            {/* Social Media or Newsletter */}
            <div>
              <h3 className="text-xl font-semibold  ">Stay Connected</h3>
              <ul className=" flex gap-4 ">
                <li>
                  <a
                    href="#"
                    rel="noopener noreferrer"
                    className="hover:text-purple-600"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    rel="noopener noreferrer"
                    className="hover:text-purple-600"
                  >
                    Twitter🌿
                  </a>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
