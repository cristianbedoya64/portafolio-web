import { useEffect } from 'react';

const SECTION_THRESHOLD = 0.55;

function enqueueEvent(queue, name, options) {
  if (typeof window !== 'undefined' && typeof window.plausible === 'function') {
    window.plausible(name, options);
  } else {
    queue.push({ name, options });
  }
}

function flushQueue(queue) {
  if (typeof window === 'undefined' || typeof window.plausible !== 'function') {
    return;
  }
  while (queue.length > 0) {
    const { name, options } = queue.shift();
    window.plausible(name, options);
  }
}

export default function AnalyticsProvider() {
  useEffect(() => {
    const domain = import.meta.env.VITE_PLAUSIBLE_DOMAIN;
    if (!domain) {
      return undefined;
    }

    const scriptSrc =
      import.meta.env.VITE_PLAUSIBLE_SCRIPT_URL || 'https://plausible.io/js/script.js';
    const queue = [];

    let scriptElement = document.querySelector('script[data-plausible-domain]');
    const handleScriptLoad = () => flushQueue(queue);

    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.defer = true;
      scriptElement.src = scriptSrc;
      scriptElement.setAttribute('data-domain', domain);
      scriptElement.setAttribute('data-plausible-domain', domain);
      scriptElement.addEventListener('load', handleScriptLoad, { once: true });
      document.head.appendChild(scriptElement);
    } else if (typeof window.plausible === 'function') {
      flushQueue(queue);
    } else {
      scriptElement.addEventListener('load', handleScriptLoad, { once: true });
    }

    const seenSections = new Set();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || entry.intersectionRatio < SECTION_THRESHOLD) {
            return;
          }
          const sectionId = entry.target.getAttribute('id');
          if (!sectionId || seenSections.has(sectionId)) {
            return;
          }
          seenSections.add(sectionId);
          enqueueEvent(queue, 'Section View', { props: { section: sectionId } });
        });
      },
      { threshold: SECTION_THRESHOLD },
    );

    const sections = document.querySelectorAll('main section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
