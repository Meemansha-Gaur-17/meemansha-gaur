import type { HeroContent } from "@/app/interfaces/content";
import type { HeroFloatingBadge, HeroStatusBadge } from "./interfaces";

export const STAT_COLORS = ["#0a7c6e", "#f59e0b", "#ff6b35"];

export const PROFILE_IMAGE = {
  src: "/meemansha-gaur-profile.jpeg",
  alt: "Meemansha Gaur",
  width: 380,
  height: 380,
} as const;

export const FLOATING_BADGE: HeroFloatingBadge = {
  emoji: "🎤",
  title: "TEDx Speaker",
  subtitle: "Gurgaon, 2026",
};

export const STATUS_BADGE: HeroStatusBadge = {
  label: "Currently",
  value: "PhD Scholar",
};

export const hero: HeroContent = {
  eyebrow: "PhD Scholar · Counseling Psychologist · TEDx Speaker",
  ctaPrimary: { label: "View My Work", href: "#experience" },
  ctaSecondary: { label: "Get in Touch", href: "#contact" },
  stats: [
    { value: "10+", label: "Active Clients" },
    { value: "90%", label: "Satisfaction Rate" },
    { value: "TEDx", label: "Speaker 2026" },
  ],
};
