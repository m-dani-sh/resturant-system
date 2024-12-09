import { FaCheck } from "react-icons/fa";
import Image from "next/image";

export default function About() {
  return (
    <div className="bg-[#0D0D0D] min-h-screen">
      <main className="container mx-auto px-8 lg:px-24 py-12">
        <div className="bg-[#0D0D0D] rounded-lg grid grid-cols-1 md:grid-cols-2 gap-12 p-8">
          {/* Left Side - Text Content */}
          <div className="text-white">
            <h1 className="text-2xl font-myCustomFont italic font-bold mb-2">About Us</h1>
            <h2 className="text-4xl font-bold font-helvetica mb-6">
              <span className="text-yellow-400">We </span>Create the Best <br /> Foody Product
            </h2>
            <p className="text-sm text-gray-400 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui. Sed
              ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <FaCheck className="text-yellow-400 mt-1" />
                <p>Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
              </div>
              <div className="flex items-start gap-3">
                <FaCheck className="text-yellow-400 mt-1" />
                <p>Quisque diam pellentesque bibendum non dui volutpat fringilla.</p>
              </div>
              <div className="flex items-start gap-3">
                <FaCheck className="text-yellow-400 mt-1" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <button
              className="inline-block bg-[#FF9F0D] text-black font-medium text-sm lg:text-base px-8 py-3 rounded-full shadow-lg hover:bg-[#E68A00] transition duration-300"
            >
              Read More
            </button>
          </div>

          {/* Right Side - Images */}
          <div className="grid grid-rows-2 gap-6">
            {/* About 1 Image - Takes Full Row */}
            <div className="relative w-full h-64 rounded-lg overflow-hidden">
              <Image
                src="./about1.png"
                alt="Delicious food"
                layout="fill"
                objectFit="cover"
                className="shadow-none"
              />
            </div>

            {/* About 2 and About 3 Images - Split Row */}
            <div className="grid grid-cols-2 gap-6">
              <div className="relative w-full h-64 rounded-lg overflow-hidden">
                <Image
                  src="./about2.png"
                  alt="Delicious food"
                  layout="fill"
                  objectFit="cover"
                  className="shadow-none"
                />
              </div>
              <div className="relative w-full h-64 rounded-lg overflow-hidden">
                <Image
                  src="/about3.png"
                  alt="Delicious food"
                  layout="fill"
                  objectFit="cover"
                  className="shadow-none"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
