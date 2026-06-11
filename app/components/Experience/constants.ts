import type {
  ExperienceEntry,
  Internship,
  VolunteeringEntry,
} from "@/app/interfaces/content";
import type { CurrentTheme } from "./interfaces";

export const SECTION_HEADING = "Professional Journey";

export const CURRENT_THEMES: CurrentTheme[] = [
  {
    grad: "linear-gradient(135deg, #085f56 0%, #0a7c6e 60%, #0d9d8c 100%)",
    titleClass: "text-white",
    subColor: "rgba(255,255,255,0.75)",
    bulletColor: "rgba(255,255,255,0.4)",
    badgeBg: "rgba(255,255,255,0.15)",
    wmColor: "rgba(255,255,255,0.06)",
    lineColor: "rgba(255,255,255,0.18)",
  },
  {
    grad: "linear-gradient(135deg, #d97706 0%, #f59e0b 60%, #fbbf24 100%)",
    titleClass: "text-gray-900",
    subColor: "rgba(30,15,0,0.62)",
    bulletColor: "rgba(0,0,0,0.28)",
    badgeBg: "rgba(0,0,0,0.1)",
    wmColor: "rgba(0,0,0,0.05)",
    lineColor: "rgba(0,0,0,0.12)",
  },
  {
    grad: "linear-gradient(135deg, #e05a27 0%, #ff6b35 60%, #ff8c5a 100%)",
    titleClass: "text-white",
    subColor: "rgba(255,255,255,0.75)",
    bulletColor: "rgba(255,255,255,0.4)",
    badgeBg: "rgba(255,255,255,0.15)",
    wmColor: "rgba(255,255,255,0.06)",
    lineColor: "rgba(255,255,255,0.18)",
  },
];

export const PAST_COLORS = ["#0a7c6e", "#f59e0b", "#ff6b35", "#0a7c6e"];

export const INTERN_GRADS = [
  "linear-gradient(135deg, #d97706 0%, #f59e0b 100%)",
  "linear-gradient(135deg, #e05a27 0%, #ff6b35 100%)",
  "linear-gradient(135deg, #0a7c6e 0%, #0d9d8c 100%)",
];

export const INTERN_COLORS = ["#f59e0b", "#ff6b35", "#0a7c6e"];

export const TIMELINE_GRADIENT =
  "linear-gradient(to bottom, #0a7c6e, #f59e0b, #ff6b35, #0a7c6e)";

export const VOLUNTEER_COLORS = ["#ff6b35", "#f59e0b"];

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

export const experience: ExperienceEntry[] = [
  {
    role: "Centre Head & Child Psychologist",
    company: "Palette Care",
    location: "Gurgaon, On-site",
    period: "March 2026 – Present",
    current: true,
    highlights: [
      "Spearheaded 6+ institutional collaborations with daycares, schools, and sports academies within 2 months of joining.",
      "Conduct social communication and language sessions for neurodivergent children, managing a caseload of 10+ clients.",
      "Facilitate parenting sessions and workshops, equipping caregivers with strategies to support neurodivergent children.",
    ],
  },
  {
    role: "Digital Support & Outreach Specialist",
    company: "Unfilteredd",
    location: "Remote, Part-time",
    period: "March 2026 – Present",
    current: true,
    highlights: [
      "Provided trauma-informed emotional support to narcissistic abuse survivors via social media DMs.",
      "Triaged sensitive disclosures including self-harm and crisis situations.",
      "Drafted empathetic responses on behalf of the founder across high-volume interactions.",
    ],
  },
  {
    role: "Founder & Counseling Psychologist",
    company: "Psyber Hub",
    location: "Private Practice, Remote",
    period: "April 2024 – Present",
    current: true,
    highlights: [
      "Founded and grew a private psychotherapy practice from pro bono trainee work to a paid model.",
      "Maintained a 90% client satisfaction rate across diverse presenting concerns.",
      "Deliver eclectic therapy (CBT, Psychodynamic, Solution-Focused, Narrative, Existential, Mindfulness) for anxiety, depression, and trauma.",
    ],
  },
  {
    role: "School Career Counsellor",
    company: "Government Girls Inter College",
    location: "Rishikesh, On-site",
    period: "November 2025 – January 2026",
    current: false,
    highlights: [
      "Provided career counselling to Grades 9–12 students using aptitude, interest, and personality assessments.",
      "Government Project in collaboration with NGO – Beyond Mentor.",
      "Integrated mental health screening and psychoeducation to address academic stress and anxiety.",
    ],
  },
  {
    role: "Developmental Psychologist",
    company: "Children First",
    location: "Gurgaon, On-site",
    period: "April 2025 – September 2025",
    current: false,
    highlights: [
      "Conducted Social Communication and Language (SCL) sessions for neurodivergent children.",
      "Collaborated with occupational therapists and multidisciplinary teams for integrated, child-centered care.",
      "Administered WISC, Conners, and ISAA assessments for diagnosis and intervention planning.",
    ],
  },
  {
    role: "Shadow Teacher",
    company: "Insighte",
    location: "",
    period: "January 2023 – April 2023",
    current: false,
    highlights: [
      "Assisted a special-needs child in an educational setting, supporting learning and development.",
      "Improved academic performance by 20% through collaboration with educators on developmental milestones.",
    ],
  },
  {
    role: "Holistic Development Trainer",
    company: "Little Leap",
    location: "",
    period: "October 2022 – November 2022",
    current: false,
    highlights: [
      "Trained 50+ children (ages 4–14) in communication and social-emotional development.",
      "Achieved measurable improvements in socio-emotional skills for 80% of participants.",
    ],
  },
];

export const internships: Internship[] = [
  {
    role: "Intern in Mental Health",
    organization: "Institute of Psychological Sciences and Research",
    period: "July 2024 – August 2024",
    descriptor: "Psychoeducational workshops and clinical supervision in mental health settings.",
    highlights: [
      "Developed psychoeducational materials and facilitated workshops on somatoform disorders, neurodevelopmental disorders, and family therapy.",
      "Participated in weekly supervision and training sessions to enhance clinical skills and receive feedback.",
    ],
  },
  {
    role: "Clinical Psychology Intern",
    organization: "Sir Ganga Ram Hospital",
    period: "May 2024 – July 2024",
    descriptor: "Hospital-based intake interviews, MSE, and interdisciplinary case discussions.",
    highlights: [
      "Conducted comprehensive intake interviews and Mental State Examinations (MSE) within a hospital clinical psychology setting.",
      "Collaborated with healthcare teams for integrated patient care and contributed to interdisciplinary case discussions.",
    ],
  },
  {
    role: "Clinical Psychology Intern",
    organization: "Synapses Neuropsychiatry Clinic",
    period: "January 2024 – March 2024",
    descriptor: "Intake assessments and supervised therapeutic interventions in outpatient psychiatry.",
    highlights: [
      "Conducted intake interviews and Mental State Examinations (MSE) to assess cognitive and emotional functioning.",
      "Assisted in developing treatment plans and providing therapeutic interventions under supervision.",
    ],
  },
  {
    role: "Clinical Psychology Intern",
    organization: "We Avec U Mental Health Organization",
    period: "September 2023 – November 2023",
    descriptor: "Case history, MSE, and assessments across clinical and rehabilitation settings.",
    highlights: [
      "Acquired practical skills in Mental Status Examinations and comprehensive case history taking.",
      "Observed clients across a spectrum of disorders and conducted assessments in juvenile justice and rehabilitation settings.",
    ],
  },
  {
    role: "Clinical Psychology Intern",
    organization: "Fortis Healthcare",
    period: "July 2023",
    descriptor: "Psychological assessments, DSM-5 diagnostics, and crisis intervention training.",
    highlights: [
      "Trained in administering, scoring, and interpreting psychological assessments per DSM-5 diagnostic criteria.",
      "Learned crisis intervention, risk assessment, and immediate response strategies for suicidal individuals.",
    ],
  },
  {
    role: "Clinical Psychology Intern",
    organization: "Cognizavest",
    period: "June 2023 – July 2023",
    descriptor: "ICD and DSM-based case studies across the full patient management process.",
    highlights: [
      "Applied ICD and DSM criteria to clinical case studies across the full patient management process.",
      "Strengthened case history taking and theoretical-to-practical knowledge in clinical settings.",
    ],
  },
  {
    role: "Psychology Intern",
    organization: "Cherith Brook Counselling Center",
    period: "April 2022 – January 2023",
    descriptor: "Hands-on CBT experience under licensed therapist supervision.",
    highlights: [
      "Gained hands-on CBT experience under licensed therapists' supervision and contributed to case studies and reports.",
      "Conducted research on CBT efficacy and participated in regular training sessions.",
    ],
  },
  {
    role: "Psychology Intern",
    organization: "Psychopedia",
    period: "June 2022 – July 2022",
    descriptor: "Foundational counseling psychology training and ethical practice workshops.",
    highlights: [
      "Acquired foundational counseling psychology knowledge through mentorship and hands-on experience.",
      "Participated in training sessions on ethical practices and counseling strategies.",
    ],
  },
  {
    role: "Psychology Intern",
    organization: "UrHealthyMind",
    period: "January 2021 – April 2022",
    descriptor: "Mental health content creation and community engagement for awareness campaigns.",
    highlights: [
      "Developed engaging psychological content for blogs, social media, and newsletters with licensed psychologists.",
      "Conducted research on mental health trends and engaged with the online community to promote awareness.",
    ],
  },
  {
    role: "Psychology Intern",
    organization: "Budding Psychologists",
    period: "November 2020 – January 2021",
    descriptor: "Research-based psychological content for blogs and social media platforms.",
    highlights: [
      "Developed research-based psychological content for the organization's blog and social media platforms.",
      "Collaborated with licensed psychologists to ensure accuracy and alignment with evidence-based practices.",
    ],
  },
];
