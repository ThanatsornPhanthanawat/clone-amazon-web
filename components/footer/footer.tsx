"use client";
import * as React from "react";
import Image from "next/image";
import { TfiWorld } from "react-icons/tfi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { FiDollarSign } from "react-icons/fi";


export default function Footer() {
  return (
    <div className="text-white">
      {/* first part of footer back to top */}
      <div
        onClick={() => window.scrollTo({ top: 0 })}
        className="py-[15px] mt-[25px] text-center text-xs bg-[#37475A] cursor-pointer hover:bg-[#485769]">
        <span>Back to top</span>
      </div>
      {/* center footer */}
      <div className="bg-[#232f3e] py-[50px] px-[20px] flex flex-col items-center">
        {/* content footer */}
        <div className="flex justify-between w-[65%] pb-[50px]">
          <div>
            <div className="font-semibold text-sm">Get to Know Us</div>
            <div className="mt-[10px] text-sm text-[#dddddd]">
              <div className="mb-[10px] cursor-pointer hover:underline">Careers</div>
              <div className="mb-[10px] cursor-pointer hover:underline">Blog</div>
              <div className="mb-[10px] cursor-pointer hover:underline">About Amazon</div>
              <div className="mb-[10px] cursor-pointer hover:underline">Investor Relations</div>
              <div className="mb-[10px] cursor-pointer hover:underline">Amazon Devices</div>
              <div className="mb-[10px] cursor-pointer hover:underline">Amazon Science</div>
            </div>
          </div>
          <div>
            <div className="font-semibold text-sm">Make Money with Us</div>
            <div className="mt-[10px] text-sm text-[#dddddd]">
              <div className="mb-[10px] cursor-pointer hover:underline">Sell products on Amazon</div>
              <div className="mb-[10px] cursor-pointer hover:underline">Sell on Amazon Business</div>
              <div className="mb-[10px] cursor-pointer hover:underline">Sell apps on Amazon</div>
              <div className="mb-[10px] cursor-pointer hover:underline">Become an Affiliate</div>
              <div className="mb-[10px] cursor-pointer hover:underline">Advertise Your Products</div>
              <div className="mb-[10px] cursor-pointer hover:underline">Self-Publish with Us</div>
              <div className="mb-[10px] cursor-pointer hover:underline">Host an Amazon Hub</div>
              <div className="mb-[10px] cursor-pointer hover:underline"> See More Make Money with Us</div>
            </div>
          </div>
          <div>
            <div className="font-semibold text-sm">Amazon Payment Products</div>
            <div className="mt-[10px] text-sm text-[#dddddd]">
              <div className="mb-[10px] cursor-pointer hover:underline">Amazon Business Card</div>
              <div className="mb-[10px] cursor-pointer hover:underline">Shop with Points</div>
              <div className="mb-[10px] cursor-pointer hover:underline">Reload Your Balance</div>
              <div className="mb-[10px] cursor-pointer hover:underline">Amazon Currency Converter</div>
            </div>
          </div>
          <div>
            <div className="font-semibold text-sm">Let Us Help You</div>
            <div className="mt-[10px] text-sm text-[#dddddd]">
              <div className="mb-[10px] cursor-pointer hover:underline">Amazon and COVID-19</div>
              <div className="mb-[10px] cursor-pointer hover:underline">Your Accout</div>
              <div className="mb-[10px] cursor-pointer hover:underline">Your Orders</div>
              <div className="mb-[10px] cursor-pointer hover:underline">Shipping Rates & Policies</div>
              <div className="mb-[10px] cursor-pointer hover:underline">Returns & Replacements</div>
              <div className="mb-[10px] cursor-pointer hover:underline">Manage Your Content and Devices</div>
              <div className="mb-[10px] cursor-pointer hover:underline">Help</div>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#37475A]"></div>
        <div className="flex gap-25 mt-[40px]">
          <div className="flex items-center ">
            <img
              src="/amazonLogo.png"
              alt="amazonLogo"
              className="w-[80px] pt-2" />
          </div>
          <div className="flex gap-2">
            <div className="flex items-center gap-2 border border-gray-400 px-5 py-1 cursor-pointer">
              <TfiWorld className="-ml-2" size={13} />
              <div className="text-xs">English</div>
              <div className="-mr-3">
                <IoMdArrowDropup className="-mb-1" color="gray" />
                <IoMdArrowDropdown className="-mt-2" color="gray" />
              </div>
            </div>
            <div className="flex items-center gap-2 border border-gray-400 px-3 py-1 cursor-pointer">
              <FiDollarSign size={13} />
              <div className="text-xs">USD - U.S. Dollar</div>
            </div>
            <div className="flex items-center gap-2 border border-gray-400 px-3 py-1 cursor-pointer">
              <Image src="/usaFlag2.png" alt="usaFlag" width={15} height={25} className="h-[10px] w-[18px]" />
              <div className="text-xs">United Center</div>
            </div>
          </div>
        </div>

      </div>
      {/* last part footer */}
      <div className="bg-[#131a22] text-white py-10 px-20 text-xs ">
        <div className="grid grid-cols-7 gap-x-8 gap-y-5 w-[70%] mx-auto justify-center">
          <div className="pointer-center hover:underline ">
            <div>Amazon Music</div>
            <div className="text-[#999999]">Stream millions of songs</div>
          </div>
          <div className="pointer-center hover:underline ">
            <div>Amazon Ads</div>
            <div className="text-[#999999]">Reach customers wherever they spend their time</div>
          </div>
          <div className="pointer-center hover:underline ">
            <div>6pm</div>
            <div className="text-[#999999]">Score deals on fashion brands</div>
          </div>
          <div className="pointer-center hover:underline ">
            <div>AbeBooks</div>
            <div className="text-[#999999]">Books, art & collectibles</div>
          </div>
          <div className="pointer-center hover:underline ">
            <div>ACX</div>
            <div className="text-[#999999]">Audiobook Publishing Made Easy</div>
          </div>
          <div className="pointer-center hover:underline ">
            <div>Sell on Amazon</div>
            <div className="text-[#999999]">Start a Selling Account</div>
          </div>
          <div className="pointer-center hover:underline ">
            <div>Veeqo</div>
            <div className="text-[#999999]">Shipping Software Inventory Management</div>
          </div>
          <div className="pointer-center hover:underline ">
            <div>Amazon Business</div>
            <div className="text-[#999999]">Eveything For Your Business</div>
          </div>
          <div className="pointer-center hover:underline ">
            <div>AmazonGlobal</div>
            <div className="text-[#999999]">Ship Orders Internationally</div>
          </div>
          <div className="pointer-center hover:underline ">
            <div>Amazon Web Service</div>
            <div className="text-[#999999]">Scalable Cloud Computing Services</div>
          </div>
          <div className="pointer-center hover:underline ">
            <div>Audible</div>
            <div className="text-[#999999]">Listen to Books & Original Audio Performances</div>
          </div>
          <div className="pointer-center hover:underline ">
            <div>Box Office Mojo</div>
            <div className="text-[#999999]">Find Movie Box Office Date</div>
          </div>
          <div className="pointer-center hover:underline ">
            <div>Goodreads</div>
            <div className="text-[#999999]">Book reviews & recommendations</div>
          </div>
          <div className="pointer-center hover:underline ">
            <div>IMDb</div>
            <div className="text-[#999999]">Movies, TV & Celebrities</div>
          </div>
          <div className="pointer-center hover:underline ">
            <div>IMDbPro</div>
            <div className="text-[#999999]">Get info Entertainment Professionals Need</div>
          </div>
          <div className="pointer-center hover:underline ">
            <div>Kindle Direct Publishing</div>
            <div className="text-[#999999]">Indie Digital & Print Publishing Made Easy</div>
          </div>
          <div className="pointer-center hover:underline ">
            <div>Prime Video Direct</div>
            <div className="text-[#999999]">Video Distribution Made Easy</div>
          </div>
          <div className="pointer-center hover:underline ">
            <div>Shopbop</div>
            <div className="text-[#999999]">Designer Fashion Brands</div>
          </div>
          <div className="pointer-center hover:underline ">
            <div>Woot!</div>
            <div className="text-[#999999]">Deals and Shenanigans</div>
          </div>
          <div className="pointer-center hover:underline ">
            <div>Zappos</div>
            <div className="text-[#999999]">Shoes & Clothing</div>
          </div>
          <div className="pointer-center hover:underline ">
            <div>Ring</div>
            <div className="text-[#999999]">Smart Home Security Systems</div>
          </div>
          <div  className="col-span-5 col-start-2 grid grid-cols-5 gap-x-8">
            <div className="pointer-center hover:underline ">
              <div>eero WiFi</div>
              <div className="text-[#999999]">Stream 4K Video in Every Room</div>
            </div>
            <div className="pointer-center hover:underline ">
              <div>Blink</div>
              <div className="text-[#999999]">Smart Secutity for Every Home</div>
            </div>
            <div className="pointer-center hover:underline ">
              <div>Neighbors App</div>
              <div className="text-[#999999]">Real-Time Crime & Safety Alerts</div>
            </div>
            <div className="pointer-center hover:underline ">
              <div>Amazon Subscription Boxes</div>
              <div className="text-[#999999]">Top subscription boxes-right to your door</div>
            </div>
            <div className="pointer-center hover:underline ">
              <div>PillPack</div>
              <div className="text-[#999999]">Pharmacy Simplified</div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex space-x-6 justify-center pt-10 pb-1">
            <div className="cursor-pointer hover:underline">Condition of Use</div>
            <div className="cursor-pointer hover:underline">Privacy Notice</div>
            <div className="cursor-pointer hover:underline">Consumer Health Data Privacy Disclosure</div>
            <div className="cursor-pointer hover:underline">Your Ads Privacy Choices</div>
          </div>
          <div className="flex justify-center">© 1996-2025, Amazon.com, Inc. or its affiliates</div>
        </div>
      </div>
    </div>
  );
}