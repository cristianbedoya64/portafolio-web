import { useRef } from 'react';

export default function Hero() {
  const sectionRef = useRef(null);

  return (
    <section id="home" className="hero" ref={sectionRef}>
      <h1 className="hero-title">¡Hola, soy Cristian!</h1>
      <p className="hero-subtitle">Bienvenido a mi portafolio web interactivo 🚀</p>
      <button>Contáctame</button>
    </section>
  );
}
