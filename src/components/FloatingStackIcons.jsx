import React from 'react';
import { FaReact, FaNodeJs, FaGitAlt, FaCss3Alt, FaHtml5 } from 'react-icons/fa';
import {
  SiJavascript,
  SiTypescript,
  SiVite,
  SiTailwindcss,
  SiJest,
  SiVitest,
} from 'react-icons/si';
import './FloatingStackIcons.css';

const STACK_ITEMS = [
  { id: 'react', icon: <FaReact />, label: 'React', color: '#61dafb' },
  { id: 'js', icon: <SiJavascript />, label: 'JavaScript', color: '#f7df1e' },
  { id: 'ts', icon: <SiTypescript />, label: 'TypeScript', color: '#3178c6' },
  { id: 'html', icon: <FaHtml5 />, label: 'HTML5', color: '#e34f26' },
  { id: 'css', icon: <FaCss3Alt />, label: 'CSS3', color: '#1572b6' },
  { id: 'tailwind', icon: <SiTailwindcss />, label: 'Tailwind CSS', color: '#38bdf8' },
  { id: 'vite', icon: <SiVite />, label: 'Vite', color: '#9461fb' },
  { id: 'node', icon: <FaNodeJs />, label: 'Node.js', color: '#3c873a' },
  { id: 'git', icon: <FaGitAlt />, label: 'Git', color: '#f05033' },
  { id: 'jest', icon: <SiJest />, label: 'Jest', color: '#99415b' },
  { id: 'vitest', icon: <SiVitest />, label: 'Vitest', color: '#729b1b' },
  // Repeat some to make the marquee feel continuous
  { id: 'react-2', icon: <FaReact />, label: 'React', color: '#61dafb' },
  { id: 'js-2', icon: <SiJavascript />, label: 'JavaScript', color: '#f7df1e' },
  { id: 'ts-2', icon: <SiTypescript />, label: 'TypeScript', color: '#3178c6' },
  { id: 'html-2', icon: <FaHtml5 />, label: 'HTML5', color: '#e34f26' },
  { id: 'css-2', icon: <FaCss3Alt />, label: 'CSS3', color: '#1572b6' },
  { id: 'tailwind-2', icon: <SiTailwindcss />, label: 'Tailwind CSS', color: '#38bdf8' },
  { id: 'vite-2', icon: <SiVite />, label: 'Vite', color: '#9461fb' },
  { id: 'node-2', icon: <FaNodeJs />, label: 'Node.js', color: '#3c873a' },
  { id: 'git-2', icon: <FaGitAlt />, label: 'Git', color: '#f05033' },
  { id: 'jest-2', icon: <SiJest />, label: 'Jest', color: '#99415b' },
  { id: 'vitest-2', icon: <SiVitest />, label: 'Vitest', color: '#729b1b' },
];

export default function FloatingStackIcons() {
  return (
    <section className="floating-stack-band" aria-label="Tecnologías principales">
      <div className="floating-stack-row" aria-hidden="false">
        <div className="floating-stack-track floating-stack-track--left">
          {STACK_ITEMS.map((item) => (
            <div
              key={`row1-${item.id}`}
              className="floating-stack-pill"
              style={{ '--pill-color': item.color || '#6366f1' }}
            >
              <span className="floating-stack-icon" aria-hidden="true">
                {item.icon}
              </span>
              <span className="floating-stack-pill-label">{item.label}</span>
            </div>
          ))}
        </div>
        <div className="floating-stack-track floating-stack-track--left" aria-hidden="true">
          {STACK_ITEMS.map((item) => (
            <div
              key={`row1-dup-${item.id}`}
              className="floating-stack-pill"
              style={{ '--pill-color': item.color || '#6366f1' }}
            >
              <span className="floating-stack-icon" aria-hidden="true">
                {item.icon}
              </span>
              <span className="floating-stack-pill-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="floating-stack-row floating-stack-row--reverse" aria-hidden="false">
        <div className="floating-stack-track floating-stack-track--right">
          {STACK_ITEMS.map((item) => (
            <div
              key={`row2-${item.id}`}
              className="floating-stack-pill"
              style={{ '--pill-color': item.color || '#6366f1' }}
            >
              <span className="floating-stack-icon" aria-hidden="true">
                {item.icon}
              </span>
              <span className="floating-stack-pill-label">{item.label}</span>
            </div>
          ))}
        </div>
        <div className="floating-stack-track floating-stack-track--right" aria-hidden="true">
          {STACK_ITEMS.map((item) => (
            <div
              key={`row2-dup-${item.id}`}
              className="floating-stack-pill"
              style={{ '--pill-color': item.color || '#6366f1' }}
            >
              <span className="floating-stack-icon" aria-hidden="true">
                {item.icon}
              </span>
              <span className="floating-stack-pill-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
