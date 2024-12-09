import Image from "next/image"
import { MenuSection } from "@/components/MenuSection"
import { Stats } from "@/components/Stats"
import { Partners } from "@/components/patners"

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[300px] w-full">
        <Image
          src="/.menu20.jpeg"
          alt="Fresh vegetables and herbs"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Our Menu</h1>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-4 py-12">
        {/* Starter Menu */}
        <MenuSection
          title="Starter Menu"
          items={[
            {
              name: "Hand-Grilled Cheese Samosa",
              description: "Stuffed Fresh Cream Cheese with Herbs in the Mix",
              price: "$25",
            },
            {
              name: "Burning Cup Fresh UP",
              description: "Fresh garlic, fresh tomatoes, oregano",
              price: "$29",
            },
            {
              name: "Tremendous Bush Piza Frittage",
              description: "Fresh mix vegetables baked with pizza",
              price: "$45",
            },
            {
              name: "Spicy Vegan Potato Curry",
              description: "Fresh potatoes with special spicy curry sauce",
              price: "$25",
            },
          ]}
          imagePosition="left"
          image="/.menu21.jpeg"
        />

        {/* Main Course */}
        <MenuSection
          title="Main Course"
          items={[
            {
              name: "Cashew Chicken With Stir-Fry",
              description: "Fresh chicken, cashew, veggies",
              price: "$25",
            },
            {
              name: "Vegetables & Green Salad",
              description: "Mixed fresh vegetables with special sauce",
              price: "$45",
            },
            {
              name: "Spicy Vegan Potato Curry",
              description: "Fresh potatoes with curry sauce",
              price: "$35",
            },
          ]}
          imagePosition="right"
          image="/.menu22.jpeg"
        />

        {/* Stats Section */}
        <Stats />

        {/* Dessert Section */}
        <MenuSection
          title="Dessert"
          items={[
            {
              name: "Fig and cream cake",
              description: "Fresh figs, cream cheese, special mix recipe",
              price: "$25",
            },
            {
              name: "Creamy mascarpone cake",
              description: "Fresh cream, mascarpone, special recipe",
              price: "$35",
            },
            {
              name: "Pretty blueberries, lemon juice",
              description: "Blueberries, lemon juice, special mix",
              price: "$45",
            },
            {
              name: "Pain au chocolat",
              description: "Fresh chocolate, butter croissant",
              price: "$25",
            },
          ]}
          imagePosition="left"
          image="/.menu23.jpeg"
        />

        {/* Drinks Section */}
        <MenuSection
          title="Drinks"
          items={[
            {
              name: "Caffe macchiato",
              description: "Fresh coffee beans, cream, special recipe",
              price: "$25",
            },
            {
              name: "Aperol Spritz Capcuccino",
              description: "Fresh coffee, cream, special recipe",
              price: "$25",
            },
            {
              name: "Caffe Latte Caramel",
              description: "Fresh coffee, caramel, special mix",
              price: "$45",
            },
            {
              name: "Tremendous Bush Ice Fromage",
              description: "Special ice cream mix",
              price: "$35",
            },
          ]}
          imagePosition="right"
          image="/.menu24.jpeg"
        />

        {/* Partners Section */}
        <Partners />
      </div>
    </main>
  )
}

