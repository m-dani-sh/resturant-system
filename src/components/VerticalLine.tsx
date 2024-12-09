import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const VerticalLine = () => {
  return (
    <div>
      {/* Vertical Line with Social Media Logos */}
      <div className="flex flex-col items-center mt-12">
        {/* Vertical Line */}
        <div className="h-[150px] w-[2px] bg-white mb-4"></div> 

        {/* Social Media Logos */}
        <div className="flex flex-col items-center gap-4">
          <Link href="https://facebook.com" target="_blank">
            <Image
              src="./facebook-logo.png" // Replace with the actual Facebook icon path
              alt="Facebook"
              width={30}
              height={30}
              className="hover:opacity-80 transition duration-300 rounded-full"
            />
          </Link>
          <Link href="https://twitter.com" target="_blank">
            <Image
              src="./twiter-logo-final.png" // Replace with the actual Twitter icon path
              alt="Twitter"
              width={30}
              height={30}
              className="hover:opacity-80 transition duration-300 rounded-full"
            />
          </Link>
          <Link href="https://third-social.com" target="_blank">
            <Image
              src="./third-logo-final.jpeg" 
              alt="Third Logo"
              width={30}
              height={30}
              className="hover:opacity-80 transition duration-300 rounded-full"
            />
          </Link>
        </div>
        
        {/* Another Vertical Line */}
        <div className="h-[150px] w-[2px] bg-white mb-4 mt-4"></div> 
      </div>
    </div>
  );
}

export default VerticalLine;
