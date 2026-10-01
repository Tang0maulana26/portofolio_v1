import portfolioImage from "../assets/portfolio-preview.svg";
import dashboardImage from "../assets/dashboard-preview.svg";
import studioImage from "../assets/studio-preview.svg";

export const profile = {
  name: "Ilham Muhammad",
  role: "Frontend Developer",
  email: "ilhammaulana.im646@gmail.com", // Isi email untuk mengaktifkan pengiriman melalui aplikasi email.
  github: "",
  linkedin: "",
  resume: "", // Contoh: /cv-ilham.pdf (simpan file di public).
};

export const skills = [
  { name: "React", category: "Hard Skills", note: "Component-based interfaces" },
  { name: "JavaScript", category: "Hard Skills", note: "Interactive experiences" },
  { name: "Tailwind CSS", category: "Hard Skills", note: "Responsive styling" },
  { name: "HTML & CSS", category: "Hard Skills", note: "Accessible foundations" },
  { name: "Vite", category: "Soft Skills", note: "Fast development workflow" },
  { name: "Bun", category: "Soft Skills", note: "Runtime & package management" },
  { name: "Node.js", category: "Soft Skills", note: "JavaScript ecosystem" },
  {
    name: "TanStack Router",
    category: "Frontend",
    note: "Application navigation",
  },
];

export const projects = [
  {
    id: "portfolio",
    title: "A little universe of my work.",
    name: "Personal Portfolio",
    year: "01",
    image: portfolioImage,
    tags: ["React", "Tailwind CSS", "Vite"],
    description:
      "Portofolio personal dengan latar bintang, tema gelap dan terang, serta pengalaman responsif untuk memperkenalkan karya dalam satu tempat.",
    details:
      "Dibangun dengan komponen React modular dan TanStack Router. Pengunjung dapat memfilter proyek, menjelajahi skills, serta menyiapkan pesan kontak. Preferensi tema tersimpan di browser.",
    status: "Current project",
    demo: "",
    source: "",
  },
  {
    id: "dashboard",
    title: "Clarity in every number.",
    name: "Analytics Dashboard",
    year: "02",
    image: dashboardImage,
    tags: ["UI Concept", "Dashboard"],
    description:
      "Contoh konsep dashboard dengan hierarki informasi yang sederhana dan visualisasi ringkas.",
    details:
      "Ini adalah contoh konten dan pratinjau visual, belum merupakan aplikasi dashboard. Ganti dengan proyek asli, hasil pekerjaan, serta tautan demo dan repository milikmu.",
    status: "Sample concept",
    demo: "",
    source: "",
  },
  {
    id: "studio",
    title: "Small details. Big impressions.",
    name: "Studio Landing Page",
    year: "03",
    image: studioImage,
    tags: ["UI Concept", "Landing Page"],
    description:
      "Contoh eksplorasi landing page dengan tipografi kuat dan komposisi minimal.",
    details:
      "Ini adalah contoh konten untuk menunjukkan layout kartu proyek. Ganti dengan studi kasus asli dan jelaskan peran, tantangan, serta solusi yang kamu kerjakan.",
    status: "Sample concept",
    demo: "",
    source: "",
  },
];
