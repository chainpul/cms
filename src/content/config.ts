import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    pubDate: z.coerce.date(),
    category: z.string().optional(),
    heroImage: z.string().optional(),
  }),
});

export const collections = { blog };