"use client";

import { useMemo, useState } from "react";

type Category =
  | "Momos"
  | "Fried Momos"
  | "Kurkure Momos"
  | "Jhol Momos"
  | "Steamed Momos"
  | "Mains & Soup"
  | "Meal Boxes"
  | "Drinks & Extras";

type Product = {
  id: number;
  name: string;
  price: number;
  category: Category;
  dietary: string[];
};

const menuRows: Array<[string, number, Category]> = [
  ["Black gloves", 0.09, "Drinks & Extras"],
  ["Buttermilk Ranch sauce", 0.99, "Drinks & Extras"],
  ["Chicken Fried Chowmein", 8.99, "Mains & Soup"],
  ["Chicken Fried Rice", 8.99, "Mains & Soup"],
  ["Chicken Noodle Soup", 7.99, "Mains & Soup"],
  ["Chicken Noodle Soup With veg Momo 4 Pieces", 11.99, "Mains & Soup"],
  ["Chilly Chicken Momo (Halal) (8 Pieces)", 11.99, "Momos"],
  ["Chilly Lamb Momo (Halal) (8 Pieces)", 12.99, "Momos"],
  ["Chilly Paneer Momo (8 Pieces)", 11.99, "Momos"],
  ["Chilly Veg & Cheese Momo (8 Pieces)", 11.99, "Momos"],
  ["Chilly Veg Momo (Vegan) (8 Pieces)", 11.99, "Momos"],
  ["Coca Cola Diet Coke 330 ml can", 1.99, "Drinks & Extras"],
  ["Coca Cola original 330 ml can", 1.99, "Drinks & Extras"],
  ["Egg Fried Chowmein", 7.49, "Mains & Soup"],
  ["Egg Fried Rice", 7.49, "Mains & Soup"],
  ["Extreme hot sauce", 0.99, "Drinks & Extras"],
  ["Fanta orange 330 ml can", 1.99, "Drinks & Extras"],
  ["Fried Chicken Momo (Halal) (10 Pieces)", 12.99, "Fried Momos"],
  ["Fried Chicken Momo (Halal) (6 Pieces)", 8.99, "Fried Momos"],
  ["Fried Lamb Momo (Halal) (10 Pieces)", 12.99, "Fried Momos"],
  ["Fried Lamb Momo (Halal) (6 Pieces)", 8.99, "Fried Momos"],
  ["Fried Paneer Momo (10 Pieces)", 12.99, "Fried Momos"],
  ["Fried Paneer Momo (6 Pieces)", 8.99, "Fried Momos"],
  ["Fried Veg & Cheese Momo (10 Pieces)", 12.99, "Fried Momos"],
  ["Fried Veg & Cheese Momo (6 Pieces)", 8.99, "Fried Momos"],
  ["Fried Veg Momo (Vegan) (10 Pieces)", 12.49, "Fried Momos"],
  ["Fried Veg Momo (Vegan) (6 Pieces)", 8.99, "Fried Momos"],
  ["Garlic mayo", 0.99, "Drinks & Extras"],
  ["Hot Momo sauce", 0.99, "Drinks & Extras"],
  ["Jhol Chicken Momo (Halal) (8 Pieces)", 12.99, "Jhol Momos"],
  ["Jhol Lamb Momo (Halal) (8 Pieces)", 12.99, "Jhol Momos"],
  ["Jhol Paneer Momo (8 Pieces)", 11.99, "Jhol Momos"],
  ["Jhol Veg & Cheese Momo (8 Pieces)", 12.99, "Jhol Momos"],
  ["Jhol Veg Momo (Vegan) (8 Pieces)", 11.99, "Jhol Momos"],
  ["Kurkure Chicken Momo (Halal) (5 Pieces)", 8.99, "Kurkure Momos"],
  ["Kurkure Chicken Momo (Halal) (8 Pieces)", 12.99, "Kurkure Momos"],
  ["Kurkure Lamb Momo (Halal) (5 Pieces)", 8.99, "Kurkure Momos"],
  ["Kurkure Lamb Momo (Halal) (8 Pieces)", 12.99, "Kurkure Momos"],
  ["Kurkure Paneer Momo (5 Pieces)", 8.99, "Kurkure Momos"],
  ["Kurkure Paneer Momo (8 Pieces)", 12.99, "Kurkure Momos"],
  ["Kurkure Veg & Cheese Momo (5 Pieces)", 8.99, "Kurkure Momos"],
  ["Kurkure Veg & Cheese Momo (8 Pieces)", 12.99, "Kurkure Momos"],
  ["Kurkure Veg Momo (5 Pieces)", 8.99, "Kurkure Momos"],
  ["Kurkure Veg Momo (8 Pieces)", 12.99, "Kurkure Momos"],
  ["Lamb Fried Chowmein", 8.99, "Mains & Soup"],
  ["Lamb Fried Rice", 8.99, "Mains & Soup"],
  ["Mayo", 0.99, "Drinks & Extras"],
  ["Noodle Meal Box (Fry)", 9.99, "Meal Boxes"],
  ["Noodle Meal Box (Steam)", 9.99, "Meal Boxes"],
  ["Noodle Meal Box Chicken (Fry)", 10.99, "Meal Boxes"],
  ["Noodle Meal Box Chicken (Steam)", 10.99, "Meal Boxes"],
  ["Noodle Meal Box Lamb (Fry)", 10.99, "Meal Boxes"],
  ["Noodle Meal Box Lamb (Steam)", 10.99, "Meal Boxes"],
  ["Paneer Fried Chowmein", 7.99, "Mains & Soup"],
  ["Paneer Fried Rice", 7.99, "Mains & Soup"],
  ["Pepsi 330 ml can", 1.99, "Drinks & Extras"],
  ["Prawn Fried Chowmein", 8.99, "Mains & Soup"],
  ["Prawn Fried Rice", 8.99, "Mains & Soup"],
  ["Rice Meal Box (Fry)", 9.99, "Meal Boxes"],
  ["Rice Meal Box (Steam)", 9.99, "Meal Boxes"],
  ["Rice Meal Box Chicken (Fry)", 10.99, "Meal Boxes"],
  ["Rice Meal Box Chicken (Steam)", 10.99, "Meal Boxes"],
  ["Rice Meal Box Lamb (Fry)", 10.99, "Meal Boxes"],
  ["Rice Meal Box Lamb (Steam)", 10.99, "Meal Boxes"],
  ["Rubicon mango 330 ml can", 1.99, "Drinks & Extras"],
  ["Special Fried Chowmein", 9.99, "Mains & Soup"],
  ["Special Fried Rice", 9.99, "Mains & Soup"],
  ["Sprite 330 ml can", 1.99, "Drinks & Extras"],
  ["Sprite Zero 330 ml can", 1.99, "Drinks & Extras"],
  ["Steam Chicken Momo (Halal) (10 Pieces)", 12.49, "Steamed Momos"],
  ["Steam Chicken Momo (Halal) (6 Pieces)", 8.49, "Steamed Momos"],
  ["Steam Lamb Momo (Halal) (10 Pieces)", 12.49, "Steamed Momos"],
  ["Steam Lamb Momo (Halal) (6 Pieces)", 8.49, "Steamed Momos"],
  ["Steam Paneer Momo (10 Pieces)", 12.49, "Steamed Momos"],
  ["Steam Paneer Momo (6 Pieces)", 7.99, "Steamed Momos"],
  ["Steam Veg & Cheese Momo (10 Pieces)", 12.49, "Steamed Momos"],
  ["Steam Veg & Cheese Momo (6 Pieces)", 7.99, "Steamed Momos"],
  ["Steam Veg Momo (Vegan) (10 Pieces)", 11.99, "Steamed Momos"],
  ["Steam Veg Momo (Vegan) (6 Pieces)", 7.99, "Steamed Momos"],
  ["Still water 500 ml", 1.99, "Drinks & Extras"],
  ["Sweetcorn Noodle Soup", 6.99, "Mains & Soup"],
  ["Sweetcorn Noodle Soup With veg Momo 4 Pieces", 10.99, "Mains & Soup"],
  ["Tango orange 330 ml can", 1.99, "Drinks & Extras"],
  ["Veg Fried Chowmein (Vegan)", 6.99, "Mains & Soup"],
  ["Veg Fried Rice (Vegan)", 6.99, "Mains & Soup"],
  ["Veg Noodle Soup", 6.99, "Mains & Soup"],
  ["Veg Noodle Soup With veg Momo 4 Pieces", 10.99, "Mains & Soup"],
];

const products: Product[] = menuRows.map(([name, price, category], index) => ({
  id: index + 1,
  name,
  price,
  category,
  dietary: [name.includes("Halal") ? "Halal" : "", name.toLowerCase().includes("vegan") ? "Vegan" : ""].filter(Boolean),
}));

const categories: Array<Category | "All"> = ["All", "Momos", "Fried Momos", "Kurkure Momos", "Jhol Momos", "Steamed Momos", "Mains & Soup", "Meal Boxes", "Drinks & Extras"];
const categoryIcon: Record<Category, string> = { Momos: "◒", "Fried Momos": "◉", "Kurkure Momos": "✳", "Jhol Momos": "◌", "Steamed Momos": "◍", "Mains & Soup": "⌁", "Meal Boxes": "▣", "Drinks & Extras": "◈" };
const categoryColor: Record<Category, string> = { Momos: "paprika", "Fried Momos": "sun", "Kurkure Momos": "lilac", "Jhol Momos": "rose", "Steamed Momos": "mint", "Mains & Soup": "blue", "Meal Boxes": "coral", "Drinks & Extras": "lemon" };

function money(value: number) { return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value); }
function pieces(name: string) { const match = name.match(/\((\d+) Pieces?\)/i); return match ? `${match[1]} pieces` : "Freshly made"; }

export default function Home() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category | "All">("All");
  const [dietaryFilter, setDietaryFilter] = useState("All");
  const [cart, setCart] = useState<Record<number, number>>({});
  const [cartOpen, setCartOpen] = useState(false);
  const [selected, setSelected] = useState<Product | null>(null);
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [orderType, setOrderType] = useState<"Collection" | "Delivery">("Collection");
  const [note, setNote] = useState("");
  const [toast, setToast] = useState("");

  const filtered = useMemo(() => products.filter((product) => {
    const search = `${product.name} ${product.category} ${product.dietary.join(" ")}`.toLowerCase().includes(query.trim().toLowerCase());
    const matchesCategory = category === "All" || product.category === category;
    const matchesDietary = dietaryFilter === "All" || product.dietary.includes(dietaryFilter);
    return search && matchesCategory && matchesDietary;
  }), [category, dietaryFilter, query]);
  const cartItems = products.filter((product) => cart[product.id]);
  const count = Object.values(cart).reduce((total, quantity) => total + quantity, 0);
  const subtotal = cartItems.reduce((total, product) => total + product.price * cart[product.id], 0);

  const add = (product: Product) => { setCart((old) => ({ ...old, [product.id]: (old[product.id] || 0) + 1 })); setToast(`${product.name} added to your order`); window.setTimeout(() => setToast(""), 2200); };
  const changeQuantity = (id: number, delta: number) => setCart((old) => { const quantity = (old[id] || 0) + delta; if (quantity <= 0) { const { [id]: _, ...rest } = old; return rest; } return { ...old, [id]: quantity }; });
  const clearCart = () => setCart({});
  const startCheckout = () => { setCartOpen(false); setConfirmationOpen(true); };
  const sendWhatsAppOrder = () => {
    const lines = cartItems.map((product) => `• ${product.name} × ${cart[product.id]} — ${money(product.price * cart[product.id])}`);
    const message = encodeURIComponent(`Hello! I'd like to place an order from MOMO.HOUSE.\n\n${lines.join("\n")}\n\nOrder type: ${orderType}\nSubtotal: ${money(subtotal)}${note ? `\nNote: ${note}` : ""}\n\nPlease confirm my order.`);
    window.open(`https://wa.me/?text=${message}`, "_blank", "noopener,noreferrer");
    setConfirmationOpen(false);
  };
  const chooseCategory = (next: Category | "All") => { setCategory(next); document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth", block: "start" }); };

  return <main>
    <div className="topline">Open today · 12:00–23:00 <span>•</span> Collection & delivery available</div>
    <nav className="nav shell"><a href="#home" className="wordmark">MOMO<span>.</span>HOUSE</a><div className="nav-links"><a href="#menu">Menu</a><a href="#about">Our food</a><a href="#help">Help</a></div><button className="nav-cart" onClick={() => setCartOpen(true)} aria-label={`Open order, ${count} items`}><span className="bag-mark">◧</span> Your order <b>{count}</b></button></nav>

    <section className="hero shell" id="home"><div className="hero-copy"><p className="kicker">New-school Himalayan kitchen</p><h1>Big flavour.<br /><em>Little parcels</em><br />of joy.</h1><p>Steamed, fried, crispy, saucy—choose your momo mood. Made fresh when you order.</p><div className="hero-actions"><a href="#menu" className="button-dark">Explore the menu <span>→</span></a><button className="text-button" onClick={() => chooseCategory("Momos")}>Our classic momos <span>↗</span></button></div><div className="hero-stats"><div><strong>87</strong><span>menu items</span></div><div><strong>Halal</strong><span>options available</span></div><div><strong>Vegan</strong><span>friendly choices</span></div></div></div><div className="hero-art" aria-label="Illustration of a bowl of momos"><div className="hero-sun" /><div className="hero-bowl"><span className="momo momo-a">◒</span><span className="momo momo-b">◒</span><span className="momo momo-c">◒</span><span className="momo momo-d">◒</span><span className="momo momo-e">◒</span></div><div className="burst">HOT<br />MOMO<br />CLUB</div><div className="hero-note"><span>✦</span><p>Steamed daily<br /><b>served with joy</b></p></div><div className="ribbon">FRESH · FAST · FULL OF FLAVOUR · </div></div></section>

    <section className="category-band"><div className="shell quick-categories">{(["Momos", "Fried Momos", "Kurkure Momos", "Jhol Momos", "Steamed Momos", "Meal Boxes"] as Category[]).map((item) => <button key={item} onClick={() => chooseCategory(item)}><span>{categoryIcon[item]}</span><b>{item}</b><small>See menu →</small></button>)}</div></section>

    <section className="menu shell" id="menu"><div className="menu-heading"><div><p className="kicker">Order your way</p><h2>The full menu.</h2></div><p>Every item from your price list, ready to search, choose, and add to your order.</p></div><div className="search-row"><label className="search-box"><span>⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search momos, noodles, drinks…" aria-label="Search menu" />{query && <button onClick={() => setQuery("")} aria-label="Clear search">×</button>}</label><div className="diet-filters"><button className={dietaryFilter === "All" ? "active" : ""} onClick={() => setDietaryFilter("All")}>All food</button><button className={dietaryFilter === "Halal" ? "active" : ""} onClick={() => setDietaryFilter("Halal")}>Halal</button><button className={dietaryFilter === "Vegan" ? "active" : ""} onClick={() => setDietaryFilter("Vegan")}>Vegan</button></div></div><div className="category-filters">{categories.map((item) => <button key={item} className={category === item ? "active" : ""} onClick={() => setCategory(item)}>{item === "All" ? "Everything" : item}</button>)}</div><div className="menu-meta"><span>{filtered.length} {filtered.length === 1 ? "item" : "items"} found</span><span>All prices in USD ($)</span></div><div className="product-grid">{filtered.map((product) => <article className={`product-card ${categoryColor[product.category]}`} key={product.id}><button className="card-main" onClick={() => setSelected(product)} aria-label={`View ${product.name}`}><div className="food-art"><span>{categoryIcon[product.category]}</span><i>{product.category === "Drinks & Extras" ? "✦" : ""}</i></div><div className="card-label"><span>{product.category}</span>{product.dietary.map((tag) => <b key={tag}>{tag}</b>)}</div><h3>{product.name}</h3><p>{pieces(product.name)}</p></button><div className="card-bottom"><strong>{money(product.price)}</strong><button className="add-button" onClick={() => add(product)} aria-label={`Add ${product.name}`}>Add <span>+</span></button></div></article>)}</div>{filtered.length === 0 && <div className="empty-menu"><span>⌕</span><h3>Nothing matched that search.</h3><p>Try a different food, category, or dietary filter.</p><button onClick={() => { setQuery(""); setCategory("All"); setDietaryFilter("All"); }}>Show all menu</button></div>}</section>

    <section className="why shell" id="about"><div><p className="kicker">Momo, but make it memorable</p><h2>Choose your<br />own <em>momo mood.</em></h2><p>Keep it classic, make it crispy, go saucy with jhol, or build the perfect meal box. All the good choices are here.</p><a href="#menu">Browse all 87 dishes →</a></div><div className="why-list"><article><span>01</span><h3>Made after you order</h3><p>Fresh, hot, and ready for your table.</p></article><article><span>02</span><h3>Clear dietary choices</h3><p>Halal and vegan labels make it easy.</p></article><article><span>03</span><h3>Simple order flow</h3><p>Build your cart, review it, then message us on WhatsApp.</p></article></div></section>

    <section className="cta" id="help"><div className="shell"><p className="kicker">Hungry already?</p><h2>Your momo moment<br />starts <em>here.</em></h2><button className="button-light" onClick={() => chooseCategory("All")}>Start your order <span>→</span></button></div></section>
    <footer className="shell"><a href="#home" className="wordmark">MOMO<span>.</span>HOUSE</a><p>Fresh food, straightforward ordering.</p><div><a href="#menu">Menu</a><a href="#about">Our food</a><button onClick={() => setCartOpen(true)}>Your order ({count})</button></div></footer>

    {toast && <div className="toast" role="status"><span>✓</span>{toast}<button onClick={() => setToast("")} aria-label="Dismiss notification">×</button></div>}
    {selected && <div className="overlay" onClick={() => setSelected(null)}><section className={`product-modal ${categoryColor[selected.category]}`} role="dialog" aria-modal="true" aria-label={selected.name} onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setSelected(null)} aria-label="Close details">×</button><div className="modal-art"><span>{categoryIcon[selected.category]}</span></div><div className="modal-content"><p className="kicker">{selected.category}</p><h2>{selected.name}</h2><div className="modal-tags">{selected.dietary.length ? selected.dietary.map((tag) => <span key={tag}>{tag}</span>) : <span>Made fresh</span>}<span>{pieces(selected.name)}</span></div><p className="modal-copy">Freshly prepared to order. Let us know any special request in the order note before you check out.</p><div className="modal-buy"><strong>{money(selected.price)}</strong><button className="button-dark" onClick={() => { add(selected); setSelected(null); }}>Add to order <span>+</span></button></div></div></section></div>}
    {cartOpen && <div className="overlay cart-overlay" onClick={() => setCartOpen(false)}><aside className="cart-drawer" role="dialog" aria-modal="true" aria-label="Your order" onClick={(event) => event.stopPropagation()}><header><div><p className="kicker">Almost there</p><h2>Your order <span>({count})</span></h2></div><button className="modal-close" onClick={() => setCartOpen(false)} aria-label="Close order">×</button></header>{cartItems.length ? <><div className="cart-items">{cartItems.map((product) => <article key={product.id}><div className={`cart-icon ${categoryColor[product.category]}`}>{categoryIcon[product.category]}</div><div><h3>{product.name}</h3><p>{money(product.price)} each</p><button className="remove" onClick={() => changeQuantity(product.id, -cart[product.id])}>Remove</button></div><div className="quantity"><button onClick={() => changeQuantity(product.id, -1)} aria-label={`Remove one ${product.name}`}>−</button><span>{cart[product.id]}</span><button onClick={() => changeQuantity(product.id, 1)} aria-label={`Add one ${product.name}`}>+</button></div></article>)}</div><div className="cart-footer"><button className="clear-cart" onClick={clearCart}>Clear order</button><div className="cart-total"><span>Subtotal</span><strong>{money(subtotal)}</strong></div><p>Taxes and delivery fee, if any, are confirmed by the restaurant.</p><button className="checkout-button" onClick={startCheckout}>Review & order on WhatsApp <span>→</span></button></div></> : <div className="cart-empty"><span>◒</span><h3>Your order is empty.</h3><p>Add something delicious and it will appear here.</p><button className="button-dark" onClick={() => setCartOpen(false)}>Browse the menu <span>→</span></button></div>}</aside></div>}
    {confirmationOpen && <div className="overlay" onClick={() => setConfirmationOpen(false)}><section className="confirmation" role="dialog" aria-modal="true" aria-label="Review your order" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setConfirmationOpen(false)} aria-label="Close order review">×</button><p className="kicker">One last look</p><h2>Ready to order?</h2><p>Your item list will open in WhatsApp so the restaurant can confirm availability, collection/delivery, and payment.</p><div className="order-type"><button className={orderType === "Collection" ? "active" : ""} onClick={() => setOrderType("Collection")}>Collection</button><button className={orderType === "Delivery" ? "active" : ""} onClick={() => setOrderType("Delivery")}>Delivery</button></div><label className="note-label">Order note <span>Optional</span><textarea value={note} onChange={(event) => setNote(event.target.value)} placeholder="Any allergy or special instruction?" maxLength={160} /></label><div className="review-total"><span>{count} items</span><strong>{money(subtotal)}</strong></div><button className="checkout-button" onClick={sendWhatsAppOrder}>Continue to WhatsApp <span>↗</span></button><small>Before launch, connect the restaurant WhatsApp number in the site settings.</small></section></div>}
  </main>;
}
