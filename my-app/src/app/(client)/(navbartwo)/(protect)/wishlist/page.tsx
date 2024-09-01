import WishlistList from "@/components/WishlistList";

export default function Wishlist() {
    return (
        <div className="flex flex-col mt-16 p-16 gap-4 items-center">
            <h1 className="text-4xl font-bold">WISHLIST</h1>
            <WishlistList />
        </div>
    );
}
