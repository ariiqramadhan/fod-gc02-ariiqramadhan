import { Product } from '@/types';
import Link from 'next/link';
import RemoveWishlist from './RemoveWishlist';

export default function WishlistCard({ product, wishlistId }: { product: Product, wishlistId: string }) {
    return (
        <div className="border border-[#000] w-full flex items-center gap-8 p-4">
            <div className="flex gap-8 items-center">
                <Link href={`/products/${product.slug}`} className='w-1/4'>
                    <img
                        src={product.thumbnail}
                        alt={product.slug}
                        className="object-cover"
                    />
                </Link>
                <h1 className="font-marcel text-2xl">{product.name}</h1>
            </div>
            <RemoveWishlist wishlistId={wishlistId}/>
        </div>
    );
}
