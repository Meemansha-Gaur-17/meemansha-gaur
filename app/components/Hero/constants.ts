import type { HeroContent } from "@/app/interfaces/content";

export const STAT_COLORS = ["#0a7c6e", "#f59e0b"];

export const PROFILE_IMAGE = {
  src: "/meemansha-gaur-profile.jpeg",
  alt: "Meemansha Gaur",
  width: 380,
  height: 380,
} as const;

export const hero: HeroContent = {
  eyebrow: "",
  ctaPrimary: { label: "View My Work", href: "/work" },
  ctaSecondary: { label: "Book a Session", href: "/book" },
  stats: [
    { value: "3+", label: "Years in Practice" },
    { value: "50+", label: "Children Trained" },
  ],
};
