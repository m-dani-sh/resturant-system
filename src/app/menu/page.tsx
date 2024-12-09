import React from 'react';
import Image from 'next/image';

const menuItems = [
  { 
    name: 'Lettuce Leaf',
    description: 'Lacus nisi, et ac dapibus velit in consequat.',
    price: 12.55,
    image: '/menu2.jpeg',
  },
  {
    name: 'Fresh Breakfast',
    description: 'Lacus nisi, et ac dapibus velit in consequat.',
    price: 14.55,
    image: '/menu4.jpeg',
  },
  {
    name: 'Mild Butter',
    description: 'Lacus nisi, et ac dapibus velit in consequat.',
    price: 20.55,
    image: '/menu6.jpeg',
  },
  {
    name: 'Fresh Bread',
    description: 'Lacus nisi, et ac dapibus velit in consequat.',
    price: 12.55,
    image: '/menu8.jpeg',
  },
  {
    name: 'Glow Cheeze',
    description: 'Lacus nisi, et ac dapibus velit in consequat.',
    price: 12.55,
    image: '/menu3.jpeg',
  },
  {
    name: 'Italian Pizza',
    description: 'Lacus nisi, et ac dapibus velit in consequat.',
    price: 14.55,
    image: '/menu5.jpeg',
  },
  {
    name: 'Slice Beef',
    description: 'Lacus nisi, et ac dapibus velit in consequat.',
    price: 12.55,
    image: '/menu7.jpeg',
  },
  {
    name: 'Mushroom Pizza',
    description: 'Lacus nisi, et ac dapibus velit in consequat.',
    price: 12.55,
    image: '/menu9.jpeg',
  },
];

const Menu = () => {
  return (
    <div className="bg-[#0D0D0D] text-white px-8 py-12">
      <h2 className="text-xl italic text-center text-[#FF9F0D]">Choose & Pick</h2>
      <h2 className="text-3xl font-bold text-center pb-8 mt-4">
        <span className="text-[#FF9F0D]">Fr</span>om Our Menu
      </h2>

      <nav className="mb-8">
        <ul className="flex gap-10 justify-center text-lg font-semibold overflow-x-auto">
          <li className="text-[#FF9F0D]">Breakfast</li>
          <li className="text-[#FFFFFF] hover:text-[#FF9F0D] transition-colors">Lunch</li>
          <li className="text-[#FFFFFF] hover:text-[#FF9F0D] transition-colors">Dinner</li>
          <li className="text-[#FFFFFF] hover:text-[#FF9F0D] transition-colors">Dessert</li>
          <li className="text-[#FFFFFF] hover:text-[#FF9F0D] transition-colors">Drink</li>
          <li className="text-[#FFFFFF] hover:text-[#FF9F0D] transition-colors">Snack</li>
          <li className="text-[#FFFFFF] hover:text-[#FF9F0D] transition-colors">Soup</li>
        </ul>
      </nav>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Side Large Image */}
        <div className="flex justify-center items-center lg:flex-1 mb-8 lg:mb-0">
          <div className="w-full max-w-[400px] h-[400px] overflow-hidden rounded-lg relative">
            <Image
              src="/menu1.png"
              alt="Menu Image 1"
              width={600}
              height={600}
              className="object-cover absolute inset-0 z-10"
            />
            <Image
              src="/menu-side.png"
              alt="Menu Image 2"
              width={600}
              height={600}
              className="object-cover opacity-75 absolute inset-0"
            />
          </div>
        </div>

        {/* Right Side Grid for Menu Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:flex-1">
          {menuItems.map((item, index) => (
            <div key={index} className="bg-[#1A1A1A] p-4 rounded-lg flex flex-col sm:flex-row items-center">
              <Image
                src={item.image}
                alt={item.name}
                width={80}
                height={79}
                className="rounded-lg object-cover mr-4 mb-4 sm:mb-0"
              />
              <div>
                <h4 className="text-lg font-bold mb-1">{item.name}</h4>
                <p className="text-gray-400 mb-2">{item.description}</p>
                <p className="font-bold text-[#FF9F0D]">${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
