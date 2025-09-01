import { defineCollection, z } from "astro:content";
import { Category } from "src/project.type";

const work = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
  }),
});


const blog = defineCollection({
  type: "content",
  schema: z.object({
    // Original Output schema properties
    title: z.string(),
    description: z.string(),
    date: z.date(),
    draft: z.boolean().optional(),
    demoURL: z.string().url().optional(),
    repoURL: z.string().url().optional(),
    successRating: z.enum(["low", "medium", "high"]).optional(),
    worthItRating: z.enum(["not-worth-it", "worth-it", "in-between"]).optional(),
    categories: z.array(z.nativeEnum(Category)),
    relatedProjectFiles: z.array(z.string()).optional(),
    relatedIdeaFiles: z.array(z.string()).optional(),
    // New SEO override properties
    seo: z.any().optional(),
  }),
});

const ideas = defineCollection({
  type: "content",
  schema: z.object({
    // Original Idea schema properties
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    categories: z.array(z.nativeEnum(Category)),
    relatedOutputFiles: z.array(z.string()).optional(),
    relatedProjectFiles: z.array(z.string()).optional(),
    // New SEO override properties
    seo: z.any().optional(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    // Original Project schema properties
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    demoURL: z.string().url().optional(),
    repoURL: z.string().url().optional(),
    statusRating: z.enum(["in-progress", "on-hold", "completed", "delayed", "upcoming", "cancelled", "under-review", "needs-attention", "awaiting-feedback", "testing-phase", "polishing"]).optional(),
    timeInvestmentRating: z.enum(["low", "medium", "high"]).optional(),
    necessityRating: z.enum(["low", "medium", "high"]).optional(),
    categories: z.array(z.nativeEnum(Category)).optional(),
    relatedOutputFiles: z.array(z.string()).optional(),
    relatedIdeaFiles: z.array(z.string()).optional(),
    // New SEO override properties
    seo: z.any().optional(),
  }),
});
export const collections = { blog, work, projects, ideas };
