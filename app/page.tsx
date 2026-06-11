import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Offerings from "./components/Offerings";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Offerings />
      <Testimonials />
    </>
  );
}
