"use client";
import "@/lib/storyblok/init-client";
export default function StoryblokProvider({ children }: { children: React.ReactNode }) {
  return children;
}