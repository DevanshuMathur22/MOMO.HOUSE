"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { categoryColor, categoryIcon, formatUsd, products } from "../lib/menu";

type OrderType = "Collection" | "Delivery";
type Cart = Record<number, number>;
type CartContextValue = {
  cart: Cart;
  count: number;
  subtotal: number;
  isOpen: boolean;
  notice: string;
  dismissNotice: () => void;
  add: (id: number) => void;
  update: (id: number, delta: number) => void;
  remove: (id: number) => void;
  clear: () => void;
  open: () => void;
  close: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "momo-house-cart-v2";

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Cart>({});
  const [hydrated, setHydrated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    try {
      const saved = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "{}");
      if (saved && typeof saved === "object") setCart(saved);
    } catch { /* A corrupt saved cart is safely ignored. */ }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }, [cart, hydrated]);

  const showNotice = (message: string) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 2400);
  };
  const add = (id: number) => {
    const product = products.find((item) => item.id === id);
    setCart((current) => ({ ...current, [id]: (current[id] || 0) + 1 }));
    if (product) showNotice(`${product.name} added to your order`);
  };
  const update = (id: number, delta: number) => setCart((current) => {
    const nextQuantity = (current[id] || 0) + delta;
    if (nextQuantity <= 0) { const { [id]: _, ...rest } = current; return rest; }
    return { ...current, [id]: nextQuantity };
  });
  const remove = (id: number) => setCart((current) => { const { [id]: _, ...rest } = current; return rest; });
  const clear = () => { setCart({}); showNotice("Your order was cleared"); };
  const count = Object.values(cart).reduce((total, quantity) => total + quantity, 0);
  const subtotal = products.reduce((total, product) => total + product.price * (cart[product.id] || 0), 0);
  const value = useMemo(() => ({ cart, count, subtotal, isOpen, notice, dismissNotice: () => setNotice(""), add, update, remove, clear, open: () => setIsOpen(true), close: () => setIsOpen(false) }), [cart, count, subtotal, isOpen, notice]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}

export function CartDrawer() {
  const { cart, count, subtotal, isOpen, close, update, remove, clear, notice, dismissNotice } = useCart();
  const [step, setStep] = useState<"cart" | "details">("cart");
  const [orderType, setOrderType] = useState<OrderType>("Collection");
  const [customer, setCustomer] = useState({ name: "", phone: "", address: "", note: "" });
  const [error, setError] = useState("");
  const cartItems = products.filter((product) => cart[product.id]);

  const resetAndClose = () => { setStep("cart"); setError(""); close(); };
  const openWhatsApp = () => {
    if (!customer.name.trim() || !customer.phone.trim() || (orderType === "Delivery" && !customer.address.trim())) {
      setError(orderType === "Delivery" ? "Please add your name, mobile number, and delivery address." : "Please add your name and mobile number.");
      return;
    }
    const rows = cartItems.map((product) => `• ${product.name} × ${cart[product.id]} — ${formatUsd(product.price * cart[product.id])}`);
    const message = [
      "Hello! I would like to place an order from MOMO.HOUSE.",
      "",
      ...rows,
      "",
      `Order type: ${orderType}`,
      `Customer: ${customer.name.trim()}`,
      `Mobile: ${customer.phone.trim()}`,
      orderType === "Delivery" ? `Address: ${customer.address.trim()}` : "",
      customer.note.trim() ? `Note: ${customer.note.trim()}` : "",
      `Subtotal: ${formatUsd(subtotal)}`,
      "",
      "Please confirm availability, delivery fee, and payment options.",
    ].filter(Boolean).join("\n");
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return <>
    {notice && <div className="toast" role="status"><span>✓</span>{notice}<button onClick={dismissNotice} aria-label="Dismiss notification">×</button></div>}
    {isOpen && <div className="overlay cart-overlay" onClick={resetAndClose}>
      <aside className="cart-drawer" role="dialog" aria-modal="true" aria-label="Your order" onClick={(event) => event.stopPropagation()}>
        <header><div><p className="kicker">Your selections are saved</p><h2>{step === "cart" ? "Your order" : "Order details"} <span>({count})</span></h2></div><button className="modal-close" onClick={resetAndClose} aria-label="Close order">×</button></header>
        {step === "cart" ? (cartItems.length ? <>
          <div className="cart-items">{cartItems.map((product) => <article key={product.id}><div className={`cart-icon ${categoryColor[product.category]}`}>{categoryIcon[product.category]}</div><div><h3>{product.name}</h3><p>{formatUsd(product.price)} each</p><button className="remove" onClick={() => remove(product.id)}>Remove</button></div><div className="quantity"><button onClick={() => update(product.id, -1)} aria-label={`Remove one ${product.name}`}>−</button><span>{cart[product.id]}</span><button onClick={() => update(product.id, 1)} aria-label={`Add one ${product.name}`}>+</button></div></article>)}</div>
          <div className="cart-footer"><button className="clear-cart" onClick={clear}>Clear / cancel order</button><div className="cart-total"><span>Subtotal</span><strong>{formatUsd(subtotal)}</strong></div><p>Delivery fee and final timing are confirmed by the restaurant on WhatsApp.</p><button className="checkout-button" onClick={() => setStep("details")}>Continue to checkout <span>→</span></button></div>
        </> : <div className="cart-empty"><span>◒</span><h3>Your order is empty.</h3><p>Add something delicious and it will stay saved even if you refresh.</p><button className="button-dark" onClick={resetAndClose}>Browse menu <span>→</span></button></div>) : <div className="checkout-form">
          <button className="back-button" onClick={() => setStep("cart")}>← Back to cart</button>
          <p className="checkout-intro">Fill the details once. WhatsApp will open with the complete order ready for you to send.</p>
          <div className="order-type"><button className={orderType === "Collection" ? "active" : ""} onClick={() => setOrderType("Collection")}>Collection</button><button className={orderType === "Delivery" ? "active" : ""} onClick={() => setOrderType("Delivery")}>Delivery</button></div>
          <label>Your name<input value={customer.name} onChange={(event) => setCustomer({ ...customer, name: event.target.value })} placeholder="Full name" autoComplete="name" /></label>
          <label>Mobile number<input value={customer.phone} onChange={(event) => setCustomer({ ...customer, phone: event.target.value })} placeholder="Your mobile number" inputMode="tel" autoComplete="tel" /></label>
          {orderType === "Delivery" && <label>Delivery address<textarea value={customer.address} onChange={(event) => setCustomer({ ...customer, address: event.target.value })} placeholder="House / flat, street, area, postcode" autoComplete="street-address" /></label>}
          <label>Order note <span>Optional</span><textarea value={customer.note} onChange={(event) => setCustomer({ ...customer, note: event.target.value })} placeholder="Allergy or special request?" maxLength={180} /></label>
          {error && <p className="form-error">{error}</p>}
          <div className="review-total"><span>{count} items · {orderType}</span><strong>{formatUsd(subtotal)}</strong></div>
          <button className="checkout-button" onClick={openWhatsApp}>Open WhatsApp with order <span>↗</span></button>
          <small>On WhatsApp, the customer checks the message and presses Send. This prevents accidental orders.</small>
        </div>}
      </aside>
    </div>}
  </>;
}
