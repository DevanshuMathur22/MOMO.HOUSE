import Link from "next/link";

export function SiteFooter() {
  return <footer className="shell"><Link href="/" className="wordmark">MOMO<span>.</span>HOUSE</Link><p>Fresh food, straightforward ordering.</p><div><Link href="/menu">Menu</Link><Link href="/about">How it works</Link><a href="https://wa.me/" target="_blank" rel="noreferrer">WhatsApp</a></div></footer>;
}
