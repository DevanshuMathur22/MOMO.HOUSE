export type Category =
  | "Momos"
  | "Fried Momos"
  | "Kurkure Momos"
  | "Jhol Momos"
  | "Steamed Momos"
  | "Mains & Soup"
  | "Meal Boxes"
  | "Drinks & Extras";

export type Product = {
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

export const products: Product[] = menuRows.map(([name, price, category], index) => ({
  id: index + 1,
  name,
  price,
  category,
  dietary: [name.includes("Halal") ? "Halal" : "", name.toLowerCase().includes("vegan") ? "Vegan" : ""].filter(Boolean),
}));

export const categories: Array<Category | "All"> = [
  "All", "Momos", "Fried Momos", "Kurkure Momos", "Jhol Momos", "Steamed Momos", "Mains & Soup", "Meal Boxes", "Drinks & Extras",
];

export const categoryIcon: Record<Category, string> = {
  Momos: "◒", "Fried Momos": "◉", "Kurkure Momos": "✳", "Jhol Momos": "◌", "Steamed Momos": "◍", "Mains & Soup": "⌁", "Meal Boxes": "▣", "Drinks & Extras": "◈",
};

export const categoryColor: Record<Category, string> = {
  Momos: "paprika", "Fried Momos": "sun", "Kurkure Momos": "lilac", "Jhol Momos": "rose", "Steamed Momos": "mint", "Mains & Soup": "blue", "Meal Boxes": "coral", "Drinks & Extras": "lemon",
};

export function formatUsd(value: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);
}

export function portion(name: string) {
  const match = name.match(/\(?\s?(\d+)\s*Pieces?\s?\)?/i);
  return match ? `${match[1]} pieces` : "Freshly made";
}
