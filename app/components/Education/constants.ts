import type { EducationEntry } from "@/app/interfaces/content";

export const SECTION_HEADING = "Academic Background";

export const EDU_COLORS = ["#0a7c6e", "#f59e0b", "#ff6b35"];

export const education: EducationEntry[] = [
  {
    degree: "PhD in Psychology",
    institution: "Amity University",
    location: "Gurugram, India",
    period: "July 2025 – January 2029 (Expected)",
    cgpa: "9.71 / 10",
    note: "",
  },
  {
    degree: "Master of Arts, Clinical Psychology",
    institution: "Amity University",
    location: "Noida, India",
    period: "August 2023 – May 2025",
    cgpa: "8.3 / 10",
    note: "Qualified for Ph.D. eligibility in UGC NET Exam (Dec 2024)",
  },
  {
    degree: "Bachelor of Arts, Psychology, Journalism & Women Studies",
    institution: "Indian Institute of Psychology and Research",
    location: "Bangalore, India",
    period: "July 2019 – October 2023",
    cgpa: "8.77 / 10",
    note: "",
  },
];
