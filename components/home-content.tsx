"use client";

import Link from "next/link";
import { categoryIcon, products } from "../lib/menu";
import { useCart } from "./cart-provider";
import { FoodCard } from "./food-card";

const featured = products.filter((product) => [7, 18, 30, 48].includes(product.id));
const quickCategories = ["Momos", "Fried Momos", "Kurkure Momos", "Jhol Momos", "Steamed Momos", "Meal Boxes"] as const;

export function HomeContent() {
  const { open } = useCart();
  return <>
    <section className="hero shell"><div className="hero-copy"><p className="kicker">New-school Himalayan kitchen</p><h1>Big flavour.<br /><em>Little parcels</em><br />of joy.</h1><p>Steamed, fried, crispy, saucy—choose the momo mood. Every dish is ready to add, save, and order in seconds.</p><div className="hero-actions"><Link href="/menu" className="button-dark">Explore the menu <span>→</span></Link><button className="text-button" onClick={open}>Open your order <span>↗</span></button></div><div className="hero-stats"><div><strong>87</strong><span>menu items</span></div><div><strong>Halal</strong><span>options available</span></div><div><strong>Vegan</strong><span>friendly choices</span></div></div></div><div className="hero-art" aria-label="Illustration of a bowl of momos"><div className="hero-sun" /><div className="hero-bowl"><span className="momo momo-a">◒</span><span className="momo momo-b">◒</span><span className="momo momo-c">◒</span><span className="momo momo-d">◒</span><span className="momo momo-e">◒</span></div><div className="burst">HOT<br />MOMO<br />CLUB</div><div className="hero-note"><span>✦</span><p>Steamed daily<br /><b>served with joy</b></p></div><div className="ribbon">FRESH · FAST · FULL OF FLAVOUR · </div></div></section>
    <section className="category-band"><div className="shell quick-categories">{quickCategories.map((category) => <Link href="/menu" key={category}><span>{categoryIcon[category]}</span><b>{category}</b><small>See menu →</small></Link>)}</div></section>
    <section className="home-menu shell"><div className="section-header"><div><p className="kicker">Straight from the menu</p><h2>Start with a favourite.</h2></div><Link href="/menu" className="text-button">See all 87 items <span>→</span></Link></div><div className="product-grid">{featured.map((product) => <FoodCard key={product.id} product={product} />)}</div></section>
    <section className="how shell"><div><p className="kicker">From craving to collection</p><h2>Three simple<br />steps. <em>Zero stress.</em></h2><p>Your cart stays saved while customers browse. They only need to use WhatsApp once they are ready to send the final order.</p></div><div className="how-list"><article><span>01</span><h3>Browse the menu</h3><p>Search dishes, filter by type, and see clear Halal or Vegan labels.</p></article><article><span>02</span><h3>Build the order</h3><p>Add items, change quantities, remove dishes, or cancel the full order.</p></article><article><span>03</span><h3>Send on WhatsApp</h3><p>The full order, name, delivery preference, and note open in one message.</p></article></div></section>
    <section className="home-cta"><div className="shell"><p className="kicker">Hungry already?</p><h2>Your momo moment<br />starts <em>here.</em></h2><Link href="/menu" className="button-light">Start your order <span>→</span></Link></div></section>
  </>;
}
