"use client";
import Link from "next/link";

export default function Menu() {
  return (
    <>
      <ul className="navigation clearfix">
        <li className="dropdown">
          <Link href="/">Home</Link>
          <ul></ul>
        </li>
        <li>
          <Link href="/about-us">About us</Link>
        </li>
        <li>
          <Link href="/service">Services</Link>
        </li>
        <li className="dropdown">
          <Link href="/shop">Shop</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </>
  );
}
