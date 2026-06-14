import type { Offering, OfferingSection } from "@/app/interfaces/content";
import type { OfferingCategory, OfferingsView } from "./interfaces";

export const SESSIONS_HEADING = "Therapy & Guidance";
export const RESOURCES_HEADING = "Courses & Resources";
export const TOPMATE_PROFILE = "https://topmate.io/meemansha_gaur";

export function sectionsForView(view: OfferingsView): OfferingSection[] {
  if (view === "sessions") {
    return offeringSections.filter((section) => section.id === "session");
  }
  return offeringSections.filter((section) => section.id !== "session");
}

export function configForView(view: OfferingsView) {
  if (view === "sessions") {
    return {
      eyebrow: "One-on-One",
      heading: "Book a Session",
      description:
        "Choose a session below and book instantly on Topmate. All sessions are one-on-one video calls.",
      sectionId: "sessions",
    };
  }
  return {
    eyebrow: "Resources",
    heading: RESOURCES_HEADING,
    description:
      "Digital courses, exam prep kits, and clinician toolkits — browse and purchase on Topmate.",
    sectionId: "resources",
  };
}

export function offeringsByCategory(category: OfferingCategory, view: OfferingsView) {
  const items = offerings.filter((offering) => offering.category === category);
  if (view === "resources") {
    return [...items].sort((a, b) => b.price - a.price);
  }
  return items;
}

export const offeringSections: OfferingSection[] = [
  {
    id: "session",
    eyebrow: "Book a Session",
    heading: "Therapy & Guidance",
    description:
      "One-on-one video calls for therapy, discovery, and career guidance.",
  },
  {
    id: "course",
    eyebrow: "Learn & Prepare",
    heading: "Courses & Exam Prep",
    description:
      "Structured notes, PYQs, and bundles for UGC NET, CUET PG, and more.",
  },
  {
    id: "resource",
    eyebrow: "Download & Use",
    heading: "Toolkits & Resources",
    description:
      "Templates, guides, and curated libraries for clinicians and students.",
  },
];

export const offerings: Offering[] = [
  {
    id: 1807706,
    title: "Discovery call",
    description: "Let's begin your healing journey",
    category: "session",
    type: "Video meeting",
    duration: 20,
    price: 199,
    href: "https://topmate.io/meemansha_gaur/1807706",
  },
  {
    id: 1413202,
    title: "Psychology Student Career Guidance",
    description: "Session to get a roadmap every psych student wish to get",
    category: "session",
    type: "Video meeting",
    duration: 45,
    price: 799,
    originalPrice: 999,
    href: "https://topmate.io/meemansha_gaur/1413202",
  },
  {
    id: 1308468,
    title: "Therapy Session for 18+",
    description: "Individual Session to navigate life in fun way",
    category: "session",
    type: "Video meeting",
    duration: 60,
    price: 1000,
    originalPrice: 1500,
    href: "https://topmate.io/meemansha_gaur/1308468",
  },
  {
    id: 1518844,
    title: "UGC NET Psychology PowerPack",
    description: "Paper 1 + Paper 2 (Psychology) Combo",
    category: "course",
    type: "Package",
    price: 849,
    href: "https://topmate.io/meemansha_gaur/1518844",
  },
  {
    id: 1463425,
    title: "Psychology NET Cracker",
    description: "Ace UGC NET Psychology with notes, PYQs, WhatsApp support!",
    category: "course",
    type: "Digital Product",
    price: 699,
    originalPrice: 1999,
    image: "https://static.topmate.io/oSUP4DfuDrziLRVTFLn5J8.png",
    href: "https://topmate.io/meemansha_gaur/1463425",
  },
  {
    id: 1518826,
    title: "UGC NET Paper 1 MasterPrep Kit",
    description: "UGC NET Paper 1 kit with notes, eBook, PYQs, mind maps, etc.",
    category: "course",
    type: "Digital Product",
    price: 599,
    originalPrice: 1499,
    image: "https://static.topmate.io/2GZgnS1q6GQJuy1654roHu.png",
    href: "https://topmate.io/meemansha_gaur/1518826",
  },
  {
    id: 1464172,
    title: "Free Psychology courses (with certificates)",
    description: "100% free psychology courses—save time & learn easily!",
    category: "course",
    type: "Digital Product",
    price: 30,
    originalPrice: 99,
    image: "https://static.topmate.io/va3FTeo5Jx81jsqzZGvTyX.png",
    href: "https://topmate.io/meemansha_gaur/1464172",
  },
  {
    id: 1466417,
    title: "Psychology Entrances Master Revision Kit",
    description: "Crack CUET PG and other entrances in Psychology!",
    category: "course",
    type: "Digital Product",
    price: 299,
    originalPrice: 499,
    image: "https://static.topmate.io/1zF6S3p54saXphwctESUNo.jpg",
    href: "https://topmate.io/meemansha_gaur/1466417",
  },
  {
    id: 1821422,
    title: "Research Toolkit",
    description: "Everything you need from topic to thesis.",
    category: "resource",
    type: "Digital Product",
    price: 0,
    originalPrice: 199,
    image: "https://static.topmate.io/8iQKwgyjGXhXYiyeM5WSk7.png",
    href: "https://topmate.io/meemansha_gaur/1821422",
  },
  {
    id: 1983045,
    title: "Therapy notes template",
    description: "Structured templates for clinical note-taking.",
    category: "resource",
    type: "Digital Product",
    price: 0,
    image: "https://static.topmate.io/d2VquRTc7TchVngVmzxTqU.jpg",
    href: "https://topmate.io/meemansha_gaur/1983045",
  },
  {
    id: 1481821,
    title: "SafeSpace Toolkit",
    description: "Resources for Self-Harm & Suicide Prevention",
    category: "resource",
    type: "Digital Product",
    price: 0,
    originalPrice: 99,
    image: "https://static.topmate.io/rejcPcJvX6Y39MoeRNqqit.jpg",
    href: "https://topmate.io/meemansha_gaur/1481821",
  },
  {
    id: 1707150,
    title: "Psychology e-library",
    description: "Curated psychology e-books",
    category: "resource",
    type: "Digital Product",
    price: 0,
    originalPrice: 99,
    image: "https://static.topmate.io/hJrKPQ1w3PgijdeHHPMFLC.jpeg",
    href: "https://topmate.io/meemansha_gaur/1707150",
  },
  {
    id: 1464470,
    title: "NeuroDivergent Resource Hub",
    description: "NeuroDivergent Resource Hub: Tools for Learning & Growth",
    category: "resource",
    type: "Digital Product",
    price: 119,
    originalPrice: 299,
    image: "https://static.topmate.io/dfL4rheja6LvSSxBaxBiEw.png",
    href: "https://topmate.io/meemansha_gaur/1464470",
  },
  {
    id: 1413184,
    title: "Pro Bono Therapy Starter Kit",
    description: "Kickstart pro bono therapy with guides and templates!",
    category: "resource",
    type: "Digital Product",
    price: 99,
    originalPrice: 199,
    image: "https://static.topmate.io/jEMrXGKyFzKgqzhXyiEq7r.png",
    href: "https://topmate.io/meemansha_gaur/1413184",
  },
];
