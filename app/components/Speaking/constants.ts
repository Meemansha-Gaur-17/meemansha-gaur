import type { SpeakingEntry } from "@/app/interfaces/content";
import type { FeaturedTalkStyle, PracticeHighlight } from "./interfaces";

export const SECTION_HEADING = "Talks & Workshops";

export const FEATURED_TALK_STYLE: FeaturedTalkStyle = {
  backgroundImage: "/meemansha-tedx.jpg",
  overlayColor: "#e05a27",
  watermarkText: "TED",
};

export const PRACTICE_HIGHLIGHT: PracticeHighlight = {
  eyebrow: "Private Practice",
  title: "Psyber Hub",
  description:
    "Founder-led online therapy practice offering individual counseling, parent consultations, and psychoeducation sessions.",
};

export const speaking: SpeakingEntry[] = [
  {
    event: "TEDx Speaker",
    organization: "TEDx Narayana E-Techno S Youth, Gurgaon",
    date: "February 1, 2026",
    topic: "Doomscrolling",
    summary:
      "Delivered a talk on Doomscrolling to a live audience, addressing themes of psychology, emotional awareness, and real-world application for youth and professionals.",
    featured: true,
    videoHref: "https://www.youtube.com/watch?v=_z4h1nWKOlM",
  },
  {
    event: "Suicide Awareness Workshop",
    organization: "Rotaract Club of Delhi South East & Kathmandu",
    date: "September 24, 2025",
    topic: "Suicide Prevention",
    summary:
      "Conducted a session raising awareness about suicide prevention and mental health support for youth participants.",
    featured: false,
  },
];
