export default function Home() {
    return (
        <>
            <div className="w-screen h-screen flex justify-center relative">
                <h1 className="text-center self-center text-9xl text-[#FFF] select-none font-cardo">SUMMER 2024</h1>
                <img
                    src={'/home/home-img-1.jpg'}
                    alt="test"
                    className="absolute inset-0 bottom-0 top-0 right-0 left-0 object-cover w-screen h-screen bg-no-repeat -z-50"
                />
            </div>
            <div className="w-screen flex gap-5 p-5">
                <div className="flex-1">
                    <img src={'/home/home-coll-1.jpg'} className="object-cover h-full" alt="coll-1" />
                </div>
                <div className="flex-1">
                    <img src={'/home/home-coll-2.jpg'} className="object-cover h-full" alt="coll-2" />
                </div>
                <div className="flex-1">
                    <img src={'/home/home-coll-3.jpg'} className="object-cover h-full" alt="coll-3" />
                </div>
            </div>
        </>
    );
}
