import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import { meta } from "./content/meta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <h1 className="sr-only">
          {meta.name} — {meta.title}
        </h1>
        <Hero />
        <About />
        <Testimonials />
      </main>
    </>
  );
}
