import Link from "next/link";

export default function Header(){
    return(
        <div className="Navbar flex bg-base-100 shadow-sm ">
        <a className="btn btn-ghost text-xl">daisyUi</a>
        
        <div className="flex-1"></div>
        
        <ul className="menu menu-horizontal p-0">
            <li>
                <Link href="/about">About</Link>
            </li>
            <li>
                <Link href="/productPortal">Product Portal</Link>
            </li>
        </ul>
        </div>
    )
}