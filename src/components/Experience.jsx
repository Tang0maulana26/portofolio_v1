import "./Experience.css";
export function Experience() {
  return (
    <section id="experience" className="section-shell section-pad">
      <div className="experience-grid">
        <div className="section-heading">
          <span className="eyebrow">04 / THE JOURNEY</span>
          <h2>
            Always learning.
            <br />
            <em>Always building.</em>
          </h2>
          <p className="muted-copy">
            Setiap proyek adalah kesempatan
            <br />
            untuk mencoba dan bertumbuh.
          </p>
        </div>
        <div className="timeline">
          <article>
            <span className="timeline-dot" />
            <span className="eyebrow">CURRENT / PERSONAL PROJECT</span>
            <h3>Building my personal portfolio</h3>
            <span className="timeline-subtitle">
              Independent learning & development
            </span>
            <p className="muted-copy">
              Mengembangkan website portofolio dengan React, mengolah tampilan
              responsif, serta mengeksplorasi animasi dan interaksi antarmuka.
            </p>
            <div className="tags">
              <span>Frontend</span>
              <span>UI development</span>
            </div>
          </article>
          <article>
            <span className="timeline-dot hollow" />
            <span className="eyebrow">WHAT'S NEXT</span>
            <h3>More things to explore</h3>
            <p className="muted-copy">
              Ruang ini akan berkembang bersama proyek, kolaborasi, dan
              pengalaman berikutnya.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
