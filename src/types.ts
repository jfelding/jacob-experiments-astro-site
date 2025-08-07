export type Site = {
  NAME: string;
  EMAIL: string;
  NUM_POSTS_ON_HOMEPAGE: number;
  NUM_WORKS_ON_HOMEPAGE: number;
  NUM_PROJECTS_ON_HOMEPAGE: number;
  NUM_IDEAS_ON_HOMEPAGE: number;

};

export type Metadata = {
  TITLE: string;
  DESCRIPTION: string;
};

export type Socials = {
  NAME: string;
  HREF: string;
}[];

export interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  openGraph?: {
    basic?: {
      title?: string;
      type?: string;
      image?: string;
      url?: string;
    };
    optional?: {
      audio?: string;
      description?: string;
      locale?: string;
      siteName?: string;
      video?: string;
    };
    image?: {
      secureUrl?: string;
      type?: string;
      width?: number;
      height?: number;
      alt?: string;
    };
    article?: {
      publishedTime?: string;
      modifiedTime?: string;
      expirationTime?: string;
      authors?: string[];
      section?: string;
      tags?: string[];
    };
  };
  twitter?: {
    card?: 'summary' | 'summary_large_image' | 'app' | 'player';
    site?: string;
    creator?: string;
    title?: string;
    image?: string;
    imageAlt?: string;
    description?: string;
  };
  extend?: {
    link?: Array<{
      rel: string;
      href: string;
      prefetch?: boolean;
    }>;
    meta?: Array<{
      name?: string;
      property?: string;
      content: string;
    }>;
  };
}
