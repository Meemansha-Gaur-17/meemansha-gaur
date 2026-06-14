import Navbar from "../components/Navbar";
import Offerings from "../components/Offerings";
import BookSession from "../components/BookSession";
import Contact from "../components/Contact";

export default function BookPage() {
  return (
    <>
      <Navbar />
      <Offerings view="sessions" />
      <BookSession />
      <Contact />
    </>
  );
}
