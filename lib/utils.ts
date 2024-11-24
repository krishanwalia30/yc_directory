import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
}

export function formatViews(views: number) {
  if (views > 1){
    return `${views} Views`;
  }
  else if (views == 1) return `${views} View`;
  else return "No views";
}

export function parseServerActionResponse<T>(response:T) {
  return JSON.parse(JSON.stringify(response));
}