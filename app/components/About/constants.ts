import type { AboutContent, Service } from "@/app/interfaces/content";
import type { CardTheme } from "./interfaces";

export const ABOUT_IMAGE = {
  src: "/meemansha_image_2.jpg",
  alt: "Meemansha Gaur",
  width: 380,
  height: 440,
} as const;

export const CARD_THEMES: CardTheme[] = [
  {
    bg: "#0a7c6e",
    bgGrad: "linear-gradient(135deg, #0a7c6e 0%, #0d9d8c 100%)",
    title: "text-white",
    desc: "rgba(255,255,255,0.78)",
    num: "rgba(255,255,255,0.10)",
    rule: "rgba(255,255,255,0.25)",
  },
  {
    bg: "#f59e0b",
    bgGrad: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)",
    title: "text-gray-900",
    desc: "rgba(30,20,0,0.65)",
    num: "rgba(0,0,0,0.08)",
    rule: "rgba(0,0,0,0.15)",
  },
  {
    bg: "#ff6b35",
    bgGrad: "linear-gradient(135deg, #ff6b35 0%, #ff8c5a 100%)",
    title: "text-white",
    desc: "rgba(255,255,255,0.78)",
    num: "rgba(255,255,255,0.10)",
    rule: "rgba(255,255,255,0.25)",
  },
];

export const about: AboutContent = {
  eyebrow: "About",
  heading:
    "My name means analysis of life. Everything I do is just that, in a different room.",
  bio: [
    "I chose psychology because I needed it first. That experience never left me — it shaped how I listen, how I research, and how I show up in a room with someone who's quietly looking for answers.",
    "Outside the clinic, I'm a trained Kathak dancer with a six-year graduate diploma in North Indian classical dance, and a writer who led research and editing for my college magazine Kaizen.",
  ],
};

export const CREDENTIALS_STRIP = [
  "Counseling Psychologist",
  "PhD Researcher at Amity University",
  "Founder, Psyber Hub",
  "TEDx Speaker",
  "Published Researcher",
];

export const services: Service[] = [
  {
    title: "Individual Therapy",
    description:
      "Evidence-based, eclectic therapy (CBT, DBT, Psychodynamic, Narrative, Mindfulness) for anxiety, depression, and trauma.",
  },
  {
    title: "Child Psychology",
    description:
      "Specialized social communication and language sessions for neurodivergent children with individualized, multidisciplinary planning.",
  },
  {
    title: "Crisis Support",
    description:
      "Trauma-informed support for individuals in crisis, including narcissistic abuse survivors and mental health emergencies.",
  },
  {
    title: "Career Counselling",
    description:
      "Guiding students through assessments, stream selection, and academic decision-making with integrated mental health support.",
  },
  {
    title: "Research & Academia",
    description:
      "Published researcher in peer-reviewed journals, currently pursuing a PhD in Psychology at Amity University.",
  },
  {
    title: "Workshops & Speaking",
    description:
      "TEDx speaker and facilitator on psychology, doomscrolling, emotional awareness, and suicide prevention.",
  },
];
