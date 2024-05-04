import fs from "fs";
import path from "path";
import yaml from "js-yaml";


export enum Category {
    Gardening = "Gardening",
    CookingAndBaking = "Cooking & Baking",
    Software = "Software",
    DataAnalysisAndMachineLearning = "Data Analysis and Machine Learning",
    HardwareAndRepairs = "Hardware & Repairs"
}

export const allCategories: Category[] = Object.values(Category);

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
};

export type Project = {
    title: string;
    description: string;
    date: Date;
    draft?: boolean;
    repoURL?: string;
    statusRating?: "in-progress" | "on-hold" | "completed" | "delayed" | "upcoming" | "cancelled" | "under-review" | "needs-attention" | "awaiting-feedback" | "testing-phase" | "polishing";
    timeInvestmentRating: "low" | "medium" | "high";
    necessityRating: "low" | "medium" | "high";
    categories: Category[];
    relatedOutputFiles?: string[]; // File names (mdx files) of outputs related to the project
    relatedIdeaFiles?: string[]; // File names (mdx files) of ideas related to the project
};

export type Idea = {
    title: string;
    description: string;
    date: Date;
    draft?: boolean;
    categories?: Category[];
    relatedOutputFiles?: string[]; // File names (mdx files) of outputs related to the idea
    relatedProjectFiles?: string[]; // File names (mdx files) of projects connected to the idea
};

type Frontmatter = Record<string, any>;

const parseFrontmatter = (content: string): Frontmatter => {
    const frontmatterRegex = /^---\s*\n([\s\S]*?)\n?---/;
    const match = content.match(frontmatterRegex);
    if (match && match[1]) {
        return yaml.load(match[1]) as Frontmatter;
    } else {
        return {};
    }
};

const loadFromFilename = (folder: string, filename: string): string => {
    const directory = `src/content/${folder}/`;
    const filePath = path.resolve(directory, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const frontmatter = parseFrontmatter(fileContent);
    return frontmatter.title;
};

export const loadIdeaFromFilename = (ideaFilename: string): string => {
    return loadFromFilename("ideas", ideaFilename);
};

export const loadProjectFromFilename = (projectFilename: string): string => {
    return loadFromFilename("projects", projectFilename);
};

export const loadOutputFromFilename = (outputFilename: string): string => {
    return loadFromFilename("blog", outputFilename);
};

export function generateRelatedFilesOverview(files: string[], title: string, path: string, loadTitleFromFilename: (filename: string) => string) {
  if (!files || files.length === 0) {
    return "";
  }

  let output = `<div class="animate flex">`; // Changed to 3 columns
  output += `<span class="font-bold" style="width:150px;">${title}:</span><div class=grid grid-cols-1">`; 

  files.forEach((filename: string) => {
    const title = loadTitleFromFilename(filename);
    const filenameWithoutExtension = filename.replace(/\.(md|mdx)$/, "");
    const url = `../${path}/${filenameWithoutExtension}`;
    
    output += `<span class="ml-2 col-start-1"><a href="${url}" target="_blank">${title || filenameWithoutExtension}</a></span>`; // Span across 2 columns
  });

  output += "</div></div>";

  return output;
}
