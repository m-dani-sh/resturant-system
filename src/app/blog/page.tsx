import Image from "next/image"
import { Share2, MessageCircle, Heart } from 'lucide-react'

export default function Blog() {
  const posts = [
    {
      id: 1,
      date: "10 February 2022",
      title: "Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis",
      image: "/blog1.jpeg",
    },
    {
      id: 2,
      date: "10 February 2022",
      title: "Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A",
      image: "/blog2.jpeg",
    },
    {
      id: 3,
      date: "10 February 2022",
      title: "Curabitur rutrum velit ac congue malesuada",
      image: "/blog3.jpeg",
      tag: "Mamas Recipes",
    },
  ]

  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
          <span className="text-[#FFA500]">La</span>test News & Blog
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article key={post.id} className="bg-[#1A1A1A] rounded-lg overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                {post.tag && (
                  <span className="absolute top-4 right-4 bg-[#FF1493] text-white text-xs font-bold py-1 px-2 rounded">
                    {post.tag}
                  </span>
                )}
              </div>
              <div className="p-6">
                <time className="text-[#808080] text-sm">{post.date}</time>
                <h3 className="text-lg font-semibold mt-2 mb-4 line-clamp-2">{post.title}</h3>
                <div className="flex items-center justify-between">
                  <button className="text-[#FFA500] text-sm font-semibold hover:underline">
                    Learn More
                  </button>
                  <div className="flex items-center space-x-4">
                    <button className="text-[#808080] hover:text-white">
                      <Heart size={18} />
                    </button>
                    <button className="text-[#808080] hover:text-white">
                      <MessageCircle size={18} />
                    </button>
                    <button className="text-[#808080] hover:text-white">
                      <Share2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

