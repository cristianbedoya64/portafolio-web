import React, { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const handleNavClick = (e) => {
    const target = e.target.closest('a');
    if (!target) return;
    const href = target.getAttribute('href') || '';
    if (!href.startsWith('#')) return; // external links keep default
    e.preventDefault();
    const hash = href.slice(1);
    if (!hash || hash === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      try { history.replaceState(null, '', '#home'); } catch (err) {}
      return;
    }
    const el = document.getElementById(hash);
    if (el) {
      const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height') || '58', 10) || 58;
      const rect = el.getBoundingClientRect();
      const top = window.scrollY + rect.top - navHeight - 8;
      window.scrollTo({ top, behavior: 'smooth' });
      try { history.replaceState(null, '', `#${hash}`); } catch (err) {}
    }
  };

  // Theme toggle (safe, incremental): toggles class 'light-theme' on <html>
  const [theme, setTheme] = useState(() => {
    try {
      const stored = localStorage.getItem('theme');
      if (stored) return stored;
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    } catch (e) { return 'dark'; }
  });

  useEffect(() => {
    try {
      if (theme === 'light') document.documentElement.classList.add('light-theme');
      else document.documentElement.classList.remove('light-theme');
      localStorage.setItem('theme', theme);
    } catch (e) {}
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');

  return (
    <header className="site-nav" role="banner">
      <div className="nav-inner">
        <a className="nav-brand" href="#home" aria-label="Ir al inicio" onClick={handleNavClick}>Cristian</a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button
            className="theme-toggle btn"
            aria-pressed={theme === 'light'}
            aria-label="Alternar tema claro u oscuro"
            onClick={toggleTheme}
            title="Alternar tema claro/oscuro"
          >
            {theme === 'light' ? '🌞' : '🌙'}
          </button>
          <nav className="nav-links" role="navigation" aria-label="Navegación principal" onClick={handleNavClick}>
            <a href="#home" aria-label="Ir al inicio">Inicio</a>
            <a href="#about" aria-label="Ir a la sección Sobre mí">Sobre mí</a>
            <a href="#skills" aria-label="Ir a la sección Habilidades">Habilidades</a>
            <a href="#projects" aria-label="Ir a la sección Proyectos">Proyectos</a>
            <a href="#linkedin" aria-label="Ir a la sección LinkedIn">LinkedIn</a>
            <a href="#ai" aria-label="Ir a la sección IA">IA</a>
            <a href="#contact" aria-label="Ir a la sección Contacto">Contacto</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
