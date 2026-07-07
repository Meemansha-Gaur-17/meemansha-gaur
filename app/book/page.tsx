import Navbar from "../components/Navbar";
import Offerings from "../components/Offerings";
import BookSession from "../components/BookSession";
import Contact from "../components/Contact";
import { createPageMetadata } from "@/app/lib/seo";

export const metadata = createPageMetadata({
  title: "Book a Session",
  description:
    "Book therapy, career guidance, and one-on-one counseling sessions with Meemansha Gaur.",
  path: "/book",
});

export default function BookPage() {
  return (
    <>
      <Navbar />
      <main>
        <Offerings view="sessions" />
        <BookSession />
        <Contact />
      </main>
    </>
  );
}
