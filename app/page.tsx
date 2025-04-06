"use client";
import Image from "next/image";
import { Navbar } from "@/components/navbar/navbar";
import HomeScreen from "./screen/home-screen";

export default function Home() {
  return (
    <div className="">
      <div className="fixed top-0 bottom-0 w-full h-full bg-[#E3E6E6] -z-10">
      </div>
      <div>
      <Navbar /> 
      <HomeScreen />
      </div>
    </div>
  );
}
