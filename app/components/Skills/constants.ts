import type { SkillsContent } from "@/app/interfaces/content";
import type { SkillCategoryStyle } from "./interfaces";

export const SECTION_HEADING = "Clinical Expertise";

export const SKILL_CATEGORIES: SkillCategoryStyle[] = [
  { label: "Clinical Approaches", color: "#0a7c6e" },
  { label: "Assessment Tools", color: "#f59e0b" },
];

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
  tools: [],
};
