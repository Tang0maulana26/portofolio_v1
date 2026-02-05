import { createFileRoute } from '@tanstack/react-router'
import Hero from '../components/Hero'   // Import dari components
import About from '../components/About' // Import dari components

// index.jsx fokus pada urutan cerita (Hero -> About -> Contact), sedangkan __root.jsx fokus pada tata letak aplikasi.

export const Route = createFileRoute('/')({
  component: () => (
    <>
      {/* Di sini cuma panggil Section saja */}
      {/* <Hero />
      <About /> */}
      {/* <SkillsSection />
      <ProjectsSection />
      <ContactSection /> */}
    </>
  ),
})