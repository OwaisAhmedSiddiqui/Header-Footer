import Link from "next/link"
export default function Footer(){

    return(

        <ul className=" flex gap-10 bg-blue-600 ">
    <li><Link href="/">Home</Link></li>
    <li><Link href="/about">About</Link></li>
    <li><Link href="/image">Image</Link></li>
    
    </ul>
    
    )
}