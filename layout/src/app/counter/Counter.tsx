"use client"

import { useState } from "react"
import Link from "next/link";

export const Counter = () => {
    const [count, setCount] = useState(0);
    if(count === 10){
      throw new Error("Error , Counter exced to its limit");
    }
  return (
    <div>
      <Link href="/">Home</Link>
        <p>Count : {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

