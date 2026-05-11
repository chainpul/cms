import { defineConfig } from 'astro/config';
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  // Baris hybrid dihapus karena Astro 5 sudah otomatis mendukung prerender
  output: "hybrid", 
  
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop' 
    }
  }
});