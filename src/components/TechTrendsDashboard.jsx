// Tech Trends Dashboard – Muestra métricas actualizadas del sector tecnológico con visualización animada y datos reales
import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import './TechTrendsDashboard.css';
import { FALLBACK_TRENDS, getTechTrends } from '../api/trendsService.js';

const REFRESH_INTERVAL = 30000;
const BAR_COLORS = ['#38bdf8', '#2563eb', '#fbbf24', '#22d3ee', '#f59e0b'];
const PIE_COLORS = ['#38bdf8', '#fbbf24', '#22d3ee', '#a855f7'];

const panelVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 40 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

export default function TechTrendsDashboard() {
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
      const result = await getTechTrends({ signal: controller.signal });
      if (!mountedRef.current) return;

      setTrends(result.data);
      setIsFallback(Boolean(result.isFallback));
      setError(result.isFallback ? (result.error ?? null) : null);
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

  useEffect(() => {
    mountedRef.current = true;
    fetchTrends({ initial: true });

    const intervalId = setInterval(() => {
      fetchTrends({ initial: false });
    }, REFRESH_INTERVAL);

    return () => {
      mountedRef.current = false;
      if (controllerRef.current) {
        controllerRef.current.abort();
      }
      clearInterval(intervalId);
    };
  }, [fetchTrends]);

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

  const languagesSummary = languagesData.slice(0, 3);
  const rolesSummary = rolesData.slice(0, 4);
  const regionsSummary = regionsData.slice(0, 4);

  const formatCount = useCallback((value) => {
    try {
      return new Intl.NumberFormat('es-CO', { maximumFractionDigits: 0 }).format(value ?? 0);
    } catch {
      return String(value ?? 0);
    }
  }, []);

  return (
    <div className="tech-trends-root" aria-live="polite">
      <motion.button
        type="button"
        className={isOpen ? 'tech-trends-toggle tech-trends-toggle--active' : 'tech-trends-toggle'}
        onClick={toggleDashboard}
        aria-pressed={isOpen}
        aria-expanded={isOpen}
        aria-controls="tech-trends-panel"
        aria-label={
          isOpen
            ? 'Ocultar panel de tendencias tecnológicas'
            : 'Mostrar panel de tendencias tecnológicas'
        }
        title={isOpen ? 'Ocultar tendencias' : 'Ver tendencias tecnológicas'}
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
                <h2>Tech Trends Dashboard</h2>
                <p className="tech-trends-meta">
                  {loading ? 'Cargando datos en tiempo real...' : 'Panel actualizado en vivo'}
                </p>
              </div>
              <button
                type="button"
                className="tech-trends-close"
                onClick={toggleDashboard}
                aria-label="Cerrar panel de tendencias"
                title="Cerrar panel"
              >
                x
              </button>
            </header>

            <div className="tech-trends-body">
              <section className="tech-trends-section">
                <div className="tech-trends-section-header">
                  <h3>📊 Lenguajes de programación más demandados</h3>
                  {refreshing && <span className="tech-trends-status">Actualizando...</span>}
                </div>
                <div className="tech-trends-chart">
                  <ResponsiveContainer width="100%" height={220}>
                    <BarChart
                      data={languagesData}
                      margin={{ top: 16, right: 12, left: -16, bottom: 4 }}
                    >
                      <CartesianGrid stroke="rgba(148, 163, 184, 0.25)" strokeDasharray="4 6" />
                      <XAxis
                        dataKey="name"
                        stroke="rgba(148, 163, 184, 0.8)"
                        tickLine={false}
                        axisLine={false}
                      />
                      <YAxis
                        stroke="rgba(148, 163, 184, 0.5)"
                        width={32}
                        tickLine={false}
                        axisLine={false}
                        allowDecimals={false}
                      />
                      <Tooltip
                        cursor={{ fill: 'rgba(59, 130, 246, 0.1)' }}
                        contentStyle={{
                          background: 'rgba(15, 23, 42, 0.9)',
                          border: '1px solid rgba(56, 189, 248, 0.4)',
                          borderRadius: 12,
                        }}
                        labelStyle={{ color: '#f8fafc' }}
                        itemStyle={{ color: '#fbbf24' }}
                      />
                      <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                        {languagesData.map((entry, index) => (
                          <Cell
                            key={`lang-${entry.name}`}
                            fill={BAR_COLORS[index % BAR_COLORS.length]}
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="tech-trends-summary">
                  <ul className="tech-trends-list">
                    {languagesSummary.map((item) => (
                      <li key={`languages-${item.name}`}>
                        <span className="tech-trends-list-name">{item.name}</span>
                        <span className="tech-trends-list-value">{formatCount(item.value)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section className="tech-trends-section">
                <div className="tech-trends-section-header">
                  <h3>💼 Roles con más vacantes</h3>
                  {isFallback && <span className="tech-trends-status">Datos estimados</span>}
                </div>
                <div className="tech-trends-chart">
                  <ResponsiveContainer width="100%" height={220}>
                    <BarChart
                      data={rolesData}
                      layout="vertical"
                      margin={{ top: 8, right: 12, left: 24, bottom: 8 }}
                    >
                      <CartesianGrid
                        stroke="rgba(148, 163, 184, 0.25)"
                        strokeDasharray="4 6"
                        horizontal={false}
                      />
                      <XAxis
                        type="number"
                        stroke="rgba(148, 163, 184, 0.5)"
                        axisLine={false}
                        tickLine={false}
                      />
                      <YAxis
                        type="category"
                        dataKey="name"
                        stroke="rgba(148, 163, 184, 0.8)"
                        axisLine={false}
                        tickLine={false}
                      />
                      <Tooltip
                        cursor={{ fill: 'rgba(15, 118, 110, 0.12)' }}
                        contentStyle={{
                          background: 'rgba(15, 23, 42, 0.9)',
                          border: '1px solid rgba(56, 189, 248, 0.4)',
                          borderRadius: 12,
                        }}
                        labelStyle={{ color: '#f8fafc' }}
                        itemStyle={{ color: '#38bdf8' }}
                      />
                      <Bar dataKey="value" radius={[0, 6, 6, 0]}>
                        {rolesData.map((entry, index) => (
                          <Cell
                            key={`role-${entry.name}`}
                            fill={BAR_COLORS[index % BAR_COLORS.length]}
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="tech-trends-summary">
                  <ul className="tech-trends-list">
                    {rolesSummary.map((item) => (
                      <li key={`roles-${item.name}`}>
                        <span className="tech-trends-list-name">{item.name}</span>
                        <span className="tech-trends-list-value">{formatCount(item.value)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section className="tech-trends-section">
                <div className="tech-trends-section-header">
                  <h3>🌍 Tendencias globales o por país (Colombia)</h3>
                  {error && !isFallback && (
                    <span className="tech-trends-status">{error.message}</span>
                  )}
                </div>
                <div className="tech-trends-chart">
                  <ResponsiveContainer width="100%" height={240}>
                    <PieChart>
                      <Tooltip
                        contentStyle={{
                          background: 'rgba(15, 23, 42, 0.9)',
                          border: '1px solid rgba(56, 189, 248, 0.4)',
                          borderRadius: 12,
                        }}
                        labelStyle={{ color: '#f8fafc' }}
                        itemStyle={{ color: '#38bdf8' }}
                      />
                      <Pie
                        data={regionsData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={90}
                        paddingAngle={4}
                      >
                        {regionsData.map((entry, index) => (
                          <Cell
                            key={`region-${entry.name}`}
                            fill={PIE_COLORS[index % PIE_COLORS.length]}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="tech-trends-summary">
                  <ul className="tech-trends-list">
                    {regionsSummary.map((item) => (
                      <li key={`regions-${item.name}`}>
                        <span className="tech-trends-list-name">{item.name}</span>
                        <span className="tech-trends-list-value">{formatCount(item.value)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            </div>

            <footer className="tech-trends-footer">
              <span>
                {lastUpdated
                  ? `Última actualización: ${lastUpdated.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`
                  : 'Sin registros recientes'}
              </span>
              <span>{refreshing ? 'Sincronizando...' : 'Intervalo automático: 30s'}</span>
            </footer>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
}
