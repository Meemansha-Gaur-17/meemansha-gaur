export interface NavLink {
  label: string;
  href: string;
}

export interface Meta {
  name: string;
  firstName: string;
  lastName: string;
  title: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  linkedinLabel: string;
  linkedinHref: string;
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface HeroContent {
  eyebrow: string;
  ctaPrimary: CtaLink;
  ctaSecondary: CtaLink;
  stats: Stat[];
}

export interface AboutContent {
  eyebrow: string;
  heading: string;
  bio: string[];
}

export interface Service {
  title: string;
  description: string;
}

export interface ExperienceEntry {
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  highlights: string[];
}

export interface Internship {
  role: string;
  organization: string;
  period: string;
  descriptor: string;
  highlights: string[];
}

export interface EducationEntry {
  degree: string;
  institution: string;
  location: string;
  period: string;
  cgpa: string;
  note: string;
}

export interface Publication {
  title: string;
  journal: string;
  period: string;
  supervisor: string;
  href: string;
  highlights: string[];
}

export interface SpeakingEntry {
  event: string;
  organization: string;
  date: string;
  topic: string;
  summary: string;
  featured: boolean;
  videoHref?: string;
  videoId?: string;
}

export interface SkillsContent {
  clinical: string[];
  assessment: string[];
  tools: string[];
}

export interface VolunteeringEntry {
  role: string;
  organization: string;
  period: string;
  detail: string;
}

export interface ExtracurricularEntry {
  category: string;
  detail: string;
}

export interface Testimonial {
  name: string;
  date: string;
  text: string;
}

export type OfferingCategory = "session" | "course" | "resource";

export interface Offering {
  id: number;
  title: string;
  description: string;
  category: OfferingCategory;
  type: "Digital Product" | "Video meeting" | "Package";
  duration?: number;
  price: number;
  originalPrice?: number;
  image?: string;
  href: string;
}

export interface OfferingSection {
  id: OfferingCategory;
  eyebrow: string;
  heading: string;
  description: string;
}
