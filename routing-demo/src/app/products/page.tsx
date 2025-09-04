import Link from "next/link"
export default function ProductList(){
    const productId = 100;
    return (
        <>
        <Link href="/">Home</Link>
        <h1>Product List</h1>
        <h2>Product 1</h2>
        <h2>Product 2</h2>
        <h2>Product 3</h2>
        <h2>
            <Link href={`/products/${productId}`} replace>Product {productId}</Link>
            {/* this replace will go to straight Home page */}
        </h2>
        </>
    )
}