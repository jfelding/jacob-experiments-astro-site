import { z } from "astro:content";

export const seoSchema = z.object({
  // SEO fields for better search engine optimization and social media sharing
  // All properties are optional to maintain compatibility with existing content
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
});