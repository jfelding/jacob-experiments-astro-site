import { defineCollection, z } from "astro:content";
import type { Project, Idea, Output } from "src/project.type";

const work = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
  }),
});


const blog = defineCollection<Output>({
});
const ideas = defineCollection<Idea>({
});

const projects = defineCollection<Project>({
  type: "content",
});
export const collections = { blog, work, projects, ideas };
