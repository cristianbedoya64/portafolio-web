import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  IconReact,
  IconJavaScript,
  IconTypeScript,
  IconVite,
  IconTailwind,
  IconJest,
  IconVitest,
  IconHTML,
  IconCSS,
  IconNode,
  IconGit,
} from './icons/InlineIcons.jsx';
import './FloatingStackIcons.css';

const BASE_ITEMS = [
  { id: 'react', icon: <IconReact />, label: 'React', color: '#61dafb' },
  { id: 'js', icon: <IconJavaScript />, label: 'JavaScript', color: '#f7df1e' },
  { id: 'ts', icon: <IconTypeScript />, label: 'TypeScript', color: '#3178c6' },
  { id: 'html', icon: <IconHTML />, label: 'HTML5', color: '#e34f26' },
  { id: 'css', icon: <IconCSS />, label: 'CSS3', color: '#1572b6' },
  { id: 'tailwind', icon: <IconTailwind />, label: 'Tailwind CSS', color: '#38bdf8' },
  { id: 'vite', icon: <IconVite />, label: 'Vite', color: '#9461fb' },
  { id: 'node', icon: <IconNode />, label: 'Node.js', color: '#3c873a' },
  { id: 'git', icon: <IconGit />, label: 'Git', color: '#f05033' },
  { id: 'jest', icon: <IconJest />, label: 'Jest', color: '#99415b' },
  { id: 'vitest', icon: <IconVitest />, label: 'Vitest', color: '#729b1b' },
];

export default function FloatingStackIcons() {
  const bandRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);
  const [reduceMotion, setReduceMotion] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false,
  );

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', onResize, { passive: true });
    return () => window.removeEventListener('resize', onResize, { passive: true });
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e) => setReduceMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    const node = bandRef.current;
    if (!node) return;
    if (reduceMotion || isMobile) {
      setIsActive(false);
      return;
    }
    if (typeof IntersectionObserver === 'undefined') {
      setIsActive(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsActive(true);
          observer.disconnect();
        }
      },
      { rootMargin: '10% 0px', threshold: 0.1 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [reduceMotion, isMobile]);

  const enableLoop = isActive && !reduceMotion && !isMobile;
  const marqueeItems = useMemo(() => BASE_ITEMS, []);

  return (
    <section
      ref={bandRef}
      className="floating-stack-band"
      data-animated={enableLoop ? 'true' : 'false'}
      aria-label="Tecnologías principales"
    >
      <div className="floating-stack-row" aria-hidden="false">
        <div className="floating-stack-track floating-stack-track--left">
          {marqueeItems.map((item) => (
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
      </div>

      {enableLoop ? (
        <div className="floating-stack-row floating-stack-row--reverse" aria-hidden="false">
          <div className="floating-stack-track floating-stack-track--right">
            {marqueeItems.map((item) => (
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
        </div>
      ) : null}
    </section>
  );
}
