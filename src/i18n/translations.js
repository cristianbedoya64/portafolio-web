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
          title: 'Portfolio interactivo',
          description:
            'Un portafolio animado con Vite, React y framer-motion que destaca mis habilidades y trayectoria profesional.',
          highlights: ['Vite', 'React 18', 'Framer Motion', 'Plausible'],
          badge: '2025',
          links: [
            {
              label: 'Ver repositorio',
              href: 'https://github.com/cristianbedoya64/portafolio-web',
              aria: 'Abrir el repositorio del portafolio interactivo en una nueva pestaña',
              variant: 'primary',
            },
            {
              label: 'Solicitar demo',
              href: '#contact',
              aria: 'Ir a la sección de contacto para solicitar una demo del portafolio',
              variant: 'ghost',
            },
          ],
        },
        {
          title: 'Dashboard analítico',
          description: 'Panel de métricas en tiempo real con visualizaciones dinámicas y API REST.',
          highlights: ['React', 'Recharts', 'CI/CD', 'Playwright'],
          badge: 'Case Study',
          links: [
            {
              label: 'Explorar arquitectura',
              href: 'https://github.com/cristianbedoya64?tab=repositories',
              aria: 'Abrir repositorios y documentación del dashboard analítico',
              variant: 'primary',
            },
            {
              label: 'Solicitar demo',
              href: '#contact',
              aria: 'Ir a contacto para solicitar una demo del dashboard analítico',
              variant: 'ghost',
            },
          ],
        },
        {
          title: 'Aplicación móvil de hábitos',
          description:
            'App híbrida que ayuda a crear hábitos saludables, con recordatorios inteligentes y estadísticas.',
          highlights: ['React Native', 'Expo', 'SQLite', 'Testing Library'],
          badge: 'Prototipo',
          links: [
            {
              label: 'Ver prototipo',
              href: 'https://github.com/cristianbedoya64?tab=repositories',
              aria: 'Abrir prototipo y documentación de la app de hábitos',
              variant: 'primary',
            },
            {
              label: 'Solicitar demo',
              href: '#contact',
              aria: 'Ir a la sección de contacto para solicitar demo de la app de hábitos',
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
          dateLabel: 'Noviembre 2025',
          dateTime: '2025-11-05',
          title: 'Sección de novedades en vivo',
          description:
            'Presentamos un histórico público de cambios para transmitir transparencia y constancia en la mejora del sitio.',
        },
        {
          dateLabel: 'Octubre 2025',
          dateTime: '2025-10-18',
          title: 'Auditorías automatizadas',
          description:
            'La integración continua ahora ejecuta Lighthouse y Playwright en cada commit para mantener calidad y rendimiento.',
        },
        {
          dateLabel: 'Septiembre 2025',
          dateTime: '2025-09-12',
          title: 'Optimización de imágenes y SEO',
          description:
            'Se agregaron tareas de optimización y metadatos enriquecidos que mejoran la carga y la visibilidad en buscadores.',
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
        },
        {
          title: 'Integrando IA en proyectos web',
          date: 'Hace 2 semanas',
          description: 'Cómo incorporo APIs de IA para ampliar funcionalidades.',
        },
        {
          title: 'Mi toolkit favorito',
          date: 'Hace 1 mes',
          description: 'Herramientas que uso a diario para desarrollar con eficiencia.',
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
          title: 'Interactive Portfolio',
          description:
            'An animated portfolio built with Vite, React, and framer-motion that highlights my skills and professional path.',
          highlights: ['Vite', 'React 18', 'Framer Motion', 'Plausible'],
          badge: '2025',
          links: [
            {
              label: 'View repository',
              href: 'https://github.com/cristianbedoya64/portafolio-web',
              aria: 'Open the interactive portfolio repository in a new tab',
              variant: 'primary',
            },
            {
              label: 'Request demo',
              href: '#contact',
              aria: 'Jump to the contact section to request a live walkthrough of the portfolio',
              variant: 'ghost',
            },
          ],
        },
        {
          title: 'Analytics Dashboard',
          description: 'Real-time metrics dashboard with dynamic visualisations and REST API.',
          highlights: ['React', 'Recharts', 'CI/CD', 'Playwright'],
          badge: 'Case Study',
          links: [
            {
              label: 'Explore architecture',
              href: 'https://github.com/cristianbedoya64?tab=repositories',
              aria: 'Open repositories and documentation for the analytics dashboard',
              variant: 'primary',
            },
            {
              label: 'Request demo',
              href: '#contact',
              aria: 'Jump to the contact section to request a dashboard walkthrough',
              variant: 'ghost',
            },
          ],
        },
        {
          title: 'Habit Tracking App',
          description: 'Hybrid app that helps build healthy habits with smart reminders and stats.',
          highlights: ['React Native', 'Expo', 'SQLite', 'Testing Library'],
          badge: 'Prototype',
          links: [
            {
              label: 'View prototype',
              href: 'https://github.com/cristianbedoya64?tab=repositories',
              aria: 'Open the habit app prototype and documentation',
              variant: 'primary',
            },
            {
              label: 'Request demo',
              href: '#contact',
              aria: 'Jump to contact to request a habit app walkthrough',
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
          dateLabel: 'November 2025',
          dateTime: '2025-11-05',
          title: 'Updates section launched',
          description:
            'Introduced a public changelog to highlight ongoing improvements and foster transparency.',
        },
        {
          dateLabel: 'October 2025',
          dateTime: '2025-10-18',
          title: 'Automated quality gates',
          description:
            'Continuous integration now runs Lighthouse and Playwright on every commit to ensure quality and performance.',
        },
        {
          dateLabel: 'September 2025',
          dateTime: '2025-09-12',
          title: 'Image and SEO improvements',
          description:
            'Added optimization tasks and enriched metadata to improve load times and search visibility.',
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
        },
        {
          title: 'Bringing AI into web projects',
          date: '2 weeks ago',
          description: 'How I integrate AI APIs to expand features.',
        },
        {
          title: 'My favourite toolkit',
          date: '1 month ago',
          description: 'Tools I rely on daily to build efficiently.',
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
