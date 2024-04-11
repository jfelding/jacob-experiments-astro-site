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
    successRating?: 'low' | 'medium' | 'high';
    worthItRating?: 'not-worth-it' | 'worth-it' | 'in-between' | undefined;
    categories: Category[];
};

export type Project = {
    title: string;
    description: string;
    date: Date;
    draft?: boolean;
    outputURL?: string;
    repoURL?: string;
    statusRating?: 'in-progress' | 'on-hold' | 'completed' | 'delayed' | 'upcoming' | 'cancelled' | 'under-review' | 'needs-attention' | 'awaiting-feedback' | 'testing-phase' | 'polishing';
    timeInvestmentRating: 'low' | 'medium' | 'high';
    necessityRating: 'low' | 'medium' | 'high';
    categories: Category[];
};

export type Idea = {
    title: string;
    description: string;
    date: Date;
    draft?: boolean;
    projectUrl?: string;
    statusRating?: 'in-progress' | 'on-hold' | 'completed' | 'delayed' | 'upcoming' | 'cancelled' | 'under-review' | 'needs-attention' | 'awaiting-feedback' | 'testing-phase' | 'polishing';
    categories: Category[];
};




