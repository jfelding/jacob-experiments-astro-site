import { defineCollection, z } from "astro:content";
import type { Project, Idea, Output } from "src/project.type";
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
    // SEO fields for better search engine optimization and social media sharing
    // All properties are optional to maintain compatibility with existing content
    seo: z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      canonical: z.string().url().optional(),
      noindex: z.boolean().optional(),
      nofollow: z.boolean().optional(),
      openGraph: z.object({
        basic: z.object({
          title: z.string().optional(),
          type: z.string().optional(),
          image: z.string().url().optional(),
          url: z.string().url().optional(),
        }).optional(),
        optional: z.object({
          audio: z.string().url().optional(),
          description: z.string().optional(),
          locale: z.string().optional(),
          siteName: z.string().optional(),
          video: z.string().url().optional(),
        }).optional(),
        image: z.object({
          secureUrl: z.string().url().optional(),
          type: z.string().optional(),
          width: z.number().optional(),
          height: z.number().optional(),
          alt: z.string().optional(),
        }).optional(),
        article: z.object({
          publishedTime: z.string().optional(),
          modifiedTime: z.string().optional(),
          expirationTime: z.string().optional(),
          authors: z.array(z.string()).optional(),
          section: z.string().optional(),
          tags: z.array(z.string()).optional(),
        }).optional(),
      }).optional(),
      twitter: z.object({
        card: z.enum(['summary', 'summary_large_image', 'app', 'player']).optional(),
        site: z.string().optional(),
        creator: z.string().optional(),
        title: z.string().optional(),
        image: z.string().url().optional(),
        imageAlt: z.string().optional(),
        description: z.string().optional(),
      }).optional(),
      extend: z.object({
        link: z.array(z.object({
          rel: z.string(),
          href: z.string().url(),
          prefetch: z.boolean().optional(),
        })).optional(),
        meta: z.array(z.object({
          name: z.string().optional(),
          property: z.string().optional(),
          content: z.string(),
        })).optional(),
      }).optional(),
    }).optional(),
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
  }),
});

const ideas = defineCollection({
  type: "content",
  schema: z.object({
    // SEO fields for better search engine optimization and social media sharing
    // All properties are optional to maintain compatibility with existing content
    seo: z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      canonical: z.string().url().optional(),
      noindex: z.boolean().optional(),
      nofollow: z.boolean().optional(),
      openGraph: z.object({
        basic: z.object({
          title: z.string().optional(),
          type: z.string().optional(),
          image: z.string().url().optional(),
          url: z.string().url().optional(),
        }).optional(),
        optional: z.object({
          audio: z.string().url().optional(),
          description: z.string().optional(),
          locale: z.string().optional(),
          siteName: z.string().optional(),
          video: z.string().url().optional(),
        }).optional(),
        image: z.object({
          secureUrl: z.string().url().optional(),
          type: z.string().optional(),
          width: z.number().optional(),
          height: z.number().optional(),
          alt: z.string().optional(),
        }).optional(),
        article: z.object({
          publishedTime: z.string().optional(),
          modifiedTime: z.string().optional(),
          expirationTime: z.string().optional(),
          authors: z.array(z.string()).optional(),
          section: z.string().optional(),
          tags: z.array(z.string()).optional(),
        }).optional(),
      }).optional(),
      twitter: z.object({
        card: z.enum(['summary', 'summary_large_image', 'app', 'player']).optional(),
        site: z.string().optional(),
        creator: z.string().optional(),
        title: z.string().optional(),
        image: z.string().url().optional(),
        imageAlt: z.string().optional(),
        description: z.string().optional(),
      }).optional(),
      extend: z.object({
        link: z.array(z.object({
          rel: z.string(),
          href: z.string().url(),
          prefetch: z.boolean().optional(),
        })).optional(),
        meta: z.array(z.object({
          name: z.string().optional(),
          property: z.string().optional(),
          content: z.string(),
        })).optional(),
      }).optional(),
    }).optional(),
    // Original Idea schema properties
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    categories: z.array(z.nativeEnum(Category)),
    relatedOutputFiles: z.array(z.string()).optional(),
    relatedProjectFiles: z.array(z.string()).optional(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    // SEO fields for better search engine optimization and social media sharing
    // All properties are optional to maintain compatibility with existing content
    seo: z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      canonical: z.string().url().optional(),
      noindex: z.boolean().optional(),
      nofollow: z.boolean().optional(),
      openGraph: z.object({
        basic: z.object({
          title: z.string().optional(),
          type: z.string().optional(),
          image: z.string().url().optional(),
          url: z.string().url().optional(),
        }).optional(),
        optional: z.object({
          audio: z.string().url().optional(),
          description: z.string().optional(),
          locale: z.string().optional(),
          siteName: z.string().optional(),
          video: z.string().url().optional(),
        }).optional(),
        image: z.object({
          secureUrl: z.string().url().optional(),
          type: z.string().optional(),
          width: z.number().optional(),
          height: z.number().optional(),
          alt: z.string().optional(),
        }).optional(),
        article: z.object({
          publishedTime: z.string().optional(),
          modifiedTime: z.string().optional(),
          expirationTime: z.string().optional(),
          authors: z.array(z.string()).optional(),
          section: z.string().optional(),
          tags: z.array(z.string()).optional(),
        }).optional(),
      }).optional(),
      twitter: z.object({
        card: z.enum(['summary', 'summary_large_image', 'app', 'player']).optional(),
        site: z.string().optional(),
        creator: z.string().optional(),
        title: z.string().optional(),
        image: z.string().url().optional(),
        imageAlt: z.string().optional(),
        description: z.string().optional(),
      }).optional(),
      extend: z.object({
        link: z.array(z.object({
          rel: z.string(),
          href: z.string().url(),
          prefetch: z.boolean().optional(),
        })).optional(),
        meta: z.array(z.object({
          name: z.string().optional(),
          property: z.string().optional(),
          content: z.string(),
        })).optional(),
      }).optional(),
    }).optional(),
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
  }),
});
export const collections = { blog, work, projects, ideas };
