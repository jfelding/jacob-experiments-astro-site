import type { CollectionEntry } from "astro:content";
import type { Props as SEOProps} from "astro-seo";

export enum Category {
    Gardening = "Gardening",
    CookingAndBaking = "Cooking & Baking",
    Software = "Software",
    DataAnalysisAndMachineLearning = "Data Analysis and Machine Learning",
    HardwareAndRepairs = "Hardware & Repairs",
    Other = "Other"
}

export const allO: Category[] = Object.values(Category);

export type Output = {
    title: string;
    description: string;
    date: Date;
    draft?: boolean;
    demoURL?: string;
    repoURL?: string;
    successRating?: "low" | "medium" | "high";
    worthItRating?: "not-worth-it" | "worth-it" | "in-between" | undefined;
    categories: Category[];
    relatedProjectFiles?: string[]; // File names (mdx files) of projects connected to the output
    relatedIdeaFiles?: string[]; // File names (mdx files) of ideas related to the output
    seo?: SEOProps; // SEO properties for better search engine optimization
};

export type Project = {
    title: string;
    description: string;
    date: Date;
    draft?: boolean;
    repoURL?: string;
    demoURL?: string;
    statusRating?: "in-progress" | "on-hold" | "completed" | "delayed" | "upcoming" | "cancelled" | "under-review" | "needs-attention" | "awaiting-feedback" | "testing-phase" | "polishing";
    timeInvestmentRating: "low" | "medium" | "high";
    necessityRating: "low" | "medium" | "high";
    categories: Category[];
    relatedOutputFiles?: string[]; // File names (mdx files) of outputs related to the project
    relatedIdeaFiles?: string[]; // File names (mdx files) of ideas related to the project
    seo?: SEOProps; // SEO properties for better search engine optimization
};

export type Idea = {
    title: string;
    description: string;
    date: Date;
    draft?: boolean;
    categories?: Category[];
    relatedOutputFiles?: string[]; // File names (mdx files) of outputs related to the idea
    relatedProjectFiles?: string[]; // File names (mdx files) of projects connected to the idea
    seo?: SEOProps; // SEO properties for better search engine optimization
};

export const loadIdeaFromFilename = (idea: CollectionEntry<'ideas'>): string => {
    return idea.data.title;
};

export const loadProjectFromFilename = (project: CollectionEntry<'projects'>): string => {
    return project.data.title;
};

export const loadOutputFromFilename = (output: CollectionEntry<'blog'>): string => {
    return output.data.title;
};

export function generateRelatedFilesOverview<T extends CollectionEntry<any> & { slug: string }>(files: T[], title: string, collectionPath: string, loadTitleFromEntry: (entry: T) => string) {
  if (!files || files.length === 0) {
    return "";
  }

  let output = `<div class="animate flex">`; // Changed to 3 columns
  output += `<span class="font-bold" style="width:150px;">${title}:</span><div class=grid grid-cols-1">`; 

  files.forEach((file: T) => {
    const itemTitle = loadTitleFromEntry(file);
    const url = `/${collectionPath}/${file.slug}`;
    
    output += `<span class="ml-2 col-start-1"><a href="${url}" target="_blank">${itemTitle || file.slug}</a></span>`; // Span across 2 columns
  });

  output += "</div></div>";

  return output;
}
