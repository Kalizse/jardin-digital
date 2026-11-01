
import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const garden = defineCollection({
  loader: glob({
    base: "./src/content/garden",
    pattern: "**/*.{md,mdx}",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image().optional(),
      featured: z.boolean().optional(),
    }),
});

export const collections = { garden };
