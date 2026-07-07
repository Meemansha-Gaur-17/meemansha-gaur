import type { Metadata } from "next";
import { meta } from "@/app/content/meta";
import { getSiteUrl } from "@/app/lib/site";

export const SITE_NAME = meta.name;

export const DEFAULT_TITLE = `${meta.name} | Counseling Psychologist & Researcher`;

export const DEFAULT_DESCRIPTION =
  "Counseling Psychologist & PhD Researcher. TEDx Speaker, Psyber Hub founder. Therapy, research & courses.";

const TOPMATE_PROFILE = "https://topmate.io/meemansha_gaur";

export function createPageMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path,
}: {
  title?: string;
  description?: string;
  path: string;
}): Metadata {
  const pageTitle = title ? `${title} | ${meta.name}` : DEFAULT_TITLE;

  return {
    title: pageTitle,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title: pageTitle,
      description,
      url: path,
    },
    twitter: {
      card: "summary",
      title: pageTitle,
      description,
    },
  };
}

export function getJsonLd() {
  const siteUrl = getSiteUrl();

  return [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE_NAME,
      url: siteUrl,
      description: DEFAULT_DESCRIPTION,
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: meta.name,
      jobTitle: "Counseling Psychologist",
      description: meta.tagline,
      url: siteUrl,
      email: meta.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rishikesh",
        addressCountry: "IN",
      },
      sameAs: [meta.linkedinHref, TOPMATE_PROFILE],
    },
  ];
}
