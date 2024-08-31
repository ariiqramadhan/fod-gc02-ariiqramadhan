import { toCurrency } from "@/db/helpers/currency";
import { Product } from "@/types";

export default function ProductCard({ product }: { product: Product }) {
    return (
        <div>
            <img
                src={product.thumbnail}
                alt="test"
                className="w-full h-[36rem] object-cover"
            />
            <div className="font-base text-sm flex justify-between pt-2">
                <p className="w-1/2">{product.name.toUpperCase()}</p>
                <p className="w-1/2 text-end font-light">{toCurrency(product.price)}</p>
            </div>
        </div>
    );
}
