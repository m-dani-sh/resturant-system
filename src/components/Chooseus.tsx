import Image from 'next/image';
import { PiHamburgerLight } from "react-icons/pi";
import { TbGlassFull } from "react-icons/tb";

const WhyChooseUs = () => {
    return (
        <div className="bg-[#0D0D0D] py-8 min-h-screen">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 px-4">
                {/* Left Section - Images */}
                <div className="grid grid-rows-3 gap-6">
                    {/* Upper row with 2 images */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="relative w-full h-48 rounded-lg overflow-hidden">
                            <Image
                                src="./choose1.jpeg"
                                alt="Food 1"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                            />
                        </div>
                        <div className="relative w-full h-48 rounded-lg overflow-hidden">
                            <Image
                                src="./choose2.jpeg"
                                alt="Food 2"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                            />
                        </div>
                    </div>

                    {/* Middle row with 3 images */}
                    <div className="grid grid-cols-3 gap-4">
                        <div className="relative w-full h-48 rounded-lg overflow-hidden">
                            <Image
                                src="./choose3.jpeg"
                                alt="Food 3"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                            />
                        </div>
                        <div className="relative w-full h-48 rounded-lg overflow-hidden">
                            <Image
                                src="./choose4.jpeg"
                                alt="Food 4"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                            />
                        </div>
                        <div className="relative w-full h-48 rounded-lg overflow-hidden">
                            <Image
                                src="./choose5.jpeg"
                                alt="Food 5"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                            />
                        </div>
                    </div>

                    {/* Lower row with 1 image */}
                    <div className="relative w-full h-48 rounded-lg overflow-hidden">
                        <Image
                            src="./choose6.jpeg"
                            alt="Food 6"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                </div>

                {/* Right Section - Text Content */}
                <div className="text-white flex flex-col justify-start space-y-8">
                    <h3 className="text-xl italic font-bold text-[#FF9F0D]">Why Choose Us</h3>
                    <h3 className="text-4xl font-helvetica font-bold">
                        <span className='text-[#FF9F0D]'>Ex</span>tra ordinary taste <br /> and experienced
                    </h3>

                    <p className="text-gray-400 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
                    </p>

                    {/* Logos and Names */}
                    <div className="grid grid-cols-3 gap-4 text-center">
                        {/* Hamburger Icon */}
                        <div className="flex flex-col items-center">
                            <PiHamburgerLight className='bg-[#FF9F0D] text-8xl p-4 font-extrabold mb-2' />
                            <h5 className="text-2xl font-bold text-white">Fast Food</h5>
                        </div>

                        {/* Lunch Icon */}
                        <div className="flex flex-col items-center">
                            <Image
                                src="./lunch.png"
                                alt="Lunch"
                                layout="intrinsic"
                                width={100}
                                height={100}
                                className="bg-[#FF9F0D] p-4 rounded-full mb-2"
                            />
                            <h5 className="text-2xl font-bold text-white">Lunch</h5>
                        </div>

                        {/* Dinner Icon */}
                        <div className="flex flex-col items-center">
                            <TbGlassFull className='bg-[#FF9F0D] p-4 text-8xl font-extrabold mb-2' />
                            <h5 className="text-2xl font-bold text-white">Dinner</h5>
                        </div>
                    </div>

                    {/* Experience Section */}
                    <div className="flex items-center justify-center mt-4">
                        <h5 className="text-2xl font-bold bg-[#FFFFFF] text-black p-6">
                            <span className='text-[#FF9F0D] p-4 w-auto'>30+</span> Years of <br />
                            <span className='font-bold'>Experience</span>
                        </h5>
                    </div>
                </div>

            </div>
        </div>
            );
};

            export default WhyChooseUs;
