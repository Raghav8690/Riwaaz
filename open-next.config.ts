import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({
  // Keep default — no UI/animation changes.
  // Incremental cache (ISR revalidate 300 for Sheets) uses default R2/DO behavior.
});
