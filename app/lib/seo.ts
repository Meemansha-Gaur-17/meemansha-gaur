import type { Metadata } from "next";
import { meta } from "@/app/content/meta";
import { getSiteUrl } from "@/app/lib/site";

export const SITE_NAME = meta.name;

export const DEFAULT_TITLE = `${meta.name} | Counseling Psychologist & Researcher`;

export const DEFAULT_DESCRIPTION =
  "Meemansha Gaur is a counseling psychologist in Gurgaon offering online therapy for anxiety, relationships, and emotional wellbeing, with career guidance available.";

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
    applicationName: SITE_NAME,
    title: pageTitle,
    description,
    icons: {
      icon: [{ url: "/favicon.png", type: "image/png" }],
      apple: [{ url: "/apple-icon.png", type: "image/png" }],
    },
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
  const siteUrl = getSiteUrl().replace(/\/$/, "");

  return [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE_NAME,
      alternateName: [SITE_NAME, "MG"],
      url: `${siteUrl}/`,
      description: DEFAULT_DESCRIPTION,
      publisher: {
        "@type": "Person",
        name: SITE_NAME,
        url: `${siteUrl}/`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: meta.name,
      jobTitle: "Counseling Psychologist",
      description: meta.tagline,
      url: `${siteUrl}/`,
      email: meta.email,
      image: `${siteUrl}/mg-logo.png`,
      address: {
        "@type": "PostalAddress",
        addressLocality: meta.location.split(",")[0]?.trim() ?? meta.location,
        addressCountry: "IN",
      },
      sameAs: [meta.linkedinHref, TOPMATE_PROFILE],
    },
  ];
}
