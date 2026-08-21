import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How it works | MOMO.HOUSE",
  description: "See how MOMO.HOUSE ordering works—from menu browsing to a ready-to-send WhatsApp order.",
};

export default function AboutPage() {
  return <main>
    <section className="about-hero shell"><p className="kicker">One clean, simple order flow</p><h1>Good food should<br />be <em>easy to order.</em></h1><p>Built for customers who want to browse, decide, and place an order without account creation, downloads, or confusing checkout steps.</p><Link href="/menu" className="button-dark">Explore the menu <span>→</span></Link></section>
    <section className="process-band"><div className="shell process-grid"><article><span>01</span><h2>Pick what you want.</h2><p>Search the full menu, use categories, and choose Halal or Vegan filters in one place.</p></article><article><span>02</span><h2>Review with confidence.</h2><p>Add to cart, update quantities, remove a dish, or clear the full order—without refreshing the website.</p></article><article><span>03</span><h2>Order on WhatsApp.</h2><p>Add name, mobile number, collection or delivery preference, and an optional note. WhatsApp opens with the finished order message.</p></article></div></section>
    <section className="faq shell"><div><p className="kicker">Customer questions, already answered</p><h2>Simple by design.</h2></div><div className="faq-list"><details open><summary>Does the cart stay saved if I refresh the site?</summary><p>Yes. Items stay saved on the customer’s device, so they can keep browsing or return later without losing their order.</p></details><details><summary>How is my WhatsApp order sent?</summary><p>The site writes the complete order message and opens WhatsApp. The customer checks it and taps Send, so there are no accidental orders.</p></details><details><summary>Can I choose delivery or collection?</summary><p>Yes. Customers select one option before WhatsApp opens. Delivery customers are also asked for their address.</p></details><details><summary>Can I mention allergies or special requests?</summary><p>Yes. There is an optional order-note field just before checkout. The restaurant receives it in the WhatsApp message.</p></details></div></section>
    <section className="home-cta"><div className="shell"><p className="kicker">Ready when you are</p><h2>Find your<br /><em>favourite flavour.</em></h2><Link href="/menu" className="button-light">Browse the menu <span>→</span></Link></div></section>
  </main>;
}
