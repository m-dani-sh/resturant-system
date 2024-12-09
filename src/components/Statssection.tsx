import { ChefHat, UtensilsCrossed, Pizza } from 'lucide-react';

export default function StatSection() {
  return (
    <div className="w-full bg-black/95 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {/* Professional Chefs */}
          <div className="flex flex-col items-center space-y-2" data-aos="fade-up" data-aos-delay="100">
            <div className="h-12 w-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-2">
              <ChefHat className="h-6 w-6 text-amber-500" />
            </div>
            <span className="text-3xl font-bold text-white">420</span>
            <span className="text-sm text-gray-400">Professional Chefs</span>
          </div>

          {/* Items of Food */}
          <div className="flex flex-col items-center space-y-2" data-aos="fade-up" data-aos-delay="200">
            <div className="h-12 w-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-2">
              <svg 
                className="h-6 w-6 text-amber-500" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M3 6h18v3H3zM3 11h18v3H3zM3 16h18v3H3z" />
              </svg>
            </div>
            <span className="text-3xl font-bold text-white">320</span>
            <span className="text-sm text-gray-400">Items of Food</span>
          </div>

          {/* Years of Experience */}
          <div className="flex flex-col items-center space-y-2" data-aos="fade-up" data-aos-delay="300">
            <div className="h-12 w-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-2">
              <UtensilsCrossed className="h-6 w-6 text-amber-500" />
            </div>
            <span className="text-3xl font-bold text-white">304</span>
            <span className="text-sm text-gray-400">Years Of Experience</span>
          </div>

          {/* Happy Customers */}
          <div className="flex flex-col items-center space-y-2" data-aos="fade-up" data-aos-delay="400">
            <div className="h-12 w-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-2">
              <Pizza className="h-6 w-6 text-amber-500" />
            </div>
            <span className="text-3xl font-bold text-white">220</span>
            <span className="text-sm text-gray-400">Happy Customers</span>
          </div>
        </div>
      </div>
    </div>
  );
}
