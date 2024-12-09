import Image from "next/image";
import { Facebook, Heart, Instagram, Minus, Plus, Share2, Twitter } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ShopDetails() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative h-48 bg-black">
        <Image
          src="/shop.jpeg"
          alt="Shop Details Banner"
          width={1920}
          height={192}
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl font-bold text-white">Shop Details</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-video overflow-hidden rounded-lg border">
              <Image
                src="/shopdetail.jpeg"
                alt="Yummy Chicken Chup"
                width={600}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className="relative aspect-video overflow-hidden rounded-lg border">
                  <Image
                    src={`/shopdetail${index}.jpeg`} // Adjust image source based on index
                    alt={`Thumbnail ${index}`}
                    width={150} // Increase width for vertical look
                    height={200} // Increase height to maintain aspect ratio
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Yummy Chicken Chup</h2>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ligula enim, varius nec magna quis, eleifend porta
              elit. Sed vitae porttitor neque. Integer ullamcorper ipsum vel risus venenatis.
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold">$4.00</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className={`h-5 w-5 ${star <= 3 ? "fill-primary text-primary" : "fill-muted text-muted-foreground"}`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center rounded-lg border">
                <Button variant="ghost" size="icon">
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center">1</span>
                <Button variant="ghost" size="icon">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600">Add to Cart</Button>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon">
                <Heart className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Instagram className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Description */}
        <div className="mt-12 space-y-6">
          <h3 className="text-2xl font-bold">Description</h3>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ligula enim, varius nec magna quis, eleifend porta
            elit. Sed vitae porttitor neque. Integer ullamcorper ipsum vel risus venenatis, vitae blandit dolor molestie.
            Sed sit amet blandit dui. Fusce faucibus justo eu odio tincidunt, id facilisis augue efficitur.
          </p>
          <ul className="list-inside list-disc space-y-2 text-muted-foreground">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li>Sed do eiusmod tempor incididunt ut labore</li>
            <li>Ut enim ad minim veniam, quis nostrud exercitation</li>
            <li>Duis aute irure dolor in reprehenderit</li>
          </ul>
        </div>

        {/* Similar Products */}
        <div className="mt-12">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">Similar Products</h3>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Minus className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((index) => (
              <Card key={index}>
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="/shop.jpeg"
                    alt={`Similar Product ${index}`}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold">Similar Product {index}</h4>
                  <p className="text-sm text-muted-foreground">$4.99</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
