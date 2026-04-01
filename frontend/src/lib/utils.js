import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(...inputs));
}

// It does TWO things:
// 1️ clsx
//  Combines class names conditionally
// 2️tailwind-merge
//  Removes duplicate/conflicting Tailwind classesi
