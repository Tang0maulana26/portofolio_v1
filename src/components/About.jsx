import "./About.css";
import { createElement } from "react";
import { Code2, Sparkles, PanelsTopLeft, ArrowUpRight } from "lucide-react";
import { profile } from "../data/portfolio";
export default function About() {
  return (
    <section id="about" className="section-shell section-pad">
      <div className="section-heading">
        <span className="eyebrow">01 / ABOUT ME</span>
        <h2>
          Curiosity meets <em>creativity.</em>
        </h2>
      </div>
      <div className="about-grid">
        <div>
          <p className="large-copy">
            Saya menikmati proses mengubah ide menjadi sesuatu yang bisa
            dilihat, disentuh, dan digunakan.
          </p>
          <p className="muted-copy">
            Fokus saya adalah frontend development: menyusun tampilan yang rapi,
            membangun interaksi yang terasa natural, dan membuat web nyaman
            digunakan di berbagai ukuran layar.
          </p>
          <p className="muted-copy">
            Portofolio ini adalah ruang untuk berbagi proses belajar,
            eksplorasi, dan karya saya. Selalu ada hal baru untuk dicoba.
          </p>
          {profile.resume && (
            <a
              className="button-plain"
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
            >
              Download CV <ArrowUpRight size={18} />
            </a>
          )}
        </div>
        <div className="value-list">
          {[
            [
              Code2,
              "Thoughtful development",
              "Komponen terstruktur dan mudah dikembangkan.",
            ],
            [
              PanelsTopLeft,
              "Responsive by nature",
              "Pengalaman yang konsisten dari mobile hingga desktop.",
            ],
            [
              Sparkles,
              "Details make a difference",
              "Interaksi kecil yang membuat web terasa hidup.",
            ],
          ].map(([Icon, title, description]) => (
            <div className="value-item" key={title}>
              <span className="icon-tile">
                {createElement(Icon, { size: 21 })}
              </span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
