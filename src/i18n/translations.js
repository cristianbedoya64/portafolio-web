export const TRANSLATIONS = {
  es: {
    navbar: {
      brand: 'Cristian',
      home: 'Inicio',
      about: 'Sobre mí',
      skills: 'Habilidades',
      projects: 'Proyectos',
      updates: 'Actualizaciones',
      linkedin: 'LinkedIn',
      ai: 'IA',
      contact: 'Contacto',
      themeToggle: 'Alternar tema claro u oscuro',
      effectsToggle: 'Alternar efectos avanzados',
      languageToggle: 'Cambiar idioma a inglés',
      cv: 'Descargar CV',
      cvAria: 'Descargar mi currículum en PDF',
      skipToMain: 'Saltar al contenido principal',
    },
    hero: {
      titlePrefix: 'Hola, soy',
      name: 'Cristian Bedoya',
      highlight: 'Full-Stack + IA',
      roles: ['Full-Stack + IA', 'React · Node · TS', 'UX + Performance'],
      subtitle:
        'Desarrollador potenciado por IA (9.º semestre de Ing. de Sistemas). Diseño y desarrollo productos accesibles, de alto rendimiento y centrados en el usuario.',
      cta: 'Ver proyectos',
      repoCta: 'Ver repositorio',
    },
    about: {
      title: 'Sobre mí',
      intro: 'Estudiante de Ingeniería de Sistemas y desarrollador Full-Stack:',
      bullets: [
        '9.º semestre en la Universidad Santiago de Cali, con enfoque Full-Stack.',
        'Trabajo con React, Node.js, TypeScript, PostgreSQL, Docker y flujos CI/CD ligeros.',
        'Uso IA (Copilot, LLMs y embeddings) para acelerar scaffolding, elevar calidad y explorar patrones de escalabilidad, rendimiento, accesibilidad y UX.',
        'Proyecto académico TaskFlow (gestión colaborativa): cobertura de tests >80% y reducción de tiempos ~30% mediante generación asistida y refactors guiados por IA.',
      ],
      cards: [
        {
          icon: '🎯',
          title: 'Enfoque',
          bullets: [
            'Desarrollo full-stack centrado en el usuario.',
            'IA para acelerar entrega con accesibilidad, rendimiento y código mantenible.',
            'UX + calidad: >80% de cobertura de pruebas y ciclos ~30% más rápidos con IA.',
            'Del prototipo al deploy: decisiones UX-first, performance medible y CI/CD.',
            'React · Node.js · TypeScript · PostgreSQL · Docker · CI/CD · Playwright · Vitest.',
          ],
        },
        {
          icon: '🧠',
          title: 'Tecnologías favoritas',
          bullets: [
            'React 18 + Vite para UI progresivas y accesibles.',
            'Node.js y Express/Next API Routes para servicios escalables.',
            'TypeScript, Vitest y Playwright para calidad end-to-end.',
            'PostgreSQL + Prisma para datos consistentes y observables.',
            'Docker, GitHub Actions, Lighthouse y Plausible para CI/CD y monitoreo.',
          ],
        },
        {
          icon: '💡',
          title: 'Filosofía',
          bullets: [
            'La accesibilidad y la UX clara son parte del MVP, no extras.',
            'Medir antes de optimizar: performance budgets, Lighthouse y métricas reales.',
            'Documentar decisiones técnicas para equipos futuros y mantenibilidad.',
            'Automatizar calidad: linting, testing, auditorías y despliegues confiables.',
            'Aprender continuamente, compartir conocimiento y crear impacto positivo.',
          ],
        },
        {
          icon: '🤖',
          title: 'IA aplicada',
          bullets: [
            'Ingeniería de prompts para guiar LLMs en refactors, tests y documentación técnica.',
            'Embeddings + vectores para construir asistentes contextuales y búsquedas semánticas.',
            'Pipelines mixtos: IA sugiere soluciones, yo valido con principios de diseño y métricas.',
            'Integración con GitHub Actions para revisar PRs y sugerir mejoras de accesibilidad.',
            'Evaluaciones periódicas de sesgos y privacidad antes de adoptar nuevos modelos.',
          ],
        },
      ],
    },
    skills: {
      title: '🧠 Habilidades Técnicas',
      description:
        'Durante mi formación en Ingeniería de Sistemas consolidé un stack que conecta interfaces accesibles, APIs eficientes y bases de datos confiables, apoyándome en control de versiones y automatización para entregar productos medibles y mantenibles.',
      items: [
        {
          name: 'HTML',
          level: 'Avanzado',
          description:
            'Maquetado semántico con estándares de accesibilidad AA+, optimizando SEO, microdatos y performance inicial.',
          keywords: ['Semántica', 'Accesibilidad', 'SEO', 'Web Components'],
        },
        {
          name: 'CSS',
          level: 'Avanzado',
          description:
            'Sistemas de diseño responsivo con CSS moderno (Grid, clamp, variables) y animaciones suaves alineadas al branding.',
          keywords: ['Design systems', 'CSS Grid', 'Dark mode', 'Animaciones'],
        },
        {
          name: 'JavaScript',
          level: 'Avanzado',
          description:
            'Integración de APIs, orquestación de estado y animaciones con Framer Motion dentro del ecosistema Vite.',
          keywords: ['APIs', 'Framer Motion', 'Performance', 'Tooling'],
        },
        {
          name: 'React',
          level: 'Avanzado',
          description:
            'Arquitectura SPA modular con hooks personalizados, contextos de localización y carga progresiva.',
          keywords: ['Hooks', 'Context', 'Code splitting', 'Testing'],
        },
        {
          name: 'Node.js',
          level: 'Intermedio',
          description:
            'APIs REST ligeras y scripts de automatización para pipelines de datos y tareas de build.',
          keywords: ['Express', 'CLI', 'APIs', 'Automatización'],
        },
        {
          name: 'Java',
          level: 'Intermedio',
          description:
            'Bases sólidas en POO y servicios Spring Boot listos para evolucionar a microservicios escalables.',
          keywords: ['Spring Boot', 'POO', 'REST', 'Testing'],
        },
        {
          name: 'SQL',
          level: 'Intermedio',
          description:
            'Modelado relacional, consultas optimizadas y migraciones versionadas para entornos multiambiente.',
          keywords: ['PostgreSQL', 'Indexado', 'ETL', 'Migraciones'],
        },
        {
          name: 'Git / GitHub',
          level: 'Avanzado',
          description:
            'Flujos GitFlow, code reviews y CI/CD con GitHub Actions, guardrails de calidad y releases confiables.',
          keywords: ['GitFlow', 'Pull Requests', 'CI/CD', 'Quality gates'],
        },
      ],
    },
    projects: {
      title: 'Proyectos destacados',
      subtitle: 'Colección de proyectos que demuestran mi pasión por la tecnología y el diseño.',
      cards: [
        {
          title: 'Portafolio Web Interactivo',
          description:
            'Portafolio animado con React + TypeScript + Vite. Animaciones suaves con Framer Motion, efectos con Vanta/Three y estilos en Tailwind. Backend opcional vía serverless para formularios.',
          highlights: [
            'React',
            'TypeScript',
            'Vite',
            'Framer Motion',
            'Tailwind',
            'Vanta.js',
            'Three.js',
            'Serverless',
          ],
          badge: '2025',
          links: [
            {
              label: 'Repositorio',
              href: 'https://github.com/cristianbedoya64/portafolio-web',
              aria: 'Abrir el repositorio del portafolio web interactivo en una nueva pestaña',
              variant: 'primary',
            },
            {
              label: 'Web',
              href: '#',
              aria: 'Abrir la web del portafolio (se añadirá enlace)',
              variant: 'ghost',
            },
          ],
        },
        {
          title: 'Dashboard de Datos Interactivo',
          description:
            'Demostración de dominio de APIs, visualización y backend: React + TypeScript + Recharts + Axios; Node.js + Express + MongoDB, animado con Framer Motion.',
          highlights: [
            'React',
            'TypeScript',
            'Recharts',
            'Axios',
            'Express',
            'MongoDB',
            'Styled Components',
            'Tailwind',
            'Framer Motion',
          ],
          badge: 'Case Study',
          links: [
            {
              label: 'Repositorio',
              href: '#',
              aria: 'Abrir el repositorio del dashboard de datos (se añadirá enlace)',
              variant: 'primary',
            },
            {
              label: 'Web',
              href: '#',
              aria: 'Abrir la demo del dashboard (se añadirá enlace)',
              variant: 'ghost',
            },
          ],
        },
        {
          title: 'App de Tareas Drag & Drop',
          description:
            'Gestión de tareas con arrastrar y soltar, manejo de estado y persistencia: React + Zustand + React Beautiful DnD, backend Express + PostgreSQL, y almacenamiento local.',
          highlights: [
            'React',
            'Zustand',
            'React Beautiful DnD',
            'Tailwind',
            'Express',
            'PostgreSQL',
            'LocalStorage',
          ],
          badge: '2025',
          links: [
            {
              label: 'Repositorio',
              href: '#',
              aria: 'Abrir el repositorio de la app de tareas (se añadirá enlace)',
              variant: 'primary',
            },
            {
              label: 'Web',
              href: '#',
              aria: 'Abrir la demo de la app de tareas (se añadirá enlace)',
              variant: 'ghost',
            },
          ],
        },
        {
          title: 'Chat en Tiempo Real',
          description:
            'Comunicación bidireccional con WebSockets y experiencia moderna: React + Context API + Socket.io-client; backend con Node + Express + Socket.io + MongoDB.',
          highlights: [
            'React',
            'Context API',
            'Socket.io',
            'Socket.io-client',
            'MongoDB',
            'Tailwind',
            'Emojis',
            'Timestamps',
            'Dark mode',
          ],
          badge: '2025',
          links: [
            {
              label: 'Repositorio',
              href: '#',
              aria: 'Abrir el repositorio del chat en tiempo real (se añadirá enlace)',
              variant: 'primary',
            },
            {
              label: 'Web',
              href: '#',
              aria: 'Abrir la demo del chat en tiempo real (se añadirá enlace)',
              variant: 'ghost',
            },
          ],
        },
        {
          title: 'Mini E-commerce',
          description:
            'Integración completa: rutas, estado global, autenticación y API. Frontend con React + React Router + Zustand + Framer Motion; backend con Node + Express + PostgreSQL + JWT; opcional Fake Store API.',
          highlights: [
            'React',
            'React Router',
            'Zustand',
            'Framer Motion',
            'Express',
            'PostgreSQL',
            'JWT',
            'Fake Store API',
          ],
          badge: '2025',
          links: [
            {
              label: 'Repositorio',
              href: '#',
              aria: 'Abrir el repositorio del mini e-commerce (se añadirá enlace)',
              variant: 'primary',
            },
            {
              label: 'Web',
              href: '#',
              aria: 'Abrir la demo del mini e-commerce (se añadirá enlace)',
              variant: 'ghost',
            },
          ],
        },
      ],
    },
    updates: {
      badge: 'Actualizaciones recientes',
      title: 'Actualizaciones recientes',
      subtitle: 'Un vistazo rápido a las mejoras que mantienen este portafolio en evolución.',
      entries: [
        {
          dateLabel: '12 Nov 2025',
          dateTime: '2025-11-12',
          title: 'Efecto 3D en foto de perfil',
          description:
            'Se añadió tilt con perspectiva y sombras reactivas al pasar el cursor. Respeta Reduce Motion y el toggle de efectos.',
        },
        {
          dateLabel: '12 Nov 2025',
          dateTime: '2025-11-12',
          title: 'Proyectos destacados actualizados',
          description:
            'Ahora son 5 proyectos con su stack y enlaces listos para repositorio y demo, sin cambiar el diseño de la sección.',
        },
        {
          dateLabel: '11 Nov 2025',
          dateTime: '2025-11-11',
          title: 'Mejoras de accesibilidad (tema claro)',
          description:
            'Aumentamos contraste en tema claro, ajustando el acento azul y evitando texto amarillo de bajo contraste.',
        },
        {
          dateLabel: '11 Nov 2025',
          dateTime: '2025-11-11',
          title: 'Nuevo look con gradientes',
          description:
            'Se incorporaron fondos con gradientes modernos y opacidades para secciones, con ajustes para el tema claro.',
        },
        {
          dateLabel: '11 Nov 2025',
          dateTime: '2025-11-11',
          title: 'Ajustes visuales en Habilidades',
          description:
            'La sección Skills ahora sigue la nueva paleta y usa tipografía más legible en tema claro.',
        },
      ],
    },
    linkedin: {
      title: 'Publicaciones',
      highlight: 'de LinkedIn',
      subtitle: 'Insights y aprendizajes recientes que comparto con mi red profesional.',
      cards: [
        {
          title: 'Buenas prácticas de React 2025',
          date: 'Hace 5 días',
          description: 'Reflexiono sobre patrones modernos y tips para mejorar DX.',
          link: '#',
        },
        {
          title: 'Integrando IA en proyectos web',
          date: 'Hace 2 semanas',
          description: 'Cómo incorporo APIs de IA para ampliar funcionalidades.',
          link: '#',
        },
        {
          title: 'Mi toolkit favorito',
          date: 'Hace 1 mes',
          description: 'Herramientas que uso a diario para desarrollar con eficiencia.',
          link: '#',
        },
      ],
    },
    ai: {
      title: 'Experimentos con',
      highlight: 'Inteligencia Artificial',
      subtitle:
        'Aquí comparto mis proyectos experimentales con IA, desde asistentes hasta modelos generativos.',
      experiments: [
        {
          title: 'Asistente IA Personalizado',
          description:
            'Un chatbot con GPT-4 que responde con base en mi portafolio y estilo de comunicación.',
          tech: 'React + OpenAI API',
        },
        {
          title: 'Generador de Imágenes',
          description:
            'Proyecto que usa Stable Diffusion para crear imágenes basadas en descripciones.',
          tech: 'Python + Diffusers',
        },
        {
          title: 'Analizador de Sentimientos',
          description:
            'Sistema que analiza opiniones en redes sociales con NLP y Machine Learning.',
          tech: 'Flask + Transformers',
        },
      ],
    },
    ui: {
      loadingSection: 'Cargando sección…',
    },
    contact: {
      title: '¡Conectemos y creemos algo <span>increíble</span> juntos!',
      subtitle:
        'Estoy disponible para colaborar en proyectos, desarrollar ideas o simplemente conversar sobre tecnología.',
      buttons: {
        linkedin: {
          label: 'LinkedIn',
          aria: 'Abrir mi perfil de LinkedIn en una nueva pestaña',
        },
        email: {
          label: 'Correo',
          aria: 'Enviar un correo electrónico',
        },
        github: {
          label: 'GitHub',
          aria: 'Abrir mi perfil de GitHub en una nueva pestaña',
        },
        whatsapp: {
          label: 'WhatsApp',
          aria: 'Abrir un chat de WhatsApp en una nueva pestaña',
        },
        cv: {
          label: 'Descargar CV',
          aria: 'Descargar mi currículum en PDF',
        },
      },
    },
    languageNames: {
      es: 'ES',
      en: 'EN',
    },
  },
  en: {
    navbar: {
      brand: 'Cristian',
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      updates: 'Updates',
      linkedin: 'LinkedIn',
      ai: 'AI',
      contact: 'Contact',
      themeToggle: 'Toggle light or dark theme',
      effectsToggle: 'Toggle advanced effects',
      languageToggle: 'Switch language to Spanish',
      cv: 'Download CV',
      cvAria: 'Download my resume as a PDF',
      skipToMain: 'Skip to main content',
    },
    hero: {
      titlePrefix: 'Hi, I am',
      name: 'Cristian Bedoya',
      highlight: 'Full-Stack + AI',
      roles: ['Full-Stack + AI', 'React · Node · TS', 'UX + Performance'],
      subtitle:
        'I craft digital products that balance design, accessibility, and performance. Inspired by technology that improves people’s lives.',
      cta: 'View projects',
      repoCta: 'View repository',
    },
    about: {
      title: 'About me',
      intro: 'Systems Engineering student and Full-Stack developer:',
      bullets: [
        'Ninth semester at Universidad Santiago de Cali with a Full-Stack focus.',
        'Hands-on with React, Node.js, TypeScript, PostgreSQL, Docker, and lightweight CI/CD pipelines.',
        'Leverage AI (Copilot, LLMs, embeddings) to speed up scaffolding, boost quality, and explore scalable, high-performance, accessible UX patterns.',
        'Academic project TaskFlow (collaborative management): 80%+ test coverage and ~30% faster delivery through AI-assisted generation and guided refactors.',
      ],
      cards: [
        {
          icon: '🎯',
          title: 'Focus',
          bullets: [
            'User-centered full-stack development.',
            'AI to accelerate delivery while keeping accessibility, performance, and maintainable code.',
            'UX + quality: 80%+ test coverage and ~30% faster cycles leveraging AI assistants.',
            'Prototype to deploy: UX-first decisions, measurable performance, and CI/CD pipelines.',
            'React · Node.js · TypeScript · PostgreSQL · Docker · CI/CD · Playwright · Vitest.',
          ],
        },
        {
          icon: '🧠',
          title: 'Favourite tech',
          bullets: [
            'React 18 + Vite to craft progressive, accessible UI.',
            'Node.js with Express/Next API Routes for scalable services.',
            'TypeScript, Vitest, and Playwright to keep quality end to end.',
            'PostgreSQL + Prisma for consistent, observable data layers.',
            'Docker, GitHub Actions, Lighthouse, and Plausible for CI/CD and monitoring.',
          ],
        },
        {
          icon: '💡',
          title: 'Philosophy',
          bullets: [
            'Accessibility and clear UX ship with the MVP, not afterwards.',
            'Measure before optimising: performance budgets, Lighthouse, real metrics.',
            'Document technical decisions to help future teams and maintainability.',
            'Automate quality: linting, testing, audits, and reliable deployments.',
            'Keep learning, share insights, and create positive impact.',
          ],
        },
        {
          icon: '🤖',
          title: 'Applied AI',
          bullets: [
            'Prompt engineering to steer LLMs across refactors, testing, and documentation.',
            'Embeddings + vector search to build contextual assistants and semantic queries.',
            'Hybrid pipelines: AI proposes, I validate with design principles and metrics.',
            'GitHub Actions integrations to review PRs and flag accessibility improvements.',
            'Bias and privacy reviews before adopting new AI tooling in the stack.',
          ],
        },
      ],
    },
    skills: {
      title: '🧠 Technical Skills',
      description:
        'Throughout my Systems Engineering journey I built a stack that links accessible interfaces, efficient APIs, and reliable databases, relying on version control and automation to ship measurable, maintainable products.',
      items: [
        {
          name: 'HTML',
          level: 'Advanced',
          description:
            'Semantic markup with AA+ accessibility standards, boosting SEO, structured data, and first meaningful paint.',
          keywords: ['Semantic HTML', 'Accessibility', 'SEO', 'Web Components'],
        },
        {
          name: 'CSS',
          level: 'Advanced',
          description:
            'Responsive design systems leveraging modern CSS (Grid, clamp, custom properties) and brand-aligned animations.',
          keywords: ['Design systems', 'CSS Grid', 'Dark mode', 'Animations'],
        },
        {
          name: 'JavaScript',
          level: 'Advanced',
          description:
            'API integrations, state orchestration, and Framer Motion animations within the Vite toolchain.',
          keywords: ['APIs', 'Framer Motion', 'Performance', 'Tooling'],
        },
        {
          name: 'React',
          level: 'Advanced',
          description:
            'Modular SPA architecture with custom hooks, localization contexts, and progressive loading strategies.',
          keywords: ['Hooks', 'Context', 'Code splitting', 'Testing'],
        },
        {
          name: 'Node.js',
          level: 'Intermediate',
          description:
            'Lightweight REST APIs and automation scripts powering data pipelines and build tasks.',
          keywords: ['Express', 'CLI', 'APIs', 'Automation'],
        },
        {
          name: 'Java',
          level: 'Intermediate',
          description:
            'Object-oriented fundamentals and Spring Boot services ready to grow into scalable microservices.',
          keywords: ['Spring Boot', 'OOP', 'REST', 'Testing'],
        },
        {
          name: 'SQL',
          level: 'Intermediate',
          description:
            'Relational modeling, tuned queries, and versioned migrations across multi-environment setups.',
          keywords: ['PostgreSQL', 'Indexing', 'ETL', 'Migrations'],
        },
        {
          name: 'Git / GitHub',
          level: 'Advanced',
          description:
            'GitFlow workflows, code reviews, and CI/CD with GitHub Actions, quality gates, and reliable releases.',
          keywords: ['GitFlow', 'Pull Requests', 'CI/CD', 'Quality gates'],
        },
      ],
    },
    projects: {
      title: 'Highlighted projects',
      subtitle: 'A collection of work showcasing my passion for technology and design.',
      cards: [
        {
          title: 'Interactive Web Portfolio',
          description:
            'Animated portfolio with React + TypeScript + Vite. Smooth Framer Motion transitions, Vanta/Three effects, and Tailwind styling. Optional serverless backend for forms.',
          highlights: [
            'React',
            'TypeScript',
            'Vite',
            'Framer Motion',
            'Tailwind',
            'Vanta.js',
            'Three.js',
            'Serverless',
          ],
          badge: '2025',
          links: [
            {
              label: 'Repository',
              href: 'https://github.com/cristianbedoya64/portafolio-web',
              aria: 'Open the interactive web portfolio repository in a new tab',
              variant: 'primary',
            },
            {
              label: 'Website',
              href: '#',
              aria: 'Open the portfolio website (link to be added)',
              variant: 'ghost',
            },
          ],
        },
        {
          title: 'Interactive Data Dashboard',
          description:
            'Showcase of API mastery, visualisation, and basic backend: React + TypeScript + Recharts + Axios; Node.js + Express + MongoDB, animated with Framer Motion.',
          highlights: [
            'React',
            'TypeScript',
            'Recharts',
            'Axios',
            'Express',
            'MongoDB',
            'Styled Components',
            'Tailwind',
            'Framer Motion',
          ],
          badge: 'Case Study',
          links: [
            {
              label: 'Repository',
              href: '#',
              aria: 'Open the data dashboard repository (link to be added)',
              variant: 'primary',
            },
            {
              label: 'Website',
              href: '#',
              aria: 'Open the dashboard demo (link to be added)',
              variant: 'ghost',
            },
          ],
        },
        {
          title: 'Drag & Drop Tasks App',
          description:
            'Task management with drag and drop, state handling, and persistence: React + Zustand + React Beautiful DnD; Express + PostgreSQL backend; LocalStorage for client persistence.',
          highlights: [
            'React',
            'Zustand',
            'React Beautiful DnD',
            'Tailwind',
            'Express',
            'PostgreSQL',
            'LocalStorage',
          ],
          badge: '2025',
          links: [
            {
              label: 'Repository',
              href: '#',
              aria: 'Open the tasks app repository (link to be added)',
              variant: 'primary',
            },
            {
              label: 'Website',
              href: '#',
              aria: 'Open the tasks app demo (link to be added)',
              variant: 'ghost',
            },
          ],
        },
        {
          title: 'Real-time Chat',
          description:
            'Bidirectional communication via WebSockets with a modern UX: React + Context API + Socket.io-client; Node + Express + Socket.io + MongoDB backend.',
          highlights: [
            'React',
            'Context API',
            'Socket.io',
            'Socket.io-client',
            'MongoDB',
            'Tailwind',
            'Emojis',
            'Timestamps',
            'Dark mode',
          ],
          badge: '2025',
          links: [
            {
              label: 'Repository',
              href: '#',
              aria: 'Open the real-time chat repository (link to be added)',
              variant: 'primary',
            },
            {
              label: 'Website',
              href: '#',
              aria: 'Open the real-time chat demo (link to be added)',
              variant: 'ghost',
            },
          ],
        },
        {
          title: 'Mini E-commerce',
          description:
            'Full integration: routing, global state, authentication, and API. Frontend with React + React Router + Zustand + Framer Motion; backend with Node + Express + PostgreSQL + JWT; optional Fake Store API.',
          highlights: [
            'React',
            'React Router',
            'Zustand',
            'Framer Motion',
            'Express',
            'PostgreSQL',
            'JWT',
            'Fake Store API',
          ],
          badge: '2025',
          links: [
            {
              label: 'Repository',
              href: '#',
              aria: 'Open the mini e-commerce repository (link to be added)',
              variant: 'primary',
            },
            {
              label: 'Website',
              href: '#',
              aria: 'Open the mini e-commerce demo (link to be added)',
              variant: 'ghost',
            },
          ],
        },
      ],
    },
    updates: {
      badge: 'Fresh updates',
      title: 'Recent updates',
      subtitle: 'A living changelog that showcases how this portfolio keeps evolving.',
      entries: [
        {
          dateLabel: 'Nov 12, 2025',
          dateTime: '2025-11-12',
          title: '3D hover effect on profile photo',
          description:
            'Added a perspective tilt with dynamic shadows on hover. Respects Reduce Motion and the advanced effects toggle.',
        },
        {
          dateLabel: 'Nov 12, 2025',
          dateTime: '2025-11-12',
          title: 'Highlighted projects refreshed',
          description:
            'Now showcasing 5 projects with their stacks and ready-to-link repo/demo buttons, keeping the section design intact.',
        },
        {
          dateLabel: 'Nov 11, 2025',
          dateTime: '2025-11-11',
          title: 'Accessibility improvements (light theme)',
          description:
            'Increased contrast in light theme, tuned blue accents, and avoided low-contrast yellow text.',
        },
        {
          dateLabel: 'Nov 11, 2025',
          dateTime: '2025-11-11',
          title: 'Modern gradients across sections',
          description:
            'Introduced modern gradient backgrounds and opacity tweaks across sections, with light theme overrides.',
        },
        {
          dateLabel: 'Nov 11, 2025',
          dateTime: '2025-11-11',
          title: 'Skills visuals aligned with palette',
          description:
            'The Skills section now follows the new color palette and uses more legible typography in light theme.',
        },
      ],
    },
    linkedin: {
      title: 'Latest posts',
      highlight: 'on LinkedIn',
      subtitle: 'Insights and learnings I regularly share with my professional network.',
      cards: [
        {
          title: 'React best practices 2025',
          date: '5 days ago',
          description: 'Sharing modern patterns and tips to boost DX.',
          link: '#',
        },
        {
          title: 'Bringing AI into web projects',
          date: '2 weeks ago',
          description: 'How I integrate AI APIs to expand features.',
          link: '#',
        },
        {
          title: 'My favourite toolkit',
          date: '1 month ago',
          description: 'Tools I rely on daily to build efficiently.',
          link: '#',
        },
      ],
    },
    ai: {
      title: 'Experiments with',
      highlight: 'Artificial Intelligence',
      subtitle: 'I share experimental projects exploring AI, from assistants to generative models.',
      experiments: [
        {
          title: 'Personalised AI Assistant',
          description:
            'A GPT-4 chatbot that answers based on my portfolio and communication style.',
          tech: 'React + OpenAI API',
        },
        {
          title: 'Image Generator',
          description: 'Project using Stable Diffusion to create images from text prompts.',
          tech: 'Python + Diffusers',
        },
        {
          title: 'Sentiment Analyzer',
          description: 'System that processes social media opinions with NLP and ML.',
          tech: 'Flask + Transformers',
        },
      ],
    },
    ui: {
      loadingSection: 'Loading section…',
    },
    contact: {
      title: "Let's connect and build something <span>amazing</span> together!",
      subtitle:
        'I am available to collaborate on new projects, develop ideas, or simply chat about technology.',
      buttons: {
        linkedin: {
          label: 'LinkedIn',
          aria: 'Open my LinkedIn profile in a new tab',
        },
        email: {
          label: 'Email',
          aria: 'Send me an email',
        },
        github: {
          label: 'GitHub',
          aria: 'Open my GitHub profile in a new tab',
        },
        whatsapp: {
          label: 'WhatsApp',
          aria: 'Open a WhatsApp chat in a new tab',
        },
        cv: {
          label: 'Download CV',
          aria: 'Download my resume as a PDF',
        },
      },
    },
    languageNames: {
      es: 'ES',
      en: 'EN',
    },
  },
};
