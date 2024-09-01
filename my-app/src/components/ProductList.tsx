import { Products } from "@/types";
import ProductCard from "./ProductCard";

export default function ProductList({ data } : { data: Products }) {
    return (
        <>
            {data?.map((product, i) => (
                <ProductCard product={product} key={`${product._id}`} />
            ))}
        </>
    );
}
