import React from "react";
import Image from "next/image";
import Link from "next/link";
import VerticalLine from "@/components/VerticalLine";
import FoodCatergaery from "@/components/FoodCatergaery";
import About from "./about/page";
import WhyChooseUs from "@/components/Chooseus";
import Chef from "@/components/Chef";
import Menu from "./menu/page";
import Blog from "./blog/page";
import Reviews from "@/components/Reviews";
import StatsSection from "@/components/Statssection";

export default function Hero() {
  return (
    <div>
      <div className="bg-[#131111] min-h-screen w-full flex items-center justify-center ">
        <section className="relative container mx-auto px-8 lg:px-24 flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="absolute left-0">
            <VerticalLine />
          </div>

          <div className="text-center lg:text-left max-w-lg relative ">
            <h3 className="text-[#FF9F0D] text-4xl font-myCustomFont font-[400] mb-3">
              It&apos;s Quick &amp; Amazing!
            </h3>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-[#FFFFFF]">
              <span className="text-[#FF9F0D]">The</span> Art of speed <br />
              food Quality
            </h1>
            <p className="text-gray-400 text-base lg:text-lg mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
              pharetra dictum neque massa congue.
            </p>
            <Link
              href="/menu"
              className="inline-block bg-[#FF9F0D] text-black font-medium text-sm lg:text-base px-8 py-3 rounded-full shadow-lg hover:bg-[#E68A00] transition duration-300"
            >
              See Menu
            </Link>
          </div>

          <div className="relative w-full lg:w-1/2 flex items-center justify-center">
            {/* {/* Main Plate Image  */}
            <Image
              src="./herosection1.png" 
              alt="Main Food Plate"
              width={500}
              height={500}
              className="rounded-full"
            />

            {/* <div className="absolute top-28 right-12 lg:top-32 lg:right-20">
              <Image
                src="./item2.png" // Replace with the second decorative image
                alt="Decorative Item 2"
                width={70}
                height={70}
                className="rounded-full"
              /> */}
            {/* </div> */}
            <div className="absolute bottom-10 left-16 lg:bottom-12 lg:left-20">
              {/* <Image
                src="./item3.png" // Replace with the third decorative image
                alt="Decorative Item 3"
                width={50}
                height={50}
                className="rounded-full"
              /> */}
            </div>
            <div className="absolute bottom-28 right-16 lg:bottom-32 lg:right-20">
              {/* <Image
                src="./item4.png" 
                alt="Decorative Item 4"
                width={50}
                height={50}
                className="rounded-full"
              /> */}
            </div>
          </div>
        </section>
      </div>
      <div>
        <About />
        <FoodCatergaery />
        <WhyChooseUs />
        <StatsSection />
        <Menu />
        <Chef />
        <Reviews />
        <Blog />
      </div>
    </div>
  );
}
