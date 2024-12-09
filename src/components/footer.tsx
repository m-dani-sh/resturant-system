import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Clock, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Newsletter Section */}
      <div className="container px-4 py-12 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-6">
          <div className="text-left mb-6 lg:mb-0 lg:w-1/2">
            <h2 className="text-2xl font-semibold mb-2">
              <span className="text-orange-500">S</span>till You Need Our Support?
            </h2>
            <p className="text-gray-400">
              Don&apos;t wait—make a smart &amp; logical quote here. It&apos;s pretty easy.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-2 lg:justify-end lg:w-1/2 mx-auto lg:mx-0">
            <Input
              type="email"
              placeholder="Enter Your Email"
              className="bg-transparent border-gray-700 w-full lg:max-w-xs"
            />
            <Button className="bg-orange-500 hover:bg-orange-600 text-white mt-4 lg:mt-0">
              Subscribe Now
            </Button>
          </div>
        </div>
        <hr className="border-orange-500 my-8" />
      </div>

      {/* Main Footer Content */}
      <div className="container px-4 py-12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-gray-400 text-sm mb-4">
            Corporate clients and leisure travelers rely on us for dependable, safe, and professional chauffeur services worldwide.
          </p>
          <div className="flex items-start gap-2">
            <Clock className="text-orange-500 mt-1" size={20} />
            <div>
              <h4 className="font-semibold">Opening Hours</h4>
              <p className="text-gray-400 text-sm">Mon - Sat (8:00 - 6:00)</p>
              <p className="text-gray-400 text-sm">Sunday - Closed</p>
            </div>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="/about" className="hover:text-orange-500">
                About
              </Link>
            </li>
            <li>
              <Link href="/news" className="hover:text-orange-500">
                News
              </Link>
            </li>
            <li>
              <Link href="/partners" className="hover:text-orange-500">
                Partners
              </Link>
            </li>
            <li>
              <Link href="/team" className="hover:text-orange-500">
                Team
              </Link>
            </li>
            <li>
              <Link href="/menu" className="hover:text-orange-500">
                Menu
              </Link>
            </li>
            <li>
              <Link href="/contacts" className="hover:text-orange-500">
                Contacts
              </Link>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Help?</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="/faq" className="hover:text-orange-500">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-orange-500">
                Terms &amp; Conditions
              </Link>
            </li>
            <li>
              <Link href="/reporting" className="hover:text-orange-500">
                Reporting
              </Link>
            </li>
            <li>
              <Link href="/documentation" className="hover:text-orange-500">
                Documentation
              </Link>
            </li>
            <li>
              <Link href="/support-policy" className="hover:text-orange-500">
                Support Policy
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-orange-500">
                Privacy
              </Link>
            </li>
          </ul>
        </div>

        {/* Recent Posts */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Recent Post</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex gap-3 items-center">
                <Image
                  src={`/footer${item}.jpeg`}
                  alt="Recent post"
                  width={60}
                  height={60}
                  className="rounded"
                />
                <div>
                  <p className="text-sm text-gray-400">20 Feb 2022</p>
                  <p className="text-sm text-gray-400">Keep Your Business</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-orange-500 w-full py-6">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-12">
          <p className="text-white text-sm text-center">
            Copyright © 2022 by Ayeman. All Rights Reserved.
          </p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Facebook size={20} className="text-white hover:text-black" />
            <Twitter size={20} className="text-white hover:text-black" />
            <Instagram size={20} className="text-white hover:text-black" />
            <Youtube size={20} className="text-white hover:text-black" />
          </div>
        </div>
      </div>
    </footer>
  );
}
