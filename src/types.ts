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
  image?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterSite?: string;
  twitterCreator?: string;
  ogType?: string;
  ogSiteName?: string;
  publishedTime?: string;
}
