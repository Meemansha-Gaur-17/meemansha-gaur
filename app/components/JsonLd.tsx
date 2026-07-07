import { getJsonLd } from "@/app/lib/seo";

export default function JsonLd() {
  const schemas = getJsonLd();

  return (
    <>
      {schemas.map((schema) => (
        <script
          key={schema["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
