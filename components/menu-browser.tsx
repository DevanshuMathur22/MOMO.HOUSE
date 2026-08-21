"use client";

import { useMemo, useState } from "react";
import { categories, products, type Category } from "../lib/menu";
import { FoodCard } from "./food-card";

export function MenuBrowser() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category | "All">("All");
  const [dietaryFilter, setDietaryFilter] = useState("All");
  const filtered = useMemo(() => products.filter((product) => {
    const matchesSearch = `${product.name} ${product.category} ${product.dietary.join(" ")}`.toLowerCase().includes(query.trim().toLowerCase());
    const matchesCategory = category === "All" || product.category === category;
    const matchesDiet = dietaryFilter === "All" || product.dietary.includes(dietaryFilter);
    return matchesSearch && matchesCategory && matchesDiet;
  }), [category, dietaryFilter, query]);
  const reset = () => { setQuery(""); setCategory("All"); setDietaryFilter("All"); };
  return <section className="menu-browser shell"><div className="menu-heading"><div><p className="kicker">Searchable, simple, instant</p><h1>The full menu.</h1></div><p>Every product from the supplied price list. All amounts are shown in US dollars.</p></div><div className="search-row"><label className="search-box"><span>⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search momos, noodles, drinks…" aria-label="Search menu" />{query && <button onClick={() => setQuery("")} aria-label="Clear search">×</button>}</label><div className="diet-filters"><button className={dietaryFilter === "All" ? "active" : ""} onClick={() => setDietaryFilter("All")}>All food</button><button className={dietaryFilter === "Halal" ? "active" : ""} onClick={() => setDietaryFilter("Halal")}>Halal</button><button className={dietaryFilter === "Vegan" ? "active" : ""} onClick={() => setDietaryFilter("Vegan")}>Vegan</button></div></div><div className="category-filters">{categories.map((item) => <button key={item} className={category === item ? "active" : ""} onClick={() => setCategory(item)}>{item === "All" ? "Everything" : item}</button>)}</div><div className="menu-meta"><span>{filtered.length} {filtered.length === 1 ? "item" : "items"} found</span><span>All prices in USD ($)</span></div><div className="product-grid">{filtered.map((product) => <FoodCard key={product.id} product={product} />)}</div>{!filtered.length && <div className="empty-menu"><span>⌕</span><h3>Nothing matched that search.</h3><p>Try another dish, category, or dietary choice.</p><button onClick={reset}>Show all menu</button></div>}</section>;
}
