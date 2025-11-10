import React from "react";
import "./Skills.css";

const skills = [
  { name: "HTML", level: "Avanzado" },
  { name: "CSS", level: "Avanzado" },
  { name: "JavaScript", level: "Intermedio" },
  { name: "React", level: "Intermedio" },
  { name: "Node.js", level: "Básico" },
  { name: "Java", level: "Intermedio" },
  { name: "SQL", level: "Intermedio" },
  { name: "Git / GitHub", level: "Avanzado" },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-content">
        <h2 className="skills-title">🧠 Habilidades Técnicas</h2>
        <p className="skills-description">
          A lo largo de mi formación en Ingeniería de Sistemas, he desarrollado
          habilidades en diferentes áreas del desarrollo de software, desde la
          programación web hasta la gestión de bases de datos y control de
          versiones.
        </p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <h3>{skill.name}</h3>
              <span>{skill.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
