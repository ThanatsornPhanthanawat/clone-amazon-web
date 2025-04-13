import * as React from "react";

export default function Products() {
    return (
        <div className="w-full ">
          <div className="flex shadow-sm shadow-gray-400 h-[40px] pr-[9px] pl-[15px] gap-[25px]">
            <div className="ml-[13px] flex justify-center items-center font-bold cursor-pointer border-b-3 border-transparent hover:text-[#2162a1] hover:border-[#2162a1] transition">
              Today's Deals
            </div>
            <div className="px-[5px] flex justify-center items-center text-sm font-semibold cursor-pointer border-b-3 border-transparent hover:text-[#2162a1] hover:border-[#2162a1] transition">Coupons</div>
            <div className="px-[5px] flex justify-center items-center text-sm font-semibold cursor-pointer border-b-3 border-transparent hover:text-[#2162a1] hover:border-[#2162a1] transition">Renewed Deals</div>
            <div className="px-[5px] flex justify-center items-center text-sm font-semibold cursor-pointer border-b-3 border-transparent hover:text-[#2162a1] hover:border-[#2162a1] transition">Outlet</div>
            <div className="px-[5px] flex justify-center items-center text-sm font-semibold cursor-pointer border-b-3 border-transparent hover:text-[#2162a1] hover:border-[#2162a1] transition">Amazon Resale</div>
            <div className="px-[5px] flex justify-center items-center text-sm font-semibold cursor-pointer border-b-3 border-transparent hover:text-[#2162a1] hover:border-[#2162a1] transition">Grocery Deals</div>
          </div>
        </div>
      );
}