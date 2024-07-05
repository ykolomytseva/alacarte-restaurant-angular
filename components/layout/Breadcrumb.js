import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle }) {
    return (
        <>
            <section className="page-title centred">
            <div className="bg-layer" style={{ backgroundImage: 'url(assets/images/background/page-title.jpg)' }}></div>
            <div className="auto-container">
                <div className="content-box">
                    <h2>{breadcrumbTitle}</h2>
                    <ul className="bread-crumb clearfix">
                        <li><Link href="/">Home</Link></li>
                        <li>{breadcrumbTitle}</li>
                    </ul>
                </div>
            </div>
        </section>
        </>
    )
}


