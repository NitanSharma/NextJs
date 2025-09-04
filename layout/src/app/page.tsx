import Link from "next/link"

export default function Home() {
  return (
    <div className=" ">
       <h1>Hello</h1>
       <div className="flex gap-4 text-lg font-semibold hover:opacity-50">
        <Link href="/blog">Blog</Link>
       <Link href="/counter">Counter</Link>
       <Link href="/about">About</Link>
       <Link href="/order-product">Product</Link> 
       </div>
       
    </div>
   
  )
}
