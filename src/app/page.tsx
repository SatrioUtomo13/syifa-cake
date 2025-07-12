import Image from "next/image";
import ProductCard from "./components/ProductCard";
import img1 from "../../public/assets/img1.jpeg"
interface Product {
  id: number
  name: string
  image: string
  imageUrl: string
  price: number
}

const sampleProducts: Product[] = [
  {
    id: 1,
    name: "Whole Burnt CheeseCake",
    image: "img1.jpeg",
    imageUrl: "https://www.instagram.com/p/DK3jZ98x20a/",
    price: 130000
  },
  {
    id: 2,
    name: "CheeseKiz",
    image: "img2.jpeg",
    imageUrl: "https://www.instagram.com/p/DLPmhOvRy0H/",
    price: 25000
  },
  {
    id: 3,
    name: "Burnt CheeseCake",
    image: "img3.jpeg",
    imageUrl: "https://www.instagram.com/p/DJ1t8UqSY-a/",
    price: 20000
  }
]

export default function Home() {
  return (
    <section className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-gray-900">Syifa Cake</h1>
        </div>
      </header>

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-pink-100 to-purple-100 py-12 mb-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            20% OFF ONLY TODAY AND <br />
            GET SPECIAL GIFT!
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            Today only, enjoy a stylish 20% off and receive an exclusive gift!
          </p>
          <p className="text-base text-gray-500">
            Elevate your celebrations now!
          </p>
        </div>
      </div>

      {/* Products Section */}
      <div className="container mx-auto px-4 pb-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <p className="text-sm text-gray-500 mb-2">
              Showing <span className="font-medium">12</span> Results from total <span className="font-medium">127</span> in - <span className="font-medium">Cakes & Desserts</span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Sort by</span>
            <select className="border border-gray-300 rounded px-3 py-1 text-sm">
              <option>Popularity</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
