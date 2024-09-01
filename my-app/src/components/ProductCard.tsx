import { toCurrency } from '@/db/helpers/currency';
import { Product } from '@/types';
import Link from 'next/link';
import AddWishlistProduct from './AddWishlistProduct';

export default function ProductCard({ product }: { product: Product }) {
    return (
        <div>
            <div className="relative">
                <img
                    src={product.thumbnail}
                    alt="test"
                    className="w-full h-[36rem] object-cover"
                />
                <AddWishlistProduct productId={`${product._id}`}/>
            </div>
            <Link href={`/products/${product.slug}`}>
                <div className="font-base text-sm flex justify-between pt-2">
                    <p className="w-1/2">{product.name.toUpperCase()}</p>
                    <p className="w-1/2 text-end font-light">
                        {toCurrency(product.price)}
                    </p>
                </div>
            </Link>
        </div>
    );
}
