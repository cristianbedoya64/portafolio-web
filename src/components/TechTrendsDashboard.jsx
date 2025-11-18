// Tech Trends Dashboard – Muestra métricas actualizadas del sector tecnológico con visualización animada y datos reales
import { Suspense, useCallback, useEffect, useRef, useState, lazy } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './TechTrendsDashboard.css';
import { FALLBACK_TRENDS, getTechTrends } from '../api/trendsService.js';
import { useLanguage } from '../contexts/LanguageContext.jsx';

// Lazy-load charts (and thus recharts) only when the panel is open
const TechTrendsCharts = lazy(() => import('./TechTrendsCharts.jsx'));

const REFRESH_INTERVAL = 30000;
const BAR_COLORS = ['#38bdf8', '#2563eb', '#fbbf24', '#22d3ee', '#f59e0b'];
const PIE_COLORS = ['#38bdf8', '#fbbf24', '#22d3ee', '#a855f7'];

const panelVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 40 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

export default function TechTrendsDashboard() {
  const { language, translations } = useLanguage();
  const techText = translations.techTrends || {};
  // Panel starts closed by default; persist user choice across sessions
  const [isOpen, setIsOpen] = useState(() => {
    try {
      const stored = localStorage.getItem('techTrendsOpen');
      if (stored === null) return false; // default: closed
      return stored === '1';
    } catch {
      return false;
    }
  });
  const [trends, setTrends] = useState(FALLBACK_TRENDS);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [isFallback, setIsFallback] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [fetchMs, setFetchMs] = useState(null);

  const controllerRef = useRef(null);
  const mountedRef = useRef(false);

  const fetchTrends = useCallback(async ({ initial = false } = {}) => {
    if (controllerRef.current) {
      controllerRef.current.abort();
    }

    const controller = new AbortController();
    controllerRef.current = controller;

    if (initial) {
      setLoading(true);
    } else {
      setRefreshing(true);
    }

    try {
      const start =
        typeof performance !== 'undefined' && performance.now ? performance.now() : Date.now();
      const result = await getTechTrends({ signal: controller.signal });
      if (!mountedRef.current) return;

      setTrends(result.data);
      setIsFallback(Boolean(result.isFallback));
      setError(result.isFallback ? (result.error ?? null) : null);
      const end =
        typeof performance !== 'undefined' && performance.now ? performance.now() : Date.now();
      setFetchMs(Math.max(0, Math.round(end - start)));
    } catch (fetchError) {
      if (!mountedRef.current) return;
      if (fetchError?.name === 'AbortError') return;

      setTrends(FALLBACK_TRENDS);
      setIsFallback(true);
      setError(fetchError);
    } finally {
      if (mountedRef.current) {
        if (initial) {
          setLoading(false);
        }
        setRefreshing(false);
        setLastUpdated(new Date());
      }
    }
  }, []);

  // Mount tracking only; defer network until panel is opened to improve initial load & Lighthouse metrics.
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      if (controllerRef.current) {
        controllerRef.current.abort();
      }
    };
  }, []);

  // Perform fetches only when dashboard is open.
  useEffect(() => {
    if (!isOpen) return; // Skip network activity if user hasn't opened the panel.

    fetchTrends({ initial: true });
    const intervalId = setInterval(() => {
      fetchTrends({ initial: false });
    }, REFRESH_INTERVAL);

    return () => {
      if (controllerRef.current) {
        controllerRef.current.abort();
      }
      clearInterval(intervalId);
    };
  }, [isOpen, fetchTrends]);

  const toggleDashboard = () => setIsOpen((prev) => !prev);

  // Persist toggle in localStorage
  useEffect(() => {
    try {
      localStorage.setItem('techTrendsOpen', isOpen ? '1' : '0');
    } catch {
      // ignore persistence errors (private mode, quota, etc.)
    }
  }, [isOpen]);

  const languagesData = trends.languages || [];
  const rolesData = trends.roles || [];
  const regionsData = trends.regions || [];

  const totalLanguages = languagesData.reduce((acc, it) => acc + (it?.value ?? 0), 0);
  const totalRoles = rolesData.reduce((acc, it) => acc + (it?.value ?? 0), 0);
  const totalRegions = regionsData.reduce((acc, it) => acc + (it?.value ?? 0), 0);

  // Mostrar todos los datos disponibles en los resúmenes
  const languagesSummary = languagesData;
  const rolesSummary = rolesData;
  const regionsSummary = regionsData;

  const formatCount = useCallback(
    (value) => {
      const locale = language === 'es' ? 'es-CO' : 'en-US';
      try {
        return new Intl.NumberFormat(locale, { maximumFractionDigits: 0 }).format(value ?? 0);
      } catch {
        return String(value ?? 0);
      }
    },
    [language],
  );

  const pct = useCallback((part, total) => {
    const p = Number(part ?? 0);
    const t = Number(total ?? 0);
    if (!t || t <= 0) return '0%';
    return `${Math.round((p / t) * 100)}%`;
  }, []);

  const toggleAriaLabel = isOpen
    ? (techText.toggle?.closeAria ?? 'Ocultar panel de tendencias tecnológicas')
    : (techText.toggle?.openAria ?? 'Mostrar panel de tendencias tecnológicas');
  const toggleTitle = isOpen
    ? (techText.toggle?.closeTitle ?? 'Ocultar tendencias')
    : (techText.toggle?.openTitle ?? 'Ver tendencias tecnológicas');
  const footerText = techText.footer || {};
  const timeLocale = language === 'es' ? 'es-CO' : 'en-US';
  const lastUpdateText = lastUpdated
    ? `${footerText.lastUpdated ?? 'Última actualización'}: ${lastUpdated.toLocaleTimeString(
        timeLocale,
        {
          hour: '2-digit',
          minute: '2-digit',
        },
      )}`
    : (footerText.noData ?? 'Sin registros recientes');
  const intervalText = `${footerText.interval ?? 'Intervalo'}: ${Math.round(REFRESH_INTERVAL / 1000)}${
    footerText.secondsSuffix ?? 's'
  }`;
  const latencyText =
    typeof fetchMs === 'number' ? ` • ${footerText.latency ?? 'Latencia'} ~${fetchMs}ms` : '';
  const sourceText = ` • ${footerText.sourceLabel ?? 'Fuente'}: ${
    isFallback ? (footerText.sourceEstimated ?? 'estimada') : (footerText.sourceLive ?? 'en vivo')
  }`;
  const footerStatus = refreshing
    ? (footerText.syncing ?? 'Sincronizando...')
    : `${intervalText}${latencyText}${sourceText}`;

  return (
    <div className="tech-trends-root" aria-live="polite">
      <motion.button
        type="button"
        className={isOpen ? 'tech-trends-toggle tech-trends-toggle--active' : 'tech-trends-toggle'}
        onClick={toggleDashboard}
        aria-pressed={isOpen}
        aria-expanded={isOpen}
        aria-controls="tech-trends-panel"
        aria-label={toggleAriaLabel}
        title={toggleTitle}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        🧠
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.aside
            key="tech-trends-panel"
            className="tech-trends-panel"
            id="tech-trends-panel"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={panelVariants}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <header className="tech-trends-header">
              <div>
                <h2>{techText.header?.title ?? 'Tech Trends Dashboard'}</h2>
                <p className="tech-trends-meta">
                  {loading
                    ? (techText.header?.loading ?? 'Cargando datos en tiempo real...')
                    : (techText.header?.live ?? 'Panel actualizado en vivo')}
                </p>
                <div
                  className="tech-trends-kpis"
                  aria-label={techText.header?.kpisAria ?? 'Resumen de métricas clave'}
                >
                  <span className="tech-trends-kpi">
                    {(techText.header?.languages ?? 'Lenguajes') + ': '}
                    {formatCount(totalLanguages)}
                  </span>
                  <span className="tech-trends-kpi">
                    {(techText.header?.roles ?? 'Vacantes') + ': '}
                    {formatCount(totalRoles)}
                  </span>
                  <span className="tech-trends-kpi">
                    {(techText.header?.regions ?? 'Regiones') + ': '}
                    {regionsData.length}
                  </span>
                </div>
              </div>
              <button
                type="button"
                className="tech-trends-close"
                onClick={toggleDashboard}
                aria-label={techText.closeButton?.aria ?? 'Cerrar panel de tendencias'}
                title={techText.closeButton?.title ?? 'Cerrar panel'}
              >
                x
              </button>
            </header>

            <div className="tech-trends-body">
              <Suspense
                fallback={
                  <div className="tech-trends-section" aria-hidden="true">
                    <div className="tech-trends-section-header">
                      <h3>{techText.fallbackHeading ?? 'Cargando visualizaciones…'}</h3>
                    </div>
                    <div className="tech-trends-chart" />
                  </div>
                }
              >
                <TechTrendsCharts
                  languagesData={languagesData}
                  rolesData={rolesData}
                  regionsData={regionsData}
                  totalLanguages={totalLanguages}
                  totalRoles={totalRoles}
                  totalRegions={totalRegions}
                  languagesSummary={languagesSummary}
                  rolesSummary={rolesSummary}
                  regionsSummary={regionsSummary}
                  formatCount={formatCount}
                  pct={pct}
                  refreshing={refreshing}
                  isFallback={isFallback}
                  errorMessage={error && !isFallback ? error.message : ''}
                />
              </Suspense>
            </div>

            <footer className="tech-trends-footer">
              <span>{lastUpdateText}</span>
              <span>{footerStatus}</span>
            </footer>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
}
