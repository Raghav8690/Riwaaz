export function driveToDirect(url: string): string {
  if (!url) return url;
  const trimmed = url.trim();
  // already direct?
  if (trimmed.includes("uc?export=view") || trimmed.includes("lh3.google")) return trimmed;
  // patterns: /file/d/<id>/view, /open?id=<id>, /uc?id=<id>
  const m1 = trimmed.match(/\/file\/d\/([a-zA-Z0-9-_]+)/);
  if (m1) return `https://drive.google.com/uc?export=view&id=${m1[1]}`;
  const m2 = trimmed.match(/[?&]id=([a-zA-Z0-9-_]+)/);
  if (m2) return `https://drive.google.com/uc?export=view&id=${m2[1]}`;
  // if it's already an image url, return as is
  if (/^https?:\/\//.test(trimmed)) return trimmed;
  return trimmed;
}
