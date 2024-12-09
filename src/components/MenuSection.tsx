import Image from "next/image"

interface MenuItem {
  name: string
  description: string
  price: string
}

interface MenuSectionProps {
  title: string
  items: MenuItem[]
  imagePosition: "left" | "right"
  image: string
}

export function MenuSection({ title, items, imagePosition, image }: MenuSectionProps) {
  return (
    <section className="mb-16">
      <h2 className="mb-8 text-3xl font-bold">{title}</h2>
      <div className="flex flex-col gap-8 md:flex-row">
        {imagePosition === "left" && (
          <div className="relative h-[400px] w-full overflow-hidden rounded-lg md:w-1/2">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="space-y-6 md:w-1/2">
          {items.map((item, index) => (
            <div key={index} className="flex items-start justify-between gap-4 border-b border-dashed border-gray-200 pb-4">
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
              <span className="text-lg font-semibold text-orange-500">{item.price}</span>
            </div>
          ))}
        </div>
        {imagePosition === "right" && (
          <div className="relative h-[400px] w-full overflow-hidden rounded-lg md:w-1/2">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        )}
      </div>
    </section>
  )
}

