export default function ProductDetail({ params }: { params: { slug: string } }) {
    return (
        <h1 className="text-black w-screen h-[calc(100vh-4rem)] mt-16">DETAIL: {params.slug}</h1>
    )
}