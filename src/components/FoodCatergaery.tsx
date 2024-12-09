import Image from 'next/image';
import React from 'react';

const FoodCategory = () => {
  return (
    <div className="bg-[#131111] py-12">
      <div className="container mx-auto px-8 lg:px-24">
        <div className="text-center mb-12">
          <h2 className="text-[#FF9F0D] font-greatVibes text-xl mb-2">Food Category</h2>
          <h3 className="font-helvetica font-bold text-4xl text-white">
            <span className="text-[#FF9F0D]">Ch</span>oose Food Item
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            "./food categary1-final.png",
            "./food categary2-final.png",
            "./food categary3.png",
            "./food categary4.png",
          ].map((image, index) => (
            <div
              key={index}
              className="flex justify-center items-center rounded-lg hover:scale-105 transition-transform duration-300 shadow-md shadow-[#FF9F0D]/20"
            >
              <Image
                src={image}
                alt={`Food item ${index + 1}`}
                width={280}
                height={300}
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodCategory;
