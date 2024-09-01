"use client"
import { Product } from "@/types";
import debounce from "debounce";
import { Dispatch, SetStateAction } from "react";

export default function Search({ setSearch, getProducts, setData }: { setSearch: Dispatch<SetStateAction<string>>, getProducts: any, setData: Dispatch<SetStateAction<Product[]>>}) {
    function test(e: React.ChangeEvent<HTMLInputElement>) {
        setSearch(e.target.value);
        getProducts({search: e.target.value, page: 1});
    }
    return (
        <div className="px-16 flex justify-end pt-8" id="search">
            <div className="w-1/4">
                <input
                    type="text"
                    placeholder="Search"
                    className="border border-[#000] p-1 focus:outline-none rounded-none w-full"
                    onChange={debounce(test, 500)}
                />
            </div>
        </div>
    );
}
