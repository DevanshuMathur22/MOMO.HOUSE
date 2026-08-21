"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "./cart-provider";

const links = [{ href: "/", label: "Home" }, { href: "/menu", label: "Menu" }, { href: "/about", label: "How it works" }];

export function SiteHeader() {
  const pathname = usePathname();
  const { count, open } = useCart();
  return <><div className="topline">Freshly made to order <span>•</span> Collection & delivery available</div><header className="nav shell"><Link href="/" className="wordmark">MOMO<span>.</span>HOUSE</Link><nav className="nav-links" aria-label="Main navigation">{links.map((link) => <Link className={pathname === link.href ? "active" : ""} href={link.href} key={link.href}>{link.label}</Link>)}</nav><button className="nav-cart" onClick={open} aria-label={`Open order, ${count} items`}><span className="bag-mark">◧</span> Your order <b>{count}</b></button></header></>;
}
