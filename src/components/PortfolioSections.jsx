import "./PortfolioSections.css";
import { ArrowUp, Code2 } from "lucide-react";

export { Skills } from "./Skills";
export { Projects } from "./Projects";
export { Experience } from "./Experience";
export { default as Contact } from "./Contact";

export function Footer() {
  return (
    <footer className="section-shell footer">
      <a className="footer-brand" href="#hero">
        Ilham Muhammad<span>.</span>
      </a>
      <p>
        © {new Date().getFullYear()} · Built by Ilham with curiosity {" "}
        <Code2 size={14} />
      </p>
      <a href="#hero" className="back-top">
        Back to top <ArrowUp size={16} />
      </a>
    </footer>
  );
}
