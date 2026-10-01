import "./Skills.css";
import { useState } from "react";
import { skills } from "../data/portfolio";

function Filters({ options, value, onChange, label }) {
  return (
    <div className="filters" role="group" aria-label={label}>
      {options.map((option) => (
        <button
          key={option}
          aria-pressed={value === option}
          className={value === option ? "selected" : ""}
          onClick={() => onChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export function Skills() {
  const [filter, setFilter] = useState("All");
  return (
    <section id="skills" className="section-shell section-pad">
      <div className="heading-row">
        <div className="section-heading">
          <span className="eyebrow">02 / MY TOOLKIT</span>
          <h2>
            The tools behind <em>the ideas.</em>
          </h2>
        </div>
        {/* <p className="muted-copy">
          Teknologi yang digunakan
          <br />
          untuk membangun portofolio ini.
        </p> */}
      </div>
      <Filters
        options={["All", "Hard Skills", "Soft Skills"]}
        value={filter}
        onChange={setFilter}
        label="Filter skills"
      />
      <div className="skills-grid">
        {/* {skills.map((skill, i) => ( */}
        {skills
          .filter((s) => filter === "All" || s.category === filter)
          .map((skill, i) => (
            <article className="skill-card" key={skill.name}>
              <span className="skill-symbol">
                {
                  ["{ }", "JS", "#", "< >", "ϟ", "B", "N", "↗"][
                    skills.indexOf(skill)
                  ]
                }
              </span>
              <h3>{skill.name}</h3>
              <p>{skill.note}</p>
              <span className="skill-index">0{i + 1}</span>
            </article>
          ))}
      </div>
    </section>
  );
}
