import Image from "next/image";
import * as React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";



export default function NavbarBelt() {
    return (
        <div className="
            bg-[#131921] 
            flex 
            w-full 
            h-[60px] 
            text-white 
            box-border">
            <div className="
                flex 
                gap-[5px] 
                p-[8px]">
                <div className="
                    w-[110px] 
                    h-[50px] 
                    no-underline 
                    text-white 
                    flex 
                    p-[8px] 
                    cursor-pointer  
                    hover:border-[1px] 
                    hover:border:solid 
                    hover:rounded-[3px] ">
                    <Image
                        src="/amazonLogo.png"
                        alt="amazonLogo"
                        width={97}
                        height={0}
                        className="object-contain transition-none"
                    />
                </div>

                <div className="
                    flex 
                    items-center
                    justify-center
                    gap-[5px] 
                    p-[8px] 
                    h-[50px]
                    cursor-pointer  
                    hover:border-[1px] 
                    hover:border:solid 
                    hover:rounded-[3px]
                    ">
                    <div className="
                        w-[10px] 
                        pt-[7px]">
                        <HiOutlineLocationMarker className="text-xl" />
                    </div>
                    <div className="
                        flex
                        flex-col
                        pl-[5px]
                        pb-[5px]">
                        <div className="
                            text-xs
                            text-[#ccc]
                            tracking-[0.5px]
                            font-medium
                            ">Deliver to</div>
                        <div className="
                            text-sm
                            font-semibold
                            tracking-[0.5px]
                            leading-[15px]
                            ">Thailand</div>
                    </div>
                </div>
            </div>

            <div className="
                flex
                items-center
                justify-center
                py-[10px]
                px-[4px]
                w-1/2
                ">
                <div className="
                    flex
                    w-full
                    h-[40px]
                    rounded-sm
                    border-[1px]
                    border-solid
                    border-[#131921]
                    ">
                    <div className="
                        flex
                        bg-[#cdcdcd]
                        gap-[5px]
                        rounded-l-[5px]
                        items-center
                        justify-center
                        p-[5px]
                        cursor-pointer
                        text-[#999999]
                        ">
                        <div className="
                            text-xs
                            font-semibold
                            pl-[5px]
                            ">All</div>
                        <MdOutlineArrowDropDown className="text-xl" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search Amazon"
                        className="
                            font-medium
                            bg-white
                            p-[8px]
                            w-full
                            text-black
                            placeholder:text-gray-500
                            placeholder:text-[15px]
                            focus:outline-none
                            " />
                    <div>
                        <AiOutlineSearch className="text-[26px]"/>
                    </div>
                </div>
            </div>

            <div></div>
        </div>
    );
}