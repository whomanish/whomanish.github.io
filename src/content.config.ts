import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string()
  })
});

const listingSchema = z.object({
  title: z.string(),
  displayDate: z.string(),
  date: z.string(),
  order: z.number().int().positive(),
  description: z.string(),
  url: z.url()
});

const writeups = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/writeups" }),
  schema: listingSchema
});

const caseStudies = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/case-studies" }),
  schema: listingSchema
});

export const collections = { pages, writeups, caseStudies };
