import Navbar from "../components/Navbar";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Publications from "../components/Publications";
import Speaking from "../components/Speaking";
import Skills from "../components/Skills";
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
        <Experience />
        <Education />
        <Publications />
        <Speaking />
        <Skills />
      </main>
    </>
  );
}
