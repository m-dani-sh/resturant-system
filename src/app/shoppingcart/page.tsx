import Image from "next/image"
import { MinusIcon, PlusIcon, XIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Product {
  id: number
  name: string
  price: number
  rating: number
  image: string
  quantity: number
}

export default function ShoppingCart() {
  const products: Product[] = [
    {
      id: 1,
      name: "Burger",
      price: 55.0,
      rating: 4,
      image: "/shop2.jpeg",
      quantity: 1,
    },
    {
      id: 2,
      name: "Fresh Lime",
      price: 82.0,
      rating: 5,
      image: "/shop4.jpeg",
      quantity: 1,
    },
    {
      id: 3,
      name: "Pizza",
      price: 97.0,
      rating: 3,
      image: "/shop6.jpeg",
      quantity: 1,
    },
    {
      id: 4,
      name: "Chocolate Muffin",
      price: 45.0,
      rating: 4,
      image: "/shop8.jpeg",
      quantity: 1,
    },
    {
      id: 5,
      name: "Chinese Butter",
      price: 97.0,
      rating: 3,
      image: "/shop10.jpeg",
      quantity: 1,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div
        className="relative h-[200px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/shop.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60">
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-3xl font-bold text-white">Shopping Cart</h1>
            <div className="mt-2 text-sm text-gray-300">
              <span>Home</span>
              <span className="mx-2">›</span>
              <span>Shopping cart</span>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Product List */}
          <div className="overflow-x-auto bg-white rounded-lg shadow">
            <table className="w-full">
              <thead>
                <tr className="border-b text-left">
                  <th className="px-6 py-4 font-medium">Product</th>
                  <th className="px-6 py-4 font-medium">Price</th>
                  <th className="px-6 py-4 font-medium">Quantity</th>
                  <th className="px-6 py-4 font-medium">Total</th>
                  <th className="px-6 py-4 font-medium">Remove</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={80}
                          height={80}
                          className="rounded-lg"
                        />
                        <div>
                          <h3 className="font-medium">{product.name}</h3>
                          <div className="mt-1">
                            {Array.from({ length: 5 }).map((_, index) => (
                              <span
                                key={index}
                                className={`text-sm ${index < product.rating ? "text-yellow-400" : "text-gray-300"}`}
                              >
                                ★
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">${product.price.toFixed(2)}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="icon" className="h-8 w-8">
                          <MinusIcon className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center">{product.quantity}</span>
                        <Button variant="outline" size="icon" className="h-8 w-8">
                          <PlusIcon className="h-3 w-3" />
                        </Button>
                      </div>
                    </td>
                    <td className="px-6 py-4">${(product.price * product.quantity).toFixed(2)}</td>
                    <td className="px-6 py-4">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-gray-700">
                        <XIcon className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Coupon Code and Total Bill */}
          <div className="bg-white rounded-lg shadow p-6 flex justify-between items-center space-x-8">
            {/* Coupon Section */}
            <div className="flex items-center gap-2">
              <Input placeholder="Enter coupon code" className="flex-grow" />
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6">
                Apply
              </Button>
            </div>

            {/* Total Section */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Cart Subtotal</span>
                <span>$376.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Shipping Charge</span>
                <span>$30.00</span>
              </div>
              <div className="flex justify-between border-t pt-2 font-medium">
                <span>Total Amount</span>
                <span>$406.00</span>
              </div>
            </div>
          </div>

          {/* Proceed to Checkout Button */}
          <Button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white">
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </div>
  )
}
