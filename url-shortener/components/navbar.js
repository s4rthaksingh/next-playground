import React from "react";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="h-15 bg-purple-500 flex justify-between px-10 items-center text-white">
            <div className="logo font-bold text-lg">QLinks</div>
            <ul className="flex justify-around items-center gap-4">
                <Link href="/"><li>Home</li></Link>
                <Link href="/about"><li>About</li></Link>
                <Link href="/generate"><li>Shorten</li></Link>
                <Link href="/contact"><li>Contact us</li></Link>
                <li className="flex gap-3">
                    <Link href="/generate"><button className="bg-purple-300 shadow-lg p-3 rounded-lg font-bold py-1">Try now</button></Link>
                    <Link href="/github"><button className="bg-purple-300 shadow-lg p-3 rounded-lg font-bold py-1">Github</button></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;