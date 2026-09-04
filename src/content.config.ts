import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    stack: z.array(z.string()),
    org: z.string(),
    order: z.number(),
    galleries: z
      .array(
        z.object({
          heading: z.string(),
          folder: z.string(), // relative to src/assets/projects, non-recursive
          note: z.string().optional(),
        }),
      )
      .default([]),
  }),
});

export const collections = { projects };
