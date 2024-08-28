export default function Home() {
    return (
        <>
            <div className="w-screen h-screen flex justify-center relative">
                <h1 className="text-center self-center text-9xl text-[#FFF] select-none font-cardo">
                    SUMMER 2024
                </h1>
                <img
                    src={'/home/home-img-1.jpg'}
                    alt="test"
                    className="absolute inset-0 bottom-0 top-0 right-0 left-0 object-cover w-screen h-screen bg-no-repeat -z-50"
                />
            </div>
            <div className="p-5 flex overflow-x-auto gap-5">
                <div className="w-[20rem] shrink-0">
                    <img src={'/home/home-feat-1.jpg'} alt="home-feat-1" className="w-full object-cover"/>
                    <div className="font-base text-sm flex justify-between pt-2">
                        <p className="w-1/2">Product I</p>
                        <p className="w-1/2 text-end font-light">$14,405</p>
                    </div>
                </div>
                <div className="w-[20rem] shrink-0">
                    <img src={'/home/home-feat-2.jpg'} alt="home-feat-1" className="w-full object-cover"/>
                    <div className="font-base text-sm flex justify-between pt-2">
                        <p className="w-1/2">Product II</p>
                        <p className="w-1/2 text-end font-light">$14,405</p>
                    </div>
                </div>
                <div className="w-[20rem] shrink-0">
                    <img src={'/home/home-feat-3.jpg'} alt="home-feat-1" className="w-full object-cover"/>
                    <div className="font-base text-sm flex justify-between pt-2">
                        <p className="w-1/2">Product III</p>
                        <p className="w-1/2 text-end font-light">$14,405</p>
                    </div>
                </div>
                <div className="w-[20rem] shrink-0">
                    <img src={'/home/home-feat-4.jpg'} alt="home-feat-1" className="w-full object-cover"/>
                    <div className="font-base text-sm flex justify-between pt-2">
                        <p className="w-1/2">Product IV</p>
                        <p className="w-1/2 text-end font-light">$14,405</p>
                    </div>
                </div>
                <div className="w-[20rem] shrink-0">
                    <img src={'/home/home-feat-5.jpg'} alt="home-feat-1" className="w-full object-cover"/>
                    <div className="font-base text-sm flex justify-between pt-2">
                        <p className="w-1/2">Product V</p>
                        <p className="w-1/2 text-end font-light">$14,405</p>
                    </div>
                </div>
            </div>
            <div className="w-screen h-screen flex gap-5 p-5">
                <div className="flex-1 relative justify-center flex items-center">
                    <h1 className="text-[#FFF] font-marcel text-6xl select-none">UNESSENTIALS</h1>
                    <img
                        src={'/home/home-coll-1.jpg'}
                        className="object-cover h-full absolute top-0 -z-50"
                        alt="coll-1"
                    />
                </div>
                <div className="flex-1 relative justify-center flex items-center">
                    <h1 className="text-[#FFF] font-marcel text-6xl select-none">FEAR OF DOG</h1>
                    <img
                        src={'/home/home-coll-2.jpg'}
                        className="object-cover h-full absolute top-0 -z-50"
                        alt="coll-2"
                    />
                </div>
                <div className="flex-1 relative justify-center flex items-center">
                    <h1 className="text-[#FFF] font-marcel text-6xl select-none">ATHLETICS</h1>
                    <img
                        src={'/home/home-coll-3.jpg'}
                        className="object-cover h-full absolute top-0 -z-50"
                        alt="coll-3"
                    />
                </div>
            </div>
            <div className="flex mx-5 py-5 border-t-2">
                <div className="w-1/2">
                    <h1 className="font-bold text-2xl">FEAR OF DOG</h1>
                    <p className="text-sm w-2/3 font-light">
                        Fear of Dog is a bold and rebellious fashion brand born
                        from the streets of Los Angeles. We specialize in
                        high-quality streetwear and footwear that blend urban
                        edge with luxurious craftsmanship. Inspired by the
                        iconic style of street culture, our designs are for
                        those who walk their own path and aren’t afraid to make
                        a statement.
                    </p>
                </div>
                <div className="w-1/2 flex justify-between relative">
                        <p className="select-none hover:underline">terms & conditions</p>
                        <p className="select-none hover:underline">privacy policy</p>
                        <p className="select-none hover:underline">cookie policy</p>
                        <p className="select-none hover:underline">contact us</p>
                    <p className="text-sm font-light absolute bottom-0 right-0">© copyright 2024</p>
                </div>
            </div>
        </>
    );
}
