import Navbar from "../components/Navbar";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Publications from "../components/Publications";
import Speaking from "../components/Speaking";
import Skills from "../components/Skills";
import { SECTION_HEADING } from "../components/Experience/constants";
import { createPageMetadata } from "@/app/lib/seo";

export const metadata = createPageMetadata({
  title: "Work & Research",
  description:
    "Experience, education, publications, speaking, and clinical skills of Meemansha Gaur.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main>
        <h1 className="sr-only">{SECTION_HEADING}</h1>
        <Experience />
        <Education />
        <Publications />
        <Speaking />
        <Skills />
      </main>
    </>
  );
}
