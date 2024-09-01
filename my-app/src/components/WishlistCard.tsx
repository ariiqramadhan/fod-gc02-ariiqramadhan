import { Product } from "@/types";

export default function WishlistCard({ product } : { product: Product }) {
    return (
        <div className="border border-[#000] w-full flex items-center gap-8">
            <img
                src={product.thumbnail}
                alt={product.slug}
                className="w-1/5 p-4 object-cover"
            />
            <h1 className="font-marcel text-2xl">
                {product.name}
            </h1>
        </div>
    );
}
