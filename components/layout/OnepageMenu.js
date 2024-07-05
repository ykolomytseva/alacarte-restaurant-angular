import Link from "next/link"
// import { useRouter } from "next/router"

export default function OnepageMenu() {
    // const router = useRouter()

    return (
        <>

            {/* <ul className="sub-menu">
                <Link className={router.pathname == "/" ? "active" : ""}>Home Default</Link>
                <Link className={router.pathname == "/index-2" ? "active" : ""}>Home Poppinsior</Link>
            </ul> */}

            <ul className="navigation clearfix">
                <li className="current dropdown"><Link href="/">Home</Link>
                    <ul>
                        <li><Link href="/">Home Page One</Link></li>
                        <li><Link href="/index-2">Home Page Two</Link></li>
                        <li><Link href="/index-3">Home Page Three</Link></li>
                        <li><Link href="/index-4">OnePage Home</Link></li>
                    </ul>
                </li>
                <li><Link href="#about">About</Link></li>
                <li><Link href="#menu">Menu</Link></li>
                <li><Link href="#shop">Shop</Link></li>
                <li><Link href="#testmonial">Testimonial</Link></li>
                <li><Link href="#news">News</Link></li>
            </ul>

        </>
    )
}
