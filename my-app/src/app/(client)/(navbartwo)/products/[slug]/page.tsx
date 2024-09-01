import AddWishlist from '@/components/AddWishlist';
import { BASE_URL } from '@/constant';
import { toCurrency } from '@/db/helpers/currency';
import { Product } from '@/types';
import { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata(
    { params }: { params: { slug: string } },
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    const data = await fetch(BASE_URL + `/api/products/${params.slug}`);
    const product = (await data.json()) as Product;
   
    return {
      title: `Product ${product.name}`,
      description: product.excerpt
    }
}

export default async function ProductDetail({
    params,
}: {
    params: { slug: string };
}) {
    const data = await fetch(BASE_URL + `/api/products/${params.slug}`);
    const product = (await data.json()) as Product;

    return (
        <div className="w-screen mt-16 p-16">
            <div className="flex gap-8">
                <div className="w-2/3">
                    <div className="grid grid-cols-2 gap-4">
                        {product.images.map((img, i) => (
                            <div key={i}>
                                <img
                                    src={img}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-1/3 flex flex-col gap-8">
                    <div>
                        <h1 className="font-marcel text-xl">{product.name}</h1>
                        <p className="font-light">
                            {toCurrency(product.price)}
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-justify font-marcel text-sm">
                            {product.description}
                        </p>
                        <div className='flex gap-4'>
                            {product.tags.map((tag, i) => (
                                <button key={i} className='btn btn-sm rounded-none bg-[#FFF] border-[#000] text-xs hover:text-[#FFF] hover:bg-[#000] hover:border-[#000]'>{tag.toUpperCase()}</button>
                            ))}
                        </div>
                        <AddWishlist params={params}/>
                    </div>
                    <div className="flex flex-col gap-4 pt-4">
                        <h1 className="text-sm">
                            ALL SALES OF THIS ITEM ARE FINAL
                        </h1>
                        <h1 className="text-sm select-none hover:underline">
                            DETAILS
                        </h1>
                        <h1 className="text-sm select-none hover:underline">
                            SHIPPING POLICY
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
