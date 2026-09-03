export type Product = {
  slug: string;
  title: string;
  category: "poshak" | "dress" | "jewellery";
  price: number;
  originalPrice?: number;
  fabric?: string;
  work?: string;
  color: string;
  image: string;
  images: string[];
  description: string;
  featured?: boolean;
};

export const products: Product[] = [
  {
    slug: "maharani-bridal-poshak-crimson",
    title: "Maharani Bridal Poshak — Crimson & Gold",
    category: "poshak",
    price: 24900,
    originalPrice: 28500,
    fabric: "Pure Georgette",
    work: "Zardozi + Gota Patti",
    color: "Crimson · Antique Gold",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80&auto=format&fit=crop",
    ],
    description: "Heirloom bridal poshak with hand zardozi, gota kinari and odhna with gotta jaal. Lined, cancan-ready, tailored to measure in our Jaipur atelier.",
    featured: true,
  },
  {
    slug: "rajwada-poshak-emerald",
    title: "Rajwada Poshak — Emerald & Ivory",
    category: "poshak",
    price: 18900,
    fabric: "Soft Georgette",
    work: "Resham + Gota",
    color: "Emerald · Ivory",
    image: "https://images.unsplash.com/photo-1583391733956-3750e79ff55e?w=800&q=80&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1583391733956-3750e79ff55e?w=800&q=80&auto=format&fit=crop"],
    description: "Regal emerald kurti with ivory odhna — lightweight for sangeet and festive gatherings.",
    featured: true,
  },
  {
    slug: "kesariya-dress-mustard",
    title: "Kesariya Rajputi Dress — Mustard",
    category: "dress",
    price: 8900,
    fabric: "Cotton Silk",
    work: "Gota Patti + Lace",
    color: "Mustard · Maroon",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80&auto=format&fit=crop"],
    description: "Everyday royal — breathable cotton-silk dress with traditional gota border, perfect for darshan & gatherings.",
    featured: true,
  },
  {
    slug: "chandni-jewellery-set-bridal",
    title: "Chandni Bridal Jewellery — Jadau Finish",
    category: "jewellery",
    price: 4590,
    originalPrice: 5990,
    color: "Gold · Polki · Ruby",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80&auto=format&fit=crop"],
    description: "High-quality artificial jadau set: choker, maang tikka, nath, earrings — bridal ready, anti-tarnish polish.",
    featured: true,
  },
  {
    slug: "gulabi-poshak-powder-pink",
    title: "Gulabi Poshak — Powder Pink",
    category: "poshak",
    price: 16500,
    fabric: "Georgette",
    work: "Zari + Sequin",
    color: "Powder Pink · Gold",
    image: "https://images.unsplash.com/photo-1609359987000-4f1e83c9e5e6?w=800&q=80&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1609359987000-4f1e83c9e5e6?w=800&q=80&auto=format&fit=crop"],
    description: "Soft powder pink poshak with delicate zari jaal — engagement & reception favourite.",
  },
  {
    slug: "rani-haar-jewellery",
    title: "Rani Haar — Temple Jewellery Set",
    category: "jewellery",
    price: 3890,
    color: "Antique Gold · Green",
    image: "https://images.unsplash.com/photo-1630019852942-7a10c0908fa8?w=800&q=80&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1630019852942-7a10c0908fa8?w=800&q=80&auto=format&fit=crop"],
    description: "Long temple haar with lakh pendant notes — pairs beautifully with bridal and festive poshaks.",
  },
  {
    slug: "neelam-dress-teal",
    title: "Neelam Dress — Royal Teal",
    category: "dress",
    price: 9500,
    fabric: "Upada Silk",
    work: "Gota + Dori",
    color: "Teal · Gold",
    image: "https://images.unsplash.com/photo-1595770617814-67c5bff848e9?w=800&q=80&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1595770617814-67c5bff848e9?w=800&q=80&auto=format&fit=crop"],
    description: "Deep teal upada silk with antique gota — rich drape, ideal for evening ceremonies.",
  },
  {
    slug: "jodha-poshak-maroon",
    title: "Jodha Poshak — Heritage Maroon",
    category: "poshak",
    price: 22500,
    fabric: "Pure Upada",
    work: "Hand Zardozi",
    color: "Maroon · Gold",
    image: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=800&q=80&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=800&q=80&auto=format&fit=crop"],
    description: "Pure upada silk, hand zardozi poshak — museum-quality embroidery, heirloom grade.",
    featured: true,
  },
  {
    slug: "sheeshphool-jewellery",
    title: "Sheeshphool & Nath — Bridal Set",
    category: "jewellery",
    price: 1290,
    color: "Gold · White",
    image: "https://images.unsplash.com/photo-1601821765780-754fa98637e2?w=800&q=80&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1601821765780-754fa98637e2?w=800&q=80&auto=format&fit=crop"],
    description: "Sheeshphool with nath — lightweight, wedding-day comfortable.",
  },
  {
    slug: "haveli-dress-ivory",
    title: "Haveli Dress — Ivory & Gota",
    category: "dress",
    price: 7200,
    fabric: "Cotton",
    work: "Gota Kinari",
    color: "Ivory · Gold",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&q=80&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&q=80&auto=format&fit=crop"],
    description: "Ivory cotton with gota kinari — summer festive, easy to drape.",
  },
  {
    slug: "sindoor-poshak-red",
    title: "Sindoor Bridal Poshak — Classic Red",
    category: "poshak",
    price: 27500,
    fabric: "Pure Georgette",
    work: "Zardozi + Kundan",
    color: "Classic Red · Gold",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80&auto=format&fit=crop"],
    description: "Classic sindoor red bridal poshak — dense zardozi, odhna with four-side border.",
  },
  {
    slug: "kundan-choker-jewellery",
    title: "Kundan Choker — Rajputi Choker",
    category: "jewellery",
    price: 2490,
    color: "Gold · Kundan",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&q=80&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&q=80&auto=format&fit=crop"],
    description: "Rajputi kundan choker — pairs with every poshak, premium plating.",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
export const categories = ["poshak", "dress", "jewellery"] as const;
