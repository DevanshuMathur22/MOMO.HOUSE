import type { Metadata } from "next";
import { MenuBrowser } from "../../components/menu-browser";

export const metadata: Metadata = {
  title: "Menu | MOMO.HOUSE",
  description: "Browse all 87 MOMO.HOUSE dishes, with clear US dollar pricing and dietary filters.",
};

export default function MenuPage() {
  return <main className="menu-page"><MenuBrowser /></main>;
}
