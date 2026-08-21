"use client";

import { useState } from "react";
import { categoryColor, categoryIcon, formatUsd, portion, type Product } from "../lib/menu";
import { useCart } from "./cart-provider";

export function FoodCard({ product }: { product: Product }) {
  const { add } = useCart();
  const [selected, setSelected] = useState(false);
  const color = categoryColor[product.category];
  return <>
    <article className={`product-card ${color}`}>
      <button className="card-main" onClick={() => setSelected(true)} aria-label={`View ${product.name}`}>
        <div className="food-art"><span>{categoryIcon[product.category]}</span><i>{product.category === "Drinks & Extras" ? "✦" : ""}</i></div>
        <div className="card-label"><span>{product.category}</span>{product.dietary.map((tag) => <b key={tag}>{tag}</b>)}</div>
        <h3>{product.name}</h3><p>{portion(product.name)}</p>
      </button>
      <div className="card-bottom"><strong>{formatUsd(product.price)}</strong><button className="add-button" onClick={() => add(product.id)} aria-label={`Add ${product.name}`}>Add <span>+</span></button></div>
    </article>
    {selected && <div className="overlay" onClick={() => setSelected(false)}><section className={`product-modal ${color}`} role="dialog" aria-modal="true" aria-label={product.name} onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setSelected(false)} aria-label="Close details">×</button><div className="modal-art"><span>{categoryIcon[product.category]}</span></div><div className="modal-content"><p className="kicker">{product.category}</p><h2>{product.name}</h2><div className="modal-tags">{product.dietary.length ? product.dietary.map((tag) => <span key={tag}>{tag}</span>) : <span>Made fresh</span>}<span>{portion(product.name)}</span></div><p className="modal-copy">Prepared fresh after the customer orders. Allergies and special requests can be added in the final order note.</p><div className="modal-buy"><strong>{formatUsd(product.price)}</strong><button className="button-dark" onClick={() => { add(product.id); setSelected(false); }}>Add to order <span>+</span></button></div></div></section></div>}
  </>;
}
