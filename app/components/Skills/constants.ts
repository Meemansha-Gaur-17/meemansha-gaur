import type {
  ExtracurricularEntry,
  SkillsContent,
  VolunteeringEntry,
} from "@/app/interfaces/content";
import type { SkillCategoryStyle } from "./interfaces";

export const SECTION_HEADING = "Expertise & Beyond";

export const SKILL_CATEGORIES: SkillCategoryStyle[] = [
  { label: "Clinical Skills", color: "#0a7c6e" },
  { label: "Assessment Tools", color: "#f59e0b" },
  { label: "Software & Tools", color: "#ff6b35" },
];

export const EXTRACURRICULAR_COLORS = ["#0a7c6e", "#f59e0b", "#ff6b35"];

export const VOLUNTEER_COLORS = ["#ff6b35", "#f59e0b"];

export const LOCATION_CARD_COPY =
  "Available for remote sessions and on-site collaborations";

export const skills: SkillsContent = {
  clinical: [
    "Clinical Interviewing",
    "Cognitive Behavioral Therapy (CBT)",
    "Dialectical Behavioral Therapy (DBT)",
    "Narrative Therapy",
    "Psychodynamic Therapy",
    "Arts Therapy",
    "Positive Psychotherapy",
    "Crisis Intervention",
    "Mental Status Examination",
    "DSM-5 Diagnostics",
  ],
  assessment: [
    "WISC",
    "Conners Rating Scales",
    "ISAA",
    "Aptitude & Personality Assessments",
  ],
  tools: ["SPSS", "Canva", "Microsoft Clipchamp"],
};

export const volunteering: VolunteeringEntry[] = [
  {
    role: "Crisis Counselor",
    organization: "Vandrevala Foundation",
    period: "December 2024 – March 2025",
    detail:
      "Provided immediate emotional support to individuals experiencing mental health crises via phone and chat.",
  },
  {
    role: "Well-being Volunteer",
    organization: "NIMHANS",
    period: "January 2023 – June 2023",
    detail:
      "Trained in identifying and supporting individuals at risk of suicide. Assisted in mental health awareness workshops.",
  },
];

export const extracurricular: ExtracurricularEntry[] = [
  {
    category: "Creative Arts",
    detail:
      "6-year Graduate Diploma (Prabhakar Level) in Kathak – North Indian Classical Dance",
  },
  {
    category: "Leadership",
    detail:
      "Green House Captain, Modern School Rishikesh – organized house events, sports, and cultural programs.",
  },
  {
    category: "Media & Journalism",
    detail:
      "Senior journalist for college magazine Kaizen – research, writing, editing, and content strategy.",
  },
];
