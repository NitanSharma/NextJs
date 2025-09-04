import { Metadata } from 'next'
import { Counter } from './Counter'


export const metadata : Metadata = {
    title : "Counter",
    
}

export default function Counterpage () {
  return (
    <>
    <Counter/>
    </>
  )
}
