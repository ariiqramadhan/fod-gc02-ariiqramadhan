'use client';
import ProductCard from '@/components/ProductCard';
import { BASE_URL } from '@/constant';
import { Product } from '@/types';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Search from './Search';
import ProductList from './ProductList';

export default function ProductsData() {
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const [totalData, setTotalData] = useState(-1);
    const [data, setData] = useState<Product[]>([]);

    async function getProducts(body: { search: string; page: number }) {
        const res = await fetch(BASE_URL + `/api/products?page=${body.page}&search=${body.search}`);
        const products = await res.json();
        setPage(1);
        setData(products.data);
        setTotalData(products.totalData);
    }

    async function nextData() {
        const body = {
            page: page + 1,
            search: search,
        };

        setTimeout(async () => {
            const res = await fetch(BASE_URL + `/api/products?page=${page+1}&search=${search}`);
            const products = await res.json();
            setData(data.concat(products.data));
            setPage(page + 1);
        }, 500);
    }

    useEffect(() => {
        getProducts({ search: '', page: 1 });
    }, []);

    return (
        <>
            <Search
                setSearch={setSearch}
                getProducts={getProducts}
                setData={setData}
            />
            {data?.length ? (
                <InfiniteScroll
                    dataLength={data?.length}
                    next={nextData}
                    hasMore={data?.length === totalData ? false : true}
                    loader={
                        <div className="flex items-center justify-center w-screen">
                            <span className="loading loading-dots loading-lg"></span>
                        </div>
                    }
                    className="grid grid-cols-3 px-16 gap-8 py-8"
                >
                    <ProductList data={data}/>
                </InfiniteScroll>
            ) : ''}
            {data?.length === totalData ? (
                <div className="flex justify-center pb-8 font-semibold text-lg">
                    END OF THE PRODUCTS
                </div>
            ) : (
                ''
            )}
        </>
    );
}
