import Link from 'next/link';
import * as React from "react";
import { IoMdMenu } from "react-icons/io";

export function NavbarBanner() {
    const option = [
        { "name": "Today's Deals" },
        { "name": "Registry" },
        { "name": "Customer Service" },
        { "name": "Gift Cards" },
        { "name": "Sell" }
    ]

    return (
        <div className="bg-[#232f3e] text-white px-[11px] py-[6px] flex flex-col sm:flex-row sm:justify-between sm:items-center w-full gap-y-2">
            {/* left side */}
            <div className="flex flex-wrap sm:flex-nowrap">
                <div className=" flex px-[9px] py-[8px] text-white items-center cursor-pointer hover:rounded-[3px] hover:border-[1px] hover:border-solid">
                    <IoMdMenu className="text-2xl" />
                    <div className="text-sm font-semibold pl-[5px]">All</div>
                </div>
                {
                    option.map((item, ind) => {
                        return (
                            <Link href="/products" className=" flex px-[9px] py-[8px] justify-center text-white items-center cursor-pointer hover:rounded-[3px] hover:border-[1px] hover:border-solid"
                                key={ind}>
                                <div className="text-sm pl-[5px]">{item.name}</div>
                            </Link>
                        )
                    })
                }
            </div>

            {/* Right side */}
            <div className="flex justify-center sm:justify-end items-center px-[9px] py-[8px] text-sm font-semibold cursor-pointer hover:rounded-[3px] hover:border">
                <div>Get free shipping to Thailand</div></div>
        </div>
    );
}