import Image from "next/image";
import * as React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { LuShoppingCart } from "react-icons/lu";



export default function NavbarBelt() {
    return (
        <div className="">
            <div className="bg-[#131921] flex w-full h-[60px] text-white box-border whitespace-nowrap">
                {/* Left side */}
                <div className="flex gap-[5px] p-[8px]">
                    <div className="w-[110px] h-[50px] no-underline text-white flex p-[8px] cursor-pointer hover:border-[1px] hover:border-solid hover:rounded-[3px]">
                        <Image src="/amazonLogo.png" alt="amazonLogo" width={97} height={0} className="object-contain transition-none" />
                    </div>

                    <div className="flex items-center justify-center gap-[5px] p-[8px] h-[50px] cursor-pointer hover:border-[1px] hover:border-solid hover:rounded-[3px]">
                        <div className="w-[10px] pt-[7px]">
                            <HiOutlineLocationMarker className="text-xl" />
                        </div>
                        <div className="flex flex-col pl-[5px] pb-[5px]">
                            <div className="text-xs text-[#ccc] tracking-[0.5px] font-medium">Deliver to</div>
                            <div className="text-sm font-semibold tracking-[0.5px] leading-[15px]">Thailand</div>
                        </div>
                    </div>
                </div>

                {/* Center search bar */}
                <div className="flex items-center justify-center py-[10px] px-[10px] w-4/5">
                    <div className="flex w-full h-[40px] rounded-sm border-[1px] border-solid border-[#131921]">
                        <div className="flex bg-[#cdcdcd] gap-[5px] rounded-l-[5px] items-center justify-center p-[5px] cursor-pointer text-[#999999]">
                            <div className="text-xs font-semibold pl-[5px]">All</div>
                            <MdOutlineArrowDropDown className="text-xl" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search Amazon"
                            className="font-medium bg-white p-[8px] flex-grow text-black placeholder:text-gray-500 placeholder:text-[15px] focus:outline-none"
                        />
                        <div className="bg-[#febd69] text-[10px] rounded-r-[5px] cursor-pointer p-[10px] flex items-center justify-center hover:bg-[#F3A847]">
                            <AiOutlineSearch className="text-[26px] text-black" />
                        </div>
                    </div>
                </div>

                {/* Right side */}
                <div className="p-[5px] text-white flex gap-[1px]">
                    <div className="flex justify-center items-center pt-[10px] p-[8px] gap-[5px] cursor-pointer hover:rounded-[3px] hover:border-[1px] hover:border-solid">
                        <Image src="/usaFlag2.png" alt="usaFlag" width={25} height={25} />
                        <div className="text-sm flex items-center font-bold">
                            EN
                            <MdOutlineArrowDropDown className="text-base mt-1 -ml-0.4 text-[#ccc]" />
                        </div>
                    </div>

                    <div className="flex relative text-white no-underline flex-col p-[8px] cursor-pointer hover:rounded-[3px] hover:border-[1px] hover:border-solid">
                        <div className="text-[12px] font-medium">Hello, sign in</div>
                        <div className="leading-[15px] font-semibold tracking-tighter">Account & Lists</div>
                    </div>

                    <div className="flex relative text-white no-underline flex-col p-[8px] cursor-pointer hover:rounded-[3px] hover:border-[1px] hover:border-solid">
                        <div className="text-[12px] font-medium">Returns</div>
                        <div className="leading-[15px] font-semibold tracking-tighter">& Orders</div>
                    </div>

                    <div className="flex relative text-white no-underline flex-col p-[8px] pt-[15px] cursor-pointer hover:rounded-[3px] hover:border-[1px] hover:border-solid">
                        <span className="absolute bottom-[50%] left-[25%] text-[#febd69] font-semibold text-base">2</span>
                        <div className="text-[25px] font-medium flex items-center">
                            <LuShoppingCart />
                            <span className="text-sm font-semibold pt-[10px]">Cart</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}