import Image from "next/image";
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
        <div className="
                bg-[#232f3e]
                pl-[11px]
                flex
                h-[39px]
                justify-between
                text-white
                whitespace-nowrap">
            {/* left side */}
            <div className="flex">
                <div className="
                        flex
                        px-[9px]
                        py-[8px]
                        justify-center
                        text-white
                        items-center
                        cursor-pointer
                        hover:rounded-[3px]
                        hover:border-[1px]
                        hover:border-solid">
                    <IoMdMenu className="text-2xl" />
                    <div className="text-sm font-semibold pl-[5px]">All</div>
                </div>
                {
                    option.map((item, ind) => {
                        return (
                            <div className="
                                    flex
                                    px-[9px]
                                    py-[8px]
                                    justify-center
                                    text-white
                                    items-center
                                    cursor-pointer
                                    hover:rounded-[3px]
                                    hover:border-[1px]
                                    hover:border-solid"
                                key={ind}>
                                <div className="text-sm pl-[5px]">{item.name}</div>
                            </div>
                        )
                    })
                }
            </div>

            {/* Right side */}
            <div className="
                flex
                justify-center
                items-center
                px-[9px]
                py-[8px]
                mr-[20px]
                text-sm
                font-semibold
                text-white
                cursor-pointer
                hover:rounded-[3px]
                hover:border-[1px]
                hover:border-solid">
                    <div>Get free shipping to Thailand</div></div>
        </div>
    );
}