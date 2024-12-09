"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleCart = () => {
    router.push("/shoppingcart");
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu open/close state
  };

  const handleNavLinkClick = () => {
    setIsMenuOpen(false); // Close the menu after clicking a link
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Blog", path: "/blog" },
    { name: "Pages", path: "/shopdetail" },
    { name: "About", path: "/about" },
    { name: "Shop", path: "/shop" },
    { name: "Contact", path: "/signup" },
  ];

  return (
    <div>
      {/* Logo Section */}
      <div className="bg-[#131111] py-3 text-center text-white font-bold text-2xl">
        <span className="text-[#ff9f0d]">Food</span> Tuck
      </div>

      {/* Header Section */}
      <div className="bg-[#131111] p-4">
        <div className="flex justify-between items-center max-w-[1200px] mx-auto">
          {/* Hamburger Menu (Mobile) */}
          <button
            className="lg:hidden text-white text-2xl"
            onClick={handleMenuToggle}
          >
            {isMenuOpen ? "✖" : "☰"} {/* Switch between hamburger and close icon */}
          </button>

          {/* Navigation Menu */}
          <nav
            className={`${
              isMenuOpen ? "block" : "hidden"
            } lg:flex lg:items-center absolute lg:static bg-[#131111] top-[60px] left-0 w-full lg:w-auto p-4 lg:p-0 z-10`}
          >
            {/* Overlay Background for Mobile */}
            {isMenuOpen && (
              <div
                className="absolute top-0 left-0 w-full h-screen bg-black opacity-50 lg:hidden"
                onClick={() => setIsMenuOpen(false)} // Close the menu when clicking the background
              />
            )}
            <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8 z-20 relative">
              {navLinks.map((link) => (
                <li key={link.path} className="group relative">
                  <Link
                    href={link.path}
                    onClick={handleNavLinkClick} // Close menu on link click
                    className="text-white hover:text-[#ff9f0d] transition"
                  >
                    {link.name}
                  </Link>
                  {/* Dot effect on hover */}
                  <span className="absolute left-1/2 bottom-[-6px] transform -translate-x-1/2 w-2 h-2 bg-[#ff9f0d] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </li>
              ))}
            </ul>
          </nav>

          {/* Search and Cart */}
          <div className="flex items-center gap-4">
            {/* Search Input */}
            <div className="hidden lg:flex items-center relative">
              <input
                type="text"
                placeholder="Search.."
                className="text-white bg-transparent border border-[#ff9f0d] rounded-full px-4 py-2 focus:outline-none"
              />
              <CiSearch className="absolute right-2 text-[#ff9f0d]" />
            </div>

            {/* Cart Icon */}
            <div onClick={handleCart} className="cursor-pointer">
              <Image
                src="./cart.png"
                alt="Cart"
                width={20}
                height={20}
                className="w-5 h-5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
