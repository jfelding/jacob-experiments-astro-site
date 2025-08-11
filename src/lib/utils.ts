// lib/utils.ts

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Category } from "src/project.type";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric"
  }).format(date);
}

export function readingTime(html: string) {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = ((wordCount / 200) + 1).toFixed();
  return `${readingTimeMinutes} min read`;
}

export function dateRange(startDate: Date, endDate?: Date | string): string {
  const startMonth = startDate.toLocaleString("default", { month: "short" });
  const startYear = startDate.getFullYear().toString();
  let endMonth;
  let endYear;

  if (endDate) {
    if (typeof endDate === "string") {
      endMonth = "";
      endYear = endDate;
    } else {
      endMonth = endDate.toLocaleString("default", { month: "short" });
      endYear = endDate.getFullYear().toString();
    }
  }

  return `${startMonth}${startYear} - ${endMonth}${endYear}`;
}

export function getRatingDescriptor(rating: 'low' | 'medium' | 'high'): string {
  switch (rating) {
    case 'low':
      return 'Low';
    case 'medium':
      return 'Medium';
    case 'high':
      return 'High';
    default:
      return 'Unknown';
  }
}

export function getRatingEmoji(rating: 'low' | 'medium' | 'high'): string {
  switch (rating) {
    case 'low':
      return '🟢';
    case 'medium':
      return '🟡';
    case 'high':
      return '🔴';
    default:
      return '❓';
  }
}

export function getStatusEmoji(category: undefined | 'in-progress' | 'on-hold' | 'completed' | 'delayed' | 'upcoming' | 'cancelled' | 'under-review' | 'needs-attention' | 'awaiting-feedback' | 'testing-phase' | 'polishing'): string {
  switch (category) {
    case 'in-progress':
      return '🏃‍➡️';
    case 'on-hold':
      return '⏸️';
    case 'completed':
      return '✅';
    case 'delayed':
      return '⌛';
    case 'upcoming':
      return '📅';
    case 'cancelled':
      return '❌';
    case 'under-review':
      return '🧐';
    case 'needs-attention':
      return '🔍';
    case 'awaiting-feedback':
      return '🗣️';
    case 'testing-phase':
      return '🧪';
    case 'polishing':
      return '✨';
    default:
      return '❓';
  }
}

export function getStatusDescriptor(category: undefined | 'in-progress' | 'on-hold' | 'completed' | 'delayed' | 'upcoming' | 'cancelled' | 'under-review' | 'needs-attention' | 'awaiting-feedback' | 'testing-phase' | 'polishing'): string {
  switch (category) {
    case 'in-progress':
      return 'Work in Progress';
    case 'on-hold':
      return 'On Hold';
    case 'completed':
      return 'Completed';
    case 'delayed':
      return 'Delayed';
    case 'upcoming':
      return 'Upcoming';
    case 'cancelled':
      return 'Cancelled';
    case 'under-review':
      return 'Under Review';
    case 'needs-attention':
      return 'Needs Attention';
    case 'awaiting-feedback':
      return 'Awaiting Feedback';
    case 'testing-phase':
      return 'Testing Phase';
    case 'polishing':
      return 'Polishing';
    default:
      return 'Unknown Status';
  }
}

export function getCategoryEmoji(category: Category): string {
  switch (category) {
    case Category.Gardening:
      return '🌱'; // Gardening
    case Category.CookingAndBaking:
      return '👩‍🍳'; // Cooking & Baking
    case Category.Software:
      return '💻'; // Software
    case Category.DataAnalysisAndMachineLearning:
      return '📊'; // Data Analysis and Machine Learning
    case Category.HardwareAndRepairs:
      return '🔧'; // Hardware & Repairs
    case Category.Other:
      return '📦'; // Other
    default:
      return '❓'; // Unknown category
  }
}
