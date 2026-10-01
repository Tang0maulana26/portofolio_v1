import "./Hero.css";
import { ArrowUpRight, ArrowDown, Code2 } from "lucide-react";
import { profile } from "../data/portfolio";
export default function Hero() {
  return (
    <section id="hero" className="hero section-shell">
      <div className="hero-copy">
        <span className="eyebrow">
          <span className="status-dot" /> A SPACE TO CREATE & EXPLORE
        </span>
        <p className="hero-intro">
          Hello, I'm Ilham <span className="wave">✳</span>
        </p>
        <h1>
          Turning ideas into
          <br />
          <span className="accent-text">digital experiences.</span>
        </h1>
        <p className="lead">
          Saya membangun antarmuka web yang intuitif, responsif, dan penuh
          detail. Selamat datang di sudut kecil saya di internet.
        </p>
        <div className="button-row">
          <a className="button-primary" href="#projects">
            Explore my work <ArrowUpRight size={18} />
          </a>
          <a className="button-plain" href="#contact">
            Let's talk <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="hero-stack">
          <Code2 size={17} />
          <span>{profile.role}</span>
          <i /> React · Tailwind · Vite
        </div>
      </div>
      <div className="orbit-art" aria-hidden="true">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="planet">
          <span>
            im<span className="text-primary">.</span>
          </span>
        </div>
        <div className="orbit-label label-react">✳ React</div>
        <div className="orbit-label label-code">
          &lt;/&gt; Creative development
        </div>
        <span className="orbit-spark">✦</span>
      </div>
      <a href="#about" className="scroll-cue">
        <ArrowDown size={16} /> SCROLL TO DISCOVER
      </a>
    </section>
  );
}
