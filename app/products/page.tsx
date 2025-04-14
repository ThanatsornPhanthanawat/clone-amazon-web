"use client";

import React, { useRef, useState } from "react";
import { CiSquareChevLeft } from "react-icons/ci";
import { CiSquareChevRight } from "react-icons/ci";


export default function Products() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -800, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 800, behavior: "smooth" });
    }
  };

  const items = ["Trending", "Lightning deals", "Customers' Most-Loved", "Spring Favorites", "Fashion", "Home", "Toys&Games", "Beauty", "Electronics", "Devices", "Kitchen", "Everyday Essentials",
    "Amazon Brands", "Computers&Accessories", "Pet Suppliers", "Furniture", "TVs&Accessories", "Home DIY&Appliances", "Sport&Outdoors", "Grocery", "Health&Household", "Cell Phones&Accessories",
    "Small Business", "Video Games", "Lawn&Garden", "Automotive", "Outlet", "Camera&Photo", "Books", "Jewelry", "Baby", "Office Supplies", "Musical Instruments", "Coupons"
  ];

  const allDepartments = ["All", "Amazon Devices&Accessories", "Appliances", "Arts, Crafts&Sewing", "Audible Books&Originals", "Automotive", "Baby Products", "Beauty&Personal Care", "Books",
    "CDs&Vinyl", "Cell Phones&Accessories", "Clothing,Shoes&Jewelry", "Electronics", "Everything Else", "Grocery&Gourmet Food", "Handmade Products", "Health&Household", "Home&Kitchen", "Industrial&Scientific",
    "Kindle Store", "Movies&TV", "Musical Instruments", "Office Products", "Patio,Lawn&Garden", "Pet Suppliers", "Software", "Sports&Outdoors", "Tools&Home Improvement", "Toys&Games", "Videos Games"
  ]

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
      {/* Main Page */}
      <div className="max-w-[2000px]">
        <div className="my-[50px] mx-[25px] text-3xl font-bold">Today's Deals</div>
        <div className="flex items-center gap-2 w-full px-[50px]">
          <CiSquareChevLeft onClick={scrollLeft} className="text-5xl cursor-pointer flex-shrink-0" />
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-3 px-2 whitespace-nowrap scroll-smooth scrollbar-hide">

            {items.map((item, index) => (
              <div
                key={index}
                className="text-base font-medium border border-black-300 rounded px-5 py-1 cursor-pointer"
              >
                {item}
              </div>
            ))}
          </div>
          <CiSquareChevRight onClick={scrollRight} className="text-5xl cursor-pointer flex-shrink-0" />
        </div>
        <div className="flex py-[16px] px-[px]">
          {/* left product page */}
          <div className="w-[14%] border-r-2 border-[#ddd] px-[25px]">
            <div>Department</div>
          </div>

        </div>
      </div>
    </div>
  );
}