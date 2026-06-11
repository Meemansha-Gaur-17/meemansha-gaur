import type { Publication } from "@/app/interfaces/content";

export const SECTION_HEADING = "Publications";

export const BACKGROUND_IMAGE = {
  src: "/meemansha-background.png",
  opacity: 0.25,
} as const;

export const PUB_COLORS = ["#f59e0b", "#0a7c6e"];

export const publications: Publication[] = [
  {
    title:
      "The Role of Emotional and Social Intelligence in Mitigating Fear of Missing Out (FoMO) Among College Students",
    journal: "IJIAP",
    period: "2023 – 2024",
    supervisor: "Dr. Kaushlendra Mani Tripathi",
    href: "https://psychopediajournals.com/index.php/ijiap/article/view/791/573",
    highlights: [
      "Examined the relationship between emotional, social intelligence, and FoMO in 18–28-year-old college students.",
      "Correlated higher EI and SI with lower FoMO, resulting in proposed campus-level interventions.",
    ],
  },
  {
    title:
      "Understanding Non-communicable Diseases from the Lens of Communicable Diseases",
    journal: "International Journal of Scientific Development and Research",
    period: "2022 – 2023",
    supervisor: "Dr. Sherin Lee Thomas",
    href: "https://ijsdr.org/viewpaperforall.php?paper=IJSDR2305329",
    highlights: [
      "Conducted a cross-sectional survey examining COVID-19's impact on 18–25-year-olds in South India.",
      "Identified negative changes in physical activity, diet, and mental health, highlighting NCD risk factors.",
    ],
  },
];
