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
          title: 'UARP-AI (User, Audit & Role Platform)',
          description:
            'Plataforma empresarial para gestión avanzada de usuarios, roles y permisos, con módulos de auditoría y capacidades de IA/Data Science. Arquitectura modular, paneles de control, autenticación, logs y despliegue Docker. Demuestra velocidad y calidad profesional con IA.',
          highlights: [
            'React',
            'Vite',
            'TailwindCSS',
            'Node.js',
            'Express',
            'Sequelize',
            'PostgreSQL',
            'Python',
            'Docker',
            'CI/CD',
            'AI-assisted',
          ],
          outcomes: [
            'Desarrollada en < 1 semana, >90% de features implementadas.',
            'Arquitectura modular, escalable y documentada.',
            'Paneles de control con KPIs, auditoría y detección de anomalías.',
            'Integración de IA para scoring de riesgo y sugerencias.',
            'Despliegue reproducible con Docker Compose.',
            'Commits y PRs etiquetados como (copilot-assisted) para transparencia.',
          ],
          badge: 'Estrella ⭐',
          links: [
            {
              label: 'Demo interactiva',
              href: 'http://206.189.76.47:5173/',
              aria: 'Abrir la demo interactiva de UARP-AI en una nueva pestaña',
              variant: 'star',
              icon: '🚀',
              highlight: true,
            },
            {
              label: 'Repositorio',
              href: 'https://github.com/cristianbedoya64/crud-users-ia',
              aria: 'Abrir el repositorio real de UARP-AI en GitHub',
              variant: 'primary',
              icon: '💻',
            },
            {
              label: 'Blueprint & arquitectura',
              href: '#detalle-uarp-ai',
              aria: 'Ver detalles técnicos y arquitectura de UARP-AI',
              variant: 'ghost',
              type: 'details',
              icon: '🧩',
              highlight: true,
            },
          ],
          buildDetails: {
            title: 'Blueprint y arquitectura de UARP-AI',
            subtitle: 'Plataforma empresarial con IA, auditoría y despliegue ágil.',
            summary:
              'UARP-AI integra gestión avanzada de usuarios, roles y permisos, auditoría, paneles de control y módulos de IA/Data Science. Desarrollada en menos de 3 semanas, con arquitectura escalable, pruebas y despliegue Docker.',
            timeline: 'Tiempo de construcción: < 3 semanas',
            stackLabel: 'Stack principal',
            stack: [
              'React + Vite + TailwindCSS',
              'Node.js + Express + Sequelize',
              'PostgreSQL (migraciones automáticas)',
              'Python (IA/Data Science)',
              'Docker + Docker Compose',
              'Vitest/Jest + Playwright',
              'Markdown + Mermaid',
            ],
            sections: [
              {
                title: 'Módulos clave',
                items: [
                  'CRUDs robustos para usuarios, roles y permisos (RBAC granular).',
                  'Autenticación JWT/sesiones y autorización avanzada.',
                  'Auditoría de seguridad: logs, event store y paneles de actividad.',
                  'Paneles de control con KPIs, reportes y detección de anomalías.',
                  'Integración de IA: scoring de riesgo y sugerencias de auditoría.',
                  'Contenerización y despliegue reproducible con Docker.',
                ],
              },
              {
                title: 'Diferenciadores IA & DevOps',
                items: [
                  'Desarrollo asistido por Copilot: 30% del código generado y revisado.',
                  'Commits y PRs etiquetados (copilot-assisted) para transparencia.',
                  'Automatización de migraciones y seed scripts.',
                  'Documentación técnica profesional y diagramas Mermaid.',
                ],
              },
              {
                title: 'Valor agregado',
                items: [
                  'Entrega rápida y reproducible de software empresarial.',
                  'Demostración de velocidad, calidad y gobernanza de cambios.',
                  'Capacidad para integrar nuevas tecnologías y metodologías ágiles.',
                ],
              },
            ],
            metricsLabel: 'Impacto medible',
            metrics: [
              'Desarrollo < 3 semanas, >90% features listas.',
              '70% desarrollo propio / 30% asistido por IA.',
              'Paneles de control y auditoría en tiempo real.',
              'Despliegue reproducible con Docker Compose.',
              'Documentación técnica y diagramas actualizados.',
            ],
            closeLabel: 'Cerrar detalle',
          },
        },
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
          outcomes: [
            'LCP ~1.1s en desktop (preload de imagen del héroe y limpieza de fuentes).',
            'JS inicial más liviano: gráficas y partículas cargan bajo demanda.',
            'Budgets Lighthouse (desktop y mobile) en CI para prevenir regresiones.',
            'Accesibilidad ≥ 0.95 en auditorías locales.',
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
              label: 'Cómo se construyó',
              href: '#detalle-portafolio-web',
              aria: 'Abrir la tarjeta con el blueprint del portafolio',
              variant: 'ghost',
              type: 'details',
            },
          ],
          buildDetails: {
            title: 'Cómo se construyó este portafolio',
            subtitle: 'Arquitectura React + Vite iterada con métricas reales y soporte de IA.',
            summary:
              'Durante una semana afiné el diseño, accesibilidad y rendimiento combinando React 18, animaciones con Framer Motion, efectos 3D y automatización de calidad.',
            timeline: 'Tiempo de construcción: 1 semana',
            stackLabel: 'Stack principal',
            stack: [
              'React 18 + Hooks',
              'Vite 7',
              'Framer Motion 12',
              'Tailwind + CSS modular',
              'Vanta.js / Three.js',
              'Vitest + Playwright',
              'GitHub Actions + Lighthouse',
              'PWA + Workbox',
            ],
            sections: [
              {
                title: 'Arquitectura y UX',
                items: [
                  'Componentes desacoplados por secciones + contextos (idioma/efectos).',
                  'Carga progresiva: partículas, gráficas y scripts pesados bajo demanda.',
                  'Animaciones con Framer Motion respetando Reduce Motion y accesibilidad.',
                ],
              },
              {
                title: 'Automatización y control',
                items: [
                  'Vitest para pruebas unitarias y de componentes (>80% de cobertura objetivo).',
                  'Playwright smoke tests + budgets Lighthouse en CI para prevenir regresiones.',
                  'Scripts personalizados para optimizar imágenes y generar variantes del perfil.',
                ],
              },
              {
                title: 'Entrega guiada por IA',
                items: [
                  'Copilot/LLMs para prototipos rápidos, yo valido métricas y accesibilidad.',
                  'Prompts específicos para documentar decisiones y outcomes por proyecto.',
                ],
              },
            ],
            metricsLabel: 'Impacto medible',
            metrics: [
              'LCP ~1.1s en desktop gracias a preload de imagen y fuentes ordenadas.',
              'JS inicial reducido: gráficas y partículas no bloquean el render.',
              'Accesibilidad ≥0.95 en auditorías locales y foco visible en todos los CTAs.',
            ],
            closeLabel: 'Cerrar detalle',
          },
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
          outcomes: [
            'Carga de datos diferida hasta abrir el panel para mejorar la carga inicial.',
            'Gráficas (Recharts) se cargan de forma perezosa dentro del panel.',
            'Manejo de errores/latencia con indicador de fuente (estimada/en vivo).',
          ],
          badge: 'Case Study',
          links: [
            {
              label: 'Repositorio',
              href: 'https://github.com/example/dashboard',
              aria: 'Abrir el repositorio del dashboard de datos (enlace genérico)',
              variant: 'primary',
            },
            {
              label: 'Web',
              href: 'https://demo.example.com/dashboard',
              aria: 'Abrir la demo del dashboard (enlace genérico)',
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
          outcomes: [
            'Drag & Drop fluido con soporte de teclado y estados accesibles.',
            'Persistencia local inmediata con API opcional para multiusuario.',
            'Pruebas E2E de flujos principales (crear, mover, borrar) en verde.',
          ],
          badge: '2025',
          links: [
            {
              label: 'Repositorio',
              href: 'https://github.com/example/tasks-app',
              aria: 'Abrir el repositorio de la app de tareas (enlace genérico)',
              variant: 'primary',
            },
            {
              label: 'Web',
              href: 'https://demo.example.com/tasks-app',
              aria: 'Abrir la demo de la app de tareas (enlace genérico)',
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
          outcomes: [
            'Mensajería instantánea estable en demo con reconexión automática.',
            'Indicadores de estado y timestamps en UI accesible.',
            'Tema oscuro y atajos de teclado para rapidez.',
          ],
          badge: '2025',
          links: [
            {
              label: 'Repositorio',
              href: 'https://github.com/example/realtime-chat',
              aria: 'Abrir el repositorio del chat en tiempo real (enlace genérico)',
              variant: 'primary',
            },
            {
              label: 'Web',
              href: 'https://demo.example.com/realtime-chat',
              aria: 'Abrir la demo del chat en tiempo real (enlace genérico)',
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
          outcomes: [
            'Checkout simulado estable y rutas protegidas por JWT.',
            'Estado global claro (carrito, auth) y navegación fluida.',
            'Transiciones suaves y responsivas con Framer Motion.',
          ],
          badge: '2025',
          links: [
            {
              label: 'Repositorio',
              href: 'https://github.com/example/mini-ecommerce',
              aria: 'Abrir el repositorio del mini e-commerce (enlace genérico)',
              variant: 'primary',
            },
            {
              label: 'Web',
              href: 'https://demo.example.com/mini-ecommerce',
              aria: 'Abrir la demo del mini e-commerce (enlace genérico)',
              variant: 'ghost',
            },
          ],
        },
      ],
    },
    techTrends: {
      toggle: {
        openAria: 'Mostrar panel de tendencias tecnológicas',
        closeAria: 'Ocultar panel de tendencias tecnológicas',
        openTitle: 'Ver tendencias tecnológicas',
        closeTitle: 'Ocultar tendencias',
      },
      header: {
        title: 'Panel de tendencias tecnológicas',
        loading: 'Cargando datos en tiempo real…',
        live: 'Panel actualizado en vivo',
        kpisAria: 'Resumen de métricas clave',
        languages: 'Lenguajes',
        roles: 'Vacantes',
        regions: 'Regiones',
      },
      closeButton: {
        aria: 'Cerrar panel de tendencias',
        title: 'Cerrar panel',
      },
      fallbackHeading: 'Cargando visualizaciones…',
      footer: {
        lastUpdated: 'Última actualización',
        noData: 'Sin registros recientes',
        syncing: 'Sincronizando…',
        interval: 'Intervalo',
        secondsSuffix: 's',
        latency: 'Latencia',
        sourceLabel: 'Fuente',
        sourceEstimated: 'estimada',
        sourceLive: 'en vivo',
      },
      charts: {
        languagesTitle: '📊 Lenguajes de programación más demandados',
        languagesRefresh: 'Actualizando…',
        rolesTitle: '💼 Roles con más vacantes',
        rolesFallback: 'Datos estimados',
        regionsTitle: '🌍 Tendencias globales o por país (Colombia)',
      },
    },
    updates: {
      badge: 'Actualizaciones recientes',
      title: 'Actualizaciones recientes',
      subtitle: 'Un vistazo rápido a las mejoras que mantienen este portafolio en evolución.',
      entries: [
        {
          dateLabel: '14 Dic 2025',
          dateTime: '2025-12-14',
          title: 'Botón de descargar CV actualizado',
          description: 'El botón de descargar CV ahora selecciona y descarga el archivo correcto según el idioma del portafolio (español o inglés).',
        },
        {
          dateLabel: '18 Nov 2025',
          dateTime: '2025-11-18',
          title: 'Panel de tendencias optimizado',
          description:
            'Mejor contraste, accesibilidad, responsividad y feedback visual en el panel de tendencias tecnológicas. Ahora muestra más datos, regiones únicas y se limita a las 5 más relevantes.',
        },
        {
          dateLabel: '18 Nov 2025',
          dateTime: '2025-11-18',
          title: 'Datos de regiones dinámicos',
          description:
            'El panel detecta y agrupa todas las regiones únicas de los datos de empleos, mostrando solo las 5 más frecuentes para evitar saturación visual.',
        },
        {
          dateLabel: '18 Nov 2025',
          dateTime: '2025-11-18',
          title: 'Más lenguajes y roles en tendencias',
          description:
            'Ahora se muestran todos los lenguajes y roles disponibles en el panel, no solo un subconjunto.',
        },
        {
          dateLabel: '18 Nov 2025',
          dateTime: '2025-11-18',
          title: 'Contraste y modo claro mejorados',
          description:
            'El panel de tendencias ahora adapta fondo y colores para modo claro, garantizando legibilidad en todos los temas.',
        },
        {
          dateLabel: '14 Nov 2025',
          dateTime: '2025-11-14',
          title: 'Deploy estable en GitHub Pages',
          description:
            'El portafolio ahora está publicado en GitHub Pages con PWA ajustada para /portafolio-web/, listo para compartir con reclutadores.',
        },
        {
          dateLabel: '13 Nov 2025',
          dateTime: '2025-11-13',
          title: 'Botones de proyectos sin enlaces rotos',
          description:
            'Cada CTA usa enlaces reales o placeholders accesibles, con analytics y fallback cuando aún no hay demo. Cero botones que no hagan nada.',
        },
        {
          dateLabel: '13 Nov 2025',
          dateTime: '2025-11-13',
          title: 'Modal “Cómo se construyó”',
          description:
            'Nuevo botón abre un blueprint del portafolio con stack, cronograma y próximos pasos; modal accesible con trap de foco, Escape y contraste mejorado.',
        },
        {
          dateLabel: '12 Nov 2025',
          dateTime: '2025-11-12',
          title: 'Imagen del héroe optimizada (+ <picture> y preload)',
          description:
            'Restauramos la foto del héroe con <picture> (AVIF/WebP/JPG) y preload WebP. Mejor LCP y carga estable.',
        },
        {
          dateLabel: '12 Nov 2025',
          dateTime: '2025-11-12',
          title: 'CI con Lighthouse (desktop y mobile) + budgets',
          description:
            'Pipeline con auditorías Lighthouse para ambas vistas y budgets para evitar regresiones; reportes como artefactos.',
        },
        {
          dateLabel: '12 Nov 2025',
          dateTime: '2025-11-12',
          title: 'Code splitting: gráficas y partículas bajo demanda',
          description:
            'Recharts carga perezosa al abrir el panel; partículas se cargan al entrar en viewport. JS inicial más liviano.',
        },
        {
          dateLabel: '12 Nov 2025',
          dateTime: '2025-11-12',
          title: 'Proyectos con resultados medibles',
          description:
            'Cada tarjeta ahora muestra “outcomes” con impactos claros (rendimiento, conversión, etc.).',
        },
        {
          dateLabel: '12 Nov 2025',
          dateTime: '2025-11-12',
          title: 'Actualizaciones al final de la página',
          description:
            'La sección de actualizaciones se movió al final para priorizar contenido y flujo de lectura.',
        },
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
          title: 'Tema claro pulido (accesibilidad + gradientes + skills)',
          description:
            'Aumentamos contraste, renovamos los gradientes y alineamos Skills con la nueva paleta para mantener legibilidad en todo el tema claro.',
        },
      ],
    },
    linkedin: {
      title: 'Publicaciones',
      highlight: 'de LinkedIn',
      subtitle: 'Insights y aprendizajes recientes que comparto con mi red profesional.',
      cards: [
        {
          title: 'El nacimiento del “Ingeniero Potenciado por IA”',
          date: 'Hoy',
          dateTime: '2025-11-12',
          description:
            'Durante años, la ingeniería de software se definió como escribir código. En 2025 surge un nuevo perfil: el Ingeniero Potenciado por IA.',
          link: 'https://www.linkedin.com/feed/update/urn:li:activity:7394449555485904896/',
        },
        {
          title: 'Integrando IA en proyectos web: de “demo” a valor real 🚀🤖',
          date: 'Hoy',
          dateTime: '2025-11-12',
          description:
            'En los últimos días llevé mi portafolio a otro nivel con IA, enfocándome en resolver problemas reales de UX y operación 🧰✨.',
          link: 'https://www.linkedin.com/feed/update/urn:li:share:7394521073234497536/',
        },
        {
          title: 'Mi toolkit favorito: desarrollar con eficiencia cada día 🚀🧰',
          date: 'Hoy',
          dateTime: '2025-11-12',
          description:
            'En mi día a día me apoyo en un set de herramientas que me hacen más rápido, consistente y confiable. Aquí va mi “stack de productividad” y cómo lo combino 👇',
          link: 'https://www.linkedin.com/feed/update/urn:li:share:7394522974097416192/',
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
          title: 'Chat educativo para niños (aprende inglés jugando)',
          description:
            'Un chat guiado y seguro con personajes amigables que enseña vocabulario, pronunciación y frases básicas en inglés mediante juegos y retos.',
          tech: 'React + Web Speech API + Whisper/OpenAI + Moderation',
          link: '#',
        },
        {
          title: 'Revisor de Pull Requests con IA (accesibilidad y performance)',
          description:
            'Analiza PRs para detectar problemas de accesibilidad, performance y aspectos básicos de seguridad; sugiere cambios concretos y comenta automáticamente en GitHub.',
          tech: 'GitHub Actions + Node.js + OpenAI Functions + axe-core + ESLint',
          link: '#',
        },
        {
          title: 'Asistente RAG para documentación interna',
          description:
            'Busca y responde con citas de políticas, FAQs y documentación interna; ideal para onboarding y soporte interno con respuestas verificables.',
          tech: 'Next.js + PostgreSQL/pgvector o Pinecone + Embeddings + OpenAI',
          link: '#',
        },
        {
          title: 'Analizador de CVs y ofertas (matching y brechas)',
          description:
            'Extrae habilidades clave, puntúa compatibilidad con la oferta, resalta brechas y sugiere mejoras y preguntas técnicas para la entrevista.',
          tech: 'FastAPI/Node + spaCy/Transformers + OpenAI + Prisma/PostgreSQL',
          link: '#',
        },
      ],
    },
    ui: {
      loadingSection: 'Cargando sección…',
    },
    contact: {
      title: 'Reclutadores TIC: construyamos <span>impacto</span> juntos',
      subtitle:
        'Abierto a roles Full‑Stack/Frontend (React, Node.js, TypeScript). Enfoque en rendimiento, accesibilidad y CI/CD con resultados medibles (LCP, TTI). Modalidad: remoto, híbrido o presencial (puedo trasladarme). Disponibilidad total e inmediata. También abierto a roles Jr (p. ej., Java Developer Jr). Si buscas impacto rápido y medible, contáctame por LinkedIn o WhatsApp y coordinamos entrevista.',
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
        'AI-augmented developer (9th semester Systems Engineering). I design and build accessible, high-performance, user-centered products.',
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
          title: 'UARP-AI (User, Audit & Role Platform)',
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
          outcomes: [
            'Desktop LCP ~1.1s (hero image preload and font cleanup).',
            'Lighter initial JS: charts and particles load on demand.',
            'Lighthouse budgets (desktop and mobile) enforced in CI.',
            'Accessibility ≥ 0.95 in local audits.',
          ],
          badge: '2025',
          links: [
            {
              label: 'Live demo',
              href: 'http://206.189.76.47:5173/',
              aria: 'Open the live demo of UARP-AI in a new tab',
              variant: 'star',
              highlight: true,
            },
            {
              label: 'Repository',
              href: 'https://github.com/cristianbedoya64/portafolio-web',
              aria: 'Open the interactive web portfolio repository in a new tab',
              variant: 'primary',
            },
            {
              label: 'Build details',
              href: '#portfolio-build-details',
              aria: 'Open the interactive card with the portfolio build notes',
              variant: 'ghost',
              type: 'details',
            },
          ],
          buildDetails: {
            title: 'Blueprint and architecture of UARP-AI',
            subtitle: 'Enterprise platform with AI, auditing, and agile deployment.',
            summary:
              'UARP-AI integrates advanced user, role, and permission management, auditing, dashboards, and AI/Data Science modules. Developed in less than 3 weeks, with scalable architecture, testing, and Docker deployment.',
            timeline: 'Build time: < 3 weeks',
            stackLabel: 'Core stack',
            stack: [
              'React + Vite + TailwindCSS',
              'Node.js + Express + Sequelize',
              'PostgreSQL (automatic migrations)',
              'Python (AI/Data Science)',
              'Docker + Docker Compose',
              'Vitest/Jest + Playwright',
              'Markdown + Mermaid',
            ],
            sections: [
              {
                title: 'Key modules',
                items: [
                  'Robust CRUDs for users, roles, and permissions (granular RBAC).',
                  'JWT/session authentication and advanced authorization.',
                  'Security auditing: logs, event store, and activity dashboards.',
                  'Dashboards with KPIs, reports, and anomaly detection.',
                  'AI integration: risk scoring and audit suggestions.',
                  'Containerization and reproducible deployment with Docker.',
                ],
              },
              {
                title: 'AI & DevOps differentiators',
                items: [
                  'Copilot-assisted development: 30% of the code generated and reviewed.',
                  'Commits and PRs tagged (copilot-assisted) for transparency.',
                  'Automated migrations and seed scripts.',
                  'Professional technical documentation and Mermaid diagrams.',
                ],
              },
              {
                title: 'Added value',
                items: [
                  'Fast and reproducible delivery of enterprise software.',
                  'Demonstration of speed, quality, and change governance.',
                  'Ability to integrate new technologies and agile methodologies.',
                ],
              },
            ],
            metricsLabel: 'Measurable impact',
            metrics: [
              'Development < 3 weeks, >90% features ready.',
              '70% own development / 30% AI-assisted.',
              'Real-time dashboards and auditing.',
              'Reproducible deployment with Docker Compose.',
              'Up-to-date technical documentation and diagrams.',
            ],
            closeLabel: 'Close details',
          },
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
          outcomes: [
            'Defers data fetching until panel is opened, improving initial load.',
            'Charts (Recharts) lazy-loaded within the panel.',
            'Error/latency handling with “source: estimated/live” indicator.',
          ],
          badge: 'Case Study',
          links: [
            {
              label: 'Repository',
              href: 'https://github.com/example/dashboard',
              aria: 'Open the data dashboard repository (generic link)',
              variant: 'primary',
            },
            {
              label: 'Website',
              href: 'https://demo.example.com/dashboard',
              aria: 'Open the dashboard demo (generic link)',
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
          outcomes: [
            'Smooth DnD with keyboard support and accessible states.',
            'Instant local persistence with optional API for multi-user.',
            'E2E tests green for core flows (create, move, delete).',
          ],
          badge: '2025',
          links: [
            {
              label: 'Repository',
              href: 'https://github.com/example/tasks-app',
              aria: 'Open the tasks app repository (generic link)',
              variant: 'primary',
            },
            {
              label: 'Website',
              href: 'https://demo.example.com/tasks-app',
              aria: 'Open the tasks app demo (generic link)',
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
          outcomes: [
            'Stable instant messaging in demo with auto-reconnect.',
            'Status indicators and timestamps in accessible UI.',
            'Dark mode and keyboard shortcuts for speed.',
          ],
          badge: '2025',
          links: [
            {
              label: 'Repository',
              href: 'https://github.com/example/realtime-chat',
              aria: 'Open the real-time chat repository (generic link)',
              variant: 'primary',
            },
            {
              label: 'Website',
              href: 'https://demo.example.com/realtime-chat',
              aria: 'Open the real-time chat demo (generic link)',
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
          outcomes: [
            'Stable simulated checkout and JWT-protected routes.',
            'Clear global state (cart, auth) and smooth navigation.',
            'Responsive transitions with Framer Motion.',
          ],
          badge: '2025',
          links: [
            {
              label: 'Repository',
              href: 'https://github.com/example/mini-ecommerce',
              aria: 'Open the mini e-commerce repository (generic link)',
              variant: 'primary',
            },
            {
              label: 'Website',
              href: 'https://demo.example.com/mini-ecommerce',
              aria: 'Open the mini e-commerce demo (generic link)',
              variant: 'ghost',
            },
          ],
        },
      ],
    },
    techTrends: {
      toggle: {
        openAria: 'Show tech trends panel',
        closeAria: 'Hide tech trends panel',
        openTitle: 'View tech trends',
        closeTitle: 'Hide trends',
      },
      header: {
        title: 'Tech Trends Dashboard',
        loading: 'Loading real-time data…',
        live: 'Live-updated panel',
        kpisAria: 'Key metrics summary',
        languages: 'Languages',
        roles: 'Open roles',
        regions: 'Regions',
      },
      closeButton: {
        aria: 'Close trends panel',
        title: 'Close panel',
      },
      fallbackHeading: 'Loading charts…',
      footer: {
        lastUpdated: 'Last update',
        noData: 'No recent records',
        syncing: 'Syncing…',
        interval: 'Interval',
        secondsSuffix: 's',
        latency: 'Latency',
        sourceLabel: 'Source',
        sourceEstimated: 'estimated',
        sourceLive: 'live',
      },
      charts: {
        languagesTitle: '📊 Most in-demand programming languages',
        languagesRefresh: 'Refreshing…',
        rolesTitle: '💼 Roles with the most openings',
        rolesFallback: 'Estimated data',
        regionsTitle: '🌍 Global vs country trends (Colombia)',
      },
    },
    updates: {
      badge: 'Fresh updates',
      title: 'Recent updates',
      subtitle: 'A living changelog that showcases how this portfolio keeps evolving.',
      entries: [
        {
          dateLabel: 'Dec 14, 2025',
          dateTime: '2025-12-14',
          title: 'Download CV button updated',
          description: 'The Download CV button now selects and downloads the correct file based on the portfolio language (Spanish or English).',
        },
        {
          dateLabel: 'Nov 18, 2025',
          dateTime: '2025-11-18',
          title: 'Optimised Tech Trends panel',
          description:
            'Improved contrast, accessibility, responsiveness, and visual feedback in the Tech Trends dashboard. Now shows more data, unique regions, and limits to the 5 most relevant.',
        },
        {
          dateLabel: 'Nov 18, 2025',
          dateTime: '2025-11-18',
          title: 'Dynamic region data',
          description:
            'The panel now detects and groups all unique regions from job data, showing only the 5 most frequent to avoid visual overload.',
        },
        {
          dateLabel: 'Nov 18, 2025',
          dateTime: '2025-11-18',
          title: 'More languages and roles in trends',
          description:
            'All available languages and roles are now shown in the panel, not just a subset.',
        },
        {
          dateLabel: 'Nov 18, 2025',
          dateTime: '2025-11-18',
          title: 'Improved contrast and light mode',
          description:
            'The trends panel now adapts background and colors for light mode, ensuring legibility in all themes.',
        },
        {
          dateLabel: 'Nov 14, 2025',
          dateTime: '2025-11-14',
          title: 'Stable GitHub Pages deploy',
          description:
            'The portfolio is now live on GitHub Pages with a PWA configured for /portafolio-web/, ready to be shared with recruiters.',
        },
        {
          dateLabel: 'Nov 13, 2025',
          dateTime: '2025-11-13',
          title: 'Project buttons wired to real actions',
          description:
            'Every CTA now points to real links or accessible placeholders, with analytics and graceful fallbacks when a demo is not ready. No more dead buttons.',
        },
        {
          dateLabel: 'Nov 13, 2025',
          dateTime: '2025-11-13',
          title: '“How it was built” modal blueprint',
          description:
            'New button opens a portfolio blueprint showing stack, timeline, and next steps; the modal traps focus, closes on Escape, and ships with higher contrast.',
        },
        {
          dateLabel: 'Nov 12, 2025',
          dateTime: '2025-11-12',
          title: 'Optimised hero image (+ <picture> and preload)',
          description:
            'Restored the hero photo with <picture> (AVIF/WebP/JPG) and a WebP preload. Better LCP and stable loading.',
        },
        {
          dateLabel: 'Nov 12, 2025',
          dateTime: '2025-11-12',
          title: 'CI with Lighthouse (desktop & mobile) + budgets',
          description:
            'Pipeline runs Lighthouse for both form factors with budgets to prevent regressions; reports are uploaded as artifacts.',
        },
        {
          dateLabel: 'Nov 12, 2025',
          dateTime: '2025-11-12',
          title: 'Code splitting: charts and particles on demand',
          description:
            'Recharts lazy-loads when the panel opens; particles load on viewport. Lighter initial JS.',
        },
        {
          dateLabel: 'Nov 12, 2025',
          dateTime: '2025-11-12',
          title: 'Projects with outcome bullets',
          description:
            'Each project card now surfaces clear “outcomes” with measurable impact (performance, conversion, etc.).',
        },
        {
          dateLabel: 'Nov 12, 2025',
          dateTime: '2025-11-12',
          title: 'Updates moved to the end',
          description:
            'The Updates section now appears at the bottom to prioritise core content and reading flow.',
        },
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
            'Showcasing 5 projects with their stacks and repo/demo buttons ready to go, keeping the section layout intact.',
        },
        {
          dateLabel: 'Nov 11, 2025',
          dateTime: '2025-11-11',
          title: 'Light theme polish (accessibility + gradients + skills)',
          description:
            'Higher contrast, modern gradients that stay legible, and the Skills section aligned with the refreshed palette keep the light theme consistent.',
        },
      ],
    },
    linkedin: {
      title: 'Latest posts',
      highlight: 'on LinkedIn',
      subtitle: 'Insights and learnings I regularly share with my professional network.',
      cards: [
        {
          title: 'The Rise of the “AI-augmented Engineer”',
          date: 'Today',
          dateTime: '2025-11-12',
          description:
            'For years, software engineering meant writing code. In 2025 a new profile emerges: the AI-augmented Engineer.',
          link: 'https://www.linkedin.com/feed/update/urn:li:activity:7394449555485904896/',
        },
        {
          title: 'Bringing AI into web projects: from “demo” to real value 🚀🤖',
          date: 'Today',
          dateTime: '2025-11-12',
          description:
            'In recent days I took my portfolio to the next level with AI, focusing on solving real UX and operational problems 🧰✨.',
          link: 'https://www.linkedin.com/feed/update/urn:li:share:7394521073234497536/',
        },
        {
          title: 'My favourite toolkit: build efficiently every day 🚀🧰',
          date: 'Today',
          dateTime: '2025-11-12',
          description:
            'Day to day I rely on a set of tools that make me faster, consistent, and reliable. Here is my productivity stack and how I combine it 👇',
          link: 'https://www.linkedin.com/feed/update/urn:li:share:7394522974097416192/',
        },
      ],
    },
    ai: {
      title: 'Experiments with',
      highlight: 'Artificial Intelligence',
      subtitle: 'I share experimental projects exploring AI, from assistants to generative models.',
      experiments: [
        {
          title: 'Kids educational chat (learn English through play)',
          description:
            'A safe, guided chat with friendly characters teaching vocabulary, pronunciation, and basic phrases via games and challenges.',
          tech: 'React + Web Speech API + Whisper/OpenAI + Moderation',
          link: '#',
        },
        {
          title: 'AI Pull Request reviewer (accessibility & performance)',
          description:
            'Analyzes PRs to flag accessibility, performance, and light security issues; proposes concrete changes and auto-comments via GitHub.',
          tech: 'GitHub Actions + Node.js + OpenAI Functions + axe-core + ESLint',
          link: '#',
        },
        {
          title: 'RAG knowledge base assistant for internal docs',
          description:
            'Searches and answers with citations from policies, FAQs, and internal docs; ideal for onboarding and internal support with verifiable answers.',
          tech: 'Next.js + PostgreSQL/pgvector or Pinecone + Embeddings + OpenAI',
          link: '#',
        },
        {
          title: 'Resume and job description matcher (skills gaps)',
          description:
            'Extracts key skills, scores role fit, highlights gaps, and suggests improvements and targeted interview questions.',
          tech: 'FastAPI/Node + spaCy/Transformers + OpenAI + Prisma/PostgreSQL',
          link: '#',
        },
      ],
    },
    ui: {
      loadingSection: 'Loading section…',
    },
    contact: {
      title: 'TIC recruiters: let’s build <span>impact</span> together!',
      subtitle:
        'Open to Full‑Stack/Frontend roles (React, Node.js, TypeScript). Focus on performance, accessibility, and CI/CD with measurable results (LCP, TTI). Work modes: remote, hybrid, or on‑site (relocation possible). Full and immediate availability. Also open to Junior roles (e.g., Java Developer Jr). If you need fast, measurable impact, reach out via LinkedIn or WhatsApp to schedule an interview.',
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
