import * as React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="text-white">
      {/* first part of footer back to top */}
      <div
        onClick={() => window.scrollTo({ top: 0 })}
        className="py-[15px] mt-[25px] text-center bg-[#37475A] cursor-pointer hover:bg-[#485769]">
        <span>Back to top</span>
      </div>
      {/* center footer */}
      <div className="bg-[#232f3e] py-[50px] px-[20px] flex flex-col items-center">
        {/* content footer */}
        <div className="flex justify-between w-[60%] pb-[50px]">
          <div>
            <div className="font-semibold text-lg">Get to Know Us</div>
            <div className="mt-[10px] text-base">
              <div className="mb-[10px] cursor-pointer hover:underline">Careers</div>
              <div className="mb-[10px] cursor-pointer hover:underline">Blog</div>
              <div className="mb-[10px] cursor-pointer hover:underline">About Amazon</div>
              <div className="mb-[10px] cursor-pointer hover:underline">Investor Relations</div>
              <div className="mb-[10px] cursor-pointer hover:underline">Amazon Devices</div>
              <div className="mb-[10px] cursor-pointer hover:underline">Amazon Science</div>
            </div>
          </div>
          <div>
            <div className="font-semibold text-lg">Make Money with Us</div>
            <div className="mt-[10px] text-base">
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
            <div className="font-semibold text-lg">Amazon Payment Products</div>
            <div className="mt-[10px] text-base">
              <div className="mb-[10px] cursor-pointer hover:underline">Amazon Business Card</div>
              <div className="mb-[10px] cursor-pointer hover:underline">Shop with Points</div>
              <div className="mb-[10px] cursor-pointer hover:underline">Reload Your Balance</div>
              <div className="mb-[10px] cursor-pointer hover:underline">Amazon Currency Converter</div>
            </div>
          </div>
          <div>
            <div className="font-semibold text-lg">Let Us Help You</div>
            <div className="mt-[10px] text-base">
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
        <div className="w-full h-[1px] bg-[#37475A]" />
        <div>
          <div className="mt-[40px]">
            <img
              src="/amazonLogo.png"
              alt="amazonLogo"
              className="w-[110px]" />
          </div>
          <div>
            <div></div>
          </div>
        </div>

      </div>
      {/* last part footer */}
      <div className="bg-[#131a22]">
      </div>
    </div>
  );
}