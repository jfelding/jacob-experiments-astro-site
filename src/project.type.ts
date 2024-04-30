import fs from "fs";
import path from "path";

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


export const loadIdeaFromFilename = (ideaFilename: string): string => {
    const ideasDirectory = "src/content/ideas/";
    const ideaFilePath = path.resolve(ideasDirectory, `${ideaFilename}`);
    const fileContent = fs.readFileSync(ideaFilePath, "utf-8");
    const frontmatter = parseFrontmatter(fileContent);
    return frontmatter.title;
};

import * as yaml from 'js-yaml';


const parseFrontmatter = (content: string): Record<string, any> => {
    const frontmatterRegex = /^---\s*\n([\s\S]*?)\n?---/;
    const match = content.match(frontmatterRegex);
    if (match && match[1]) {
        return yaml.load(match[1]);
    } else {
        return {};
    }
};


