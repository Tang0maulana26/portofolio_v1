import { createFileRoute } from "@tanstack/react-router";
import Hero from "../components/Hero";
import About from "../components/About";
import {
  Skills,
  Projects,
  Experience,
  Contact,
  Footer,
} from "../components/PortfolioSections";

// index.jsx fokus pada urutan cerita (Hero -> About -> Contact), sedangkan __root.jsx fokus pada tata letak aplikasi.

export const Route = createFileRoute("/")({
  component: () => (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  ),
});
