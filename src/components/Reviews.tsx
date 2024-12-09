'use client'
import { useState } from 'react'
import Image from 'next/image'
import { QuoteIcon } from 'lucide-react'

const testimonials = [
  {
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.",
    author: "Alamin Hasan",
    role: "Food Specialist",
    rating: 4,
    image: "./review1.jpeg"
  },
  {
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: "Sara S.,",
    role: "Chef",
    rating: 5,
    image: "./review2.jpeg"
  },
  {
    content: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed sollicitudin erat non lectus fermentum, vel tempor orci malesuada. Morbi lacinia bibendum est, vitae fermentum erat.",
    author: "John Doe",
    role: "Food Enthusiast",
    rating: 3,
    image: "./review3.jpeg"
  },
  // Add more testimonials as needed
]

export default function Reviews() {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <div className="w-full bg-black min-h-[770px] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Purple border effect */}
      <div className="absolute inset-0 m-8 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-white text-4xl font-['Playfair_Display'] mb-2">
            What our clients are saying
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="bg-white rounded-lg p-8 pt-16 relative sm:p-6 md:p-8">
          {/* Profile Image */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
            <div className="w-24 h-24 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden">
              <Image
                src={testimonials[currentSlide].image}
                alt={testimonials[currentSlide].author}
                width={96}
                height={96}
                className="object-cover"
              />
            </div>
          </div>

          {/* Quote Icon */}
          <QuoteIcon className="w-12 h-12 text-purple-600 mx-auto mb-6" />

          {/* Content */}
          <p className="text-gray-600 text-lg mb-6 leading-relaxed sm:text-base md:text-lg">
            {testimonials[currentSlide].content}
          </p>

          {/* Rating */}
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 ${i < testimonials[currentSlide].rating ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {/* Author */}
          <h3 className="text-xl font-semibold text-gray-900 sm:text-lg md:text-xl">
            {testimonials[currentSlide].author}
          </h3>
          <p className="text-gray-500">{testimonials[currentSlide].role}</p>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index
                  ? 'bg-purple-600'
                  : 'bg-purple-200'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
