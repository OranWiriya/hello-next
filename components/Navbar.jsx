import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav>
            <div className="logo">
                <Link href="/">
                    <Image src="/logo.png" width={50} height={50} alt="Logo" />
                </Link>
                <h3>
                    Hello-nextjs
                </h3>
            </div>
            <Link href="/">
                Home
            </Link>
            <Link href="/about">
                About
            </Link>
            <Link href="/products">
                Products
            </Link>
        </nav>
    )
}