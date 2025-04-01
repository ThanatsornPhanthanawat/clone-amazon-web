"use client";
import Image from "next/image";
import { Navbar } from "@/components/navbar/navbar";
import HomeScreen from "./screen/home-screen";

export default function Home() {
  return (
    <div className="">
      <Navbar /> 
      <HomeScreen />
    </div>
  );
}
