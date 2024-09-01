"use client"
import debounce from "debounce";
import { Dispatch, SetStateAction } from "react";

export default function Search({ setSearch }: { setSearch: Dispatch<SetStateAction<string>> }) {
    function test(e: React.ChangeEvent<HTMLInputElement>) {
        console.log(e.target.value);
        console.log('test')
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
