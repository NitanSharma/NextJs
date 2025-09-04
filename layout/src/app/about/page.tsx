
import React from 'react'
import  Link from 'next/link' 
// Routing Metadata
export const metadata = {
    title : "About My page",
    description : 'this is about page description'
}
  // it override the parent metadata
const page = () => {
  return ( 
    <> 
    <Link href="/">Home</Link>
    <p>page ****</p> 
    </>
  )
}

export default page