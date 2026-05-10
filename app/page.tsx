import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Publications from "./components/Publications";
import Speaking from "./components/Speaking";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Publications />
      <Speaking />
      <Skills />
      <Contact />
    </>
  );
}
