'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image";

interface Product {
    id: number
    name: string
    image: string
    imageUrl: string
    price: number
}

interface ProductCardProps {
    product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
    // const imageUrl = "https://www.instagram.com/p/DLPmhOvRy0H/";
    const handleBuyClick = () => {
        const msg = `Hai, saya mau beli ${product.name} seharga Rp.${product.price}. Lihat gambarnya di sini: ${product.imageUrl}`;
        const whatsapUrl = `https://wa.me/6285179744151?text=${encodeURIComponent(msg)}`
        window.open(whatsapUrl, '_blank')
    }

    return (
        <section className="group bg-white">
            {/* Product Image */}
            <div className="aspect-square overflow-hidden rounded-lg mb-4 bg-gray-50">
                <Image
                    src={`/assets/${product.image}`}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
                />
            </div>

            {/* Product Info */}
            <div className="space-y-2">
                <h3 className="font-medium text-gray-900 text-base leading-tight">
                    {product.name}
                </h3>

                <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-gray-900">
                        Rp. {product.price}
                    </span>

                    <Button
                        onClick={handleBuyClick}
                        size="sm"
                        className="bg-green-600 hover:bg-green-700 text-white text-xs px-3 py-1 h-8"
                    >
                        Buy via WhatsApp
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default ProductCard