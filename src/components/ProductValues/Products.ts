export interface Product {
    icon: string;
    label: string;
}

export const allProducts = [
    { icon: "🍅", label: "Tomato" },
    { icon: "🥬", label: "Lettuce" },
    { icon: "🧀", label: "Cheese" },
    { icon: "🥕", label: "Carrot" },
    { icon: "🍌", label: "Banana" },
    { icon: "🫐", label: "Blueberries" },
    { icon: "🥂", label: "Champers?" }
];

const [tomato, lettuce, cheese] = allProducts;
export const initialTabs = [tomato, lettuce, cheese];

export function getNextProduct(products:Product[]): Product | undefined {
    const existing = new Set(products);
    return allProducts.find((product) => !existing.has(product))
}