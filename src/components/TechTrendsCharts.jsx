import React from 'react';
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
import { useLanguage } from '../contexts/LanguageContext.jsx';

const BAR_COLORS = ['#38bdf8', '#2563eb', '#fbbf24', '#22d3ee', '#f59e0b'];
const PIE_COLORS = ['#38bdf8', '#fbbf24', '#22d3ee', '#a855f7'];

export default function TechTrendsCharts({
  languagesData,
  rolesData,
  regionsData,
  totalLanguages,
  totalRoles,
  totalRegions,
  languagesSummary,
  rolesSummary,
  regionsSummary,
  formatCount,
  pct,
  refreshing,
  isFallback,
  errorMessage,
}) {
  const { translations } = useLanguage();
  const chartsText = translations.techTrends?.charts || {};
  return (
    <>
      <section className="tech-trends-section">
        <div className="tech-trends-section-header">
          <h3>{chartsText.languagesTitle ?? '📊 Lenguajes de programación más demandados'}</h3>
          {refreshing && (
            <span className="tech-trends-status">
              {chartsText.languagesRefresh ?? 'Actualizando...'}
            </span>
          )}
        </div>
        <div className="tech-trends-chart">
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={languagesData} margin={{ top: 16, right: 12, left: -16, bottom: 4 }}>
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
                formatter={(value, name) => [
                  `${formatCount(value)} (${pct(value, totalLanguages)})`,
                  name,
                ]}
              />
              <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                {languagesData.map((entry, index) => (
                  <Cell key={`lang-${entry.name}`} fill={BAR_COLORS[index % BAR_COLORS.length]} />
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
                <span className="tech-trends-badge">{pct(item.value, totalLanguages)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="tech-trends-section">
        <div className="tech-trends-section-header">
          <h3>{chartsText.rolesTitle ?? '💼 Roles con más vacantes'}</h3>
          {isFallback && (
            <span className="tech-trends-status">
              {chartsText.rolesFallback ?? 'Datos estimados'}
            </span>
          )}
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
                formatter={(value, name) => [
                  `${formatCount(value)} (${pct(value, totalRoles)})`,
                  name,
                ]}
              />
              <Bar dataKey="value" radius={[0, 6, 6, 0]}>
                {rolesData.map((entry, index) => (
                  <Cell key={`role-${entry.name}`} fill={BAR_COLORS[index % BAR_COLORS.length]} />
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
                <span className="tech-trends-badge">{pct(item.value, totalRoles)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="tech-trends-section">
        <div className="tech-trends-section-header">
          <h3>{chartsText.regionsTitle ?? '🌍 Tendencias globales o por país (Colombia)'}</h3>
          {errorMessage && <span className="tech-trends-status">{errorMessage}</span>}
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
                formatter={(value, name) => [
                  `${formatCount(value)} (${pct(value, totalRegions)})`,
                  name,
                ]}
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
                  <Cell key={`region-${entry.name}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
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
                <span className="tech-trends-badge">{pct(item.value, totalRegions)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
