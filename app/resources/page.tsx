import Navbar from "../components/Navbar";
import Offerings from "../components/Offerings";
import { createPageMetadata } from "@/app/lib/seo";

export const metadata = createPageMetadata({
  title: "Courses & Resources",
  description:
    "Psychology courses, UGC NET prep kits, research toolkits, and clinician resources.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <>
      <Navbar />
      <main>
        <Offerings view="resources" />
      </main>
    </>
  );
}
