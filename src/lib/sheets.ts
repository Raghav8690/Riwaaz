import type { Product } from "@/data/products";
import { products as fallback } from "@/data/products";
import { driveToDirect } from "./drive";

const SHEETS_CSV_URL =
  process.env.SHEETS_CSV_URL ||
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRqD3n6XJkzZ-Slx1yl5aDab-7LWV2ZCxqww45rRWKPAh0ISMSvNXYVBvwjthKv1ujMTbm4WXmI2fXG/pub?output=csv";

function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let cur = "";
  let row: string[] = [];
  let inQuote = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (c === '"') {
      if (inQuote && text[i + 1] === '"') {
        cur += '"';
        i++;
      } else {
        inQuote = !inQuote;
      }
    } else if (c === "," && !inQuote) {
      row.push(cur);
      cur = "";
    } else if ((c === "\n" || c === "\r") && !inQuote) {
      if (c === "\r" && text[i + 1] === "\n") i++;
      row.push(cur);
      if (row.some((v) => v.trim() !== "")) rows.push(row);
      row = [];
      cur = "";
    } else {
      cur += c;
    }
  }
  if (cur || row.length) {
    row.push(cur);
    if (row.some((v) => v.trim() !== "")) rows.push(row);
  }
  return rows;
}

function slugify(s: string) {
  return s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch(SHEETS_CSV_URL, { next: { revalidate: 300 } });
    if (!res.ok) throw new Error(`Sheets fetch ${res.status}`);
    const text = await res.text();
    const rows = parseCsv(text);
    if (rows.length < 2) return fallback;

    const header = rows[0].map((h) => h.trim().toLowerCase());
    const idx = (name: string) => header.indexOf(name.toLowerCase());

    const out: Product[] = [];
    for (let r = 1; r < rows.length; r++) {
      const row = rows[r];
      const get = (name: string) => (idx(name) >= 0 ? (row[idx(name)] ?? "").trim() : "");
      const title = get("title");
      if (!title) continue;
      if (get("active").toLowerCase() === "false") continue;

      const categoryRaw = get("category").toLowerCase();
      const category = (["poshak", "dress", "jewellery"].includes(categoryRaw) ? categoryRaw : "poshak") as Product["category"];
      const price = Number(get("price").replace(/[^0-9.]/g, "")) || 0;
      if (!price) continue;

      const oldPriceRaw = get("oldprice") || get("old_price") || get("old price");
      const oldPrice = oldPriceRaw ? Number(oldPriceRaw.replace(/[^0-9.]/g, "")) || undefined : undefined;
      const slug = get("slug") ? slugify(get("slug")) : slugify(title);
      const imageRaw = get("image");
      const image = driveToDirect(imageRaw) || fallback[0].image;
      const imagesRaw = get("images");
      const extra = imagesRaw
        ? imagesRaw
            .split(",")
            .map((s) => driveToDirect(s.trim()))
            .filter(Boolean)
        : [];
      const images = extra.length ? extra : [image];

      out.push({
        slug,
        title,
        category,
        price,
        originalPrice: oldPrice && oldPrice > price ? oldPrice : undefined,
        fabric: get("fabric") || undefined,
        work: get("work") || undefined,
        color: get("color") || "",
        image,
        images,
        description: get("description") || `${title} — curated by Riwaaz.`,
        featured: ["true", "1", "yes"].includes(get("featured").toLowerCase()),
      });
    }

    // if sheet empty or no valid rows, fallback
    if (out.length === 0) return fallback;
    return out;
  } catch {
    return fallback;
  }
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const all = await getProducts();
  return all.find((p) => p.slug === slug);
}
