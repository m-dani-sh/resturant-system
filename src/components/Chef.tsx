import Image from 'next/image';
import React from 'react';

const Chef = () => {
  return (
    <div className="bg-[#131111] py-12">
      <div className="container mx-auto px-8 lg:px-24">
        <div className="text-center mb-12">
          <h2 className="text-[#FF9F0D] font-greatVibes text-xl mb-2">Chefs</h2>
          <h3 className="font-helvetica font-bold text-4xl text-white">
            <span className="text-[#FF9F0D]">Me</span>et Our Chefs
          </h3>
        </div>

        {/* Image Grid with Left Alignment */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* First Image - Left-aligned */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
              <Image
                src="./chef1.jpeg"
                alt="Chef 1"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Remaining Images */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
              <Image
                src="./chef2.jpeg"
                alt="Chef 2"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
              <Image
                src="./chef3-final.jpg"
                alt="Chef 3"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
              <Image
                src="./chef4.jpg"
                alt="Chef 4"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Centered Button */}
        <div className="text-center mt-12">
        <button className="text-white font-bold py-3 px-8 rounded-full border-2 border-[#FF9F0D] hover:bg-[#FFC107] transition-all duration-300">
  See More
</button>

        </div>
      </div>
    </div>
  );
};

export default Chef;