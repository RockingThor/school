"use client";
import { Navbar } from "@/components/nav";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <div className="">
      <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
        <div className="flex items-center justify-center">{`Maniklal Singha Smrity Madhyamik Vidyalaya(HS)`}</div>
      </div>
      <div className="flex justify-center items-center">
        <Navbar />
      </div>
      <div className="flex items-center justify-center"></div>
      <div className="flex">
        <div className="hidden md:block w-4/5">
          {/* <img src="your-image-source.jpg" alt="Your Image" class="w-full h-auto"> */}
          <Image
            src={
              "https://lh3.googleusercontent.com/p/AF1QipM8MprwTuWBHzf7Z2fUQQc-ybj0yPc4GnwQluPB=s1360-w1360-h1020"
            }
            alt="Your Image"
            className="w-full h-auto"
            width={1000}
            height={1000}
          />
        </div>

        <div className="w-full md:w-1/5"></div>
      </div>
    </div>
  );
}
