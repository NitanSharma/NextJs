"use client"
import { useRouter } from "next/navigation"
// Navigating Programmatically
// useRouter work only on client components
export default function OrderProduct(){
    const router = useRouter();
    const handelClick = () => {
        console.log("Placing your order");
        router.push('/');
    }
    return (
        <>
        <h1>Order Product</h1>
        <button className="text-lg font-semibold rounded-2xl bg-blue-200 px-10 py-5"  onClick={handelClick} >Place order</button>
        </>
    )
}