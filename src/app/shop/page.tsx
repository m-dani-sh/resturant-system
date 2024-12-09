import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"

export default function ShopPage() {
  // List of products
  const products = [
    { name: "Fresh Salad", price: "12.99", category: "Salads" },
    { name: "Gourmet Burger", price: "15.99", category: "Burgers" },
    { name: "Pizza Slice", price: "8.99", category: "Pizza" },
    { name: "Classic Burger", price: "13.99", category: "Burgers" },
    { name: "Orange Juice", price: "4.99", category: "Drinks" },
    { name: "Pepperoni Pizza", price: "16.99", category: "Pizza" },
    { name: "Double Burger", price: "18.99", category: "Burgers" },
    { name: "Fresh Smoothie", price: "6.99", category: "Drinks" },
    { name: "Margherita Pizza", price: "14.99", category: "Pizza" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative h-[200px] w-full">
        <Image
          src="./shop.jpeg"
          alt="Fresh vegetables and greens"
          className="object-cover"
          fill
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-3xl font-bold text-white">Our Shop</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-grow">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <div key={index} className="group relative">
                  <div className="relative h-48 w-full overflow-hidden rounded-lg">
                    {/* Dynamically set image source */}
                    <Image
                      src={`./shop${(index % 15) + 1}.jpeg`} // Dynamic image path
                      alt={product.name}
                      className="object-cover transition-transform group-hover:scale-105"
                      fill
                    />
                  </div>
                  <div className="mt-4 space-y-2">
                    <Badge variant="secondary">{product.category}</Badge>
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-muted-foreground">${product.price}</p>
                    <Button className="w-full">Add to Cart</Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center gap-2">
              {[1, 2, 3].map((page) => (
                <Button
                  key={page}
                  variant={page === 1 ? "default" : "outline"}
                  size="icon"
                >
                  {page}
                </Button>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full md:w-64 space-y-8">
            {/* Search */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Search Products</h2>
              <div className="flex gap-2">
                <Input placeholder="Search..." className="flex-1" />
                <Button variant="default">
                  Search
                </Button>
              </div>
            </div>

            {/* Categories */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Category</h2>
              <div className="space-y-2">
                {['Burgers', 'Pizza', 'Salads', 'Drinks', 'Desserts'].map((category) => (
                  <div key={category} className="flex items-center gap-2">
                    <input type="checkbox" id={category} className="h-4 w-4" />
                    <label htmlFor={category} className="text-sm">{category}</label>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Filter By Price</h2>
              <Slider defaultValue={[50]} max={100} step={1} />
              <div className="flex justify-between text-sm">
                <span>$0</span>
                <span>$100</span>
              </div>
            </div>

            {/* Featured Product */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Featured Product</h2>
              <div className="relative h-[200px] rounded-lg overflow-hidden">
                <Image
                  src="./shop16.jpeg"
                  alt="Featured product"
                  className="object-cover"
                  fill
                />
              </div>
            </div>

            {/* Latest Products */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Latest Products</h2>
              <ScrollArea className="h-[300px]">
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div key={item} className="flex gap-4">
                      <div className="relative h-16 w-16 flex-shrink-0">
                        <Image
                          src={`./shop${(item % 15) + 1}.jpeg`} // Dynamic image path for latest products
                          alt={`Latest product ${item}`}
                          className="object-cover rounded"
                          fill
                        />
                      </div>
                      <div>
                        <h3 className="font-medium">Product {item}</h3>
                        <p className="text-sm text-muted-foreground">$19.99</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
