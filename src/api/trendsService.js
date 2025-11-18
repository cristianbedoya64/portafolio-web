const GITHUB_SEARCH_BASE = 'https://api.github.com/search/repositories';
const JOB_BOARD_ENDPOINT = 'https://www.arbeitnow.com/api/job-board-api';
const REFRESH_LOOKBACK_DAYS = 7;

export const FALLBACK_TRENDS = {
  languages: [
    { name: 'JavaScript', value: 36 },
    { name: 'Python', value: 28 },
    { name: 'TypeScript', value: 22 },
    { name: 'Java', value: 18 },
    { name: 'Go', value: 14 },
  ],
  roles: [
    { name: 'Frontend', value: 26 },
    { name: 'Backend', value: 24 },
    { name: 'Full Stack', value: 22 },
    { name: 'DevOps', value: 18 },
    { name: 'Data Science', value: 16 },
  ],
  regions: [
    { name: 'Colombia', value: 18 },
    { name: 'Remote LATAM', value: 22 },
    { name: 'Global Remote', value: 32 },
  ],
};

export async function getTechTrends({ signal } = {}) {
  try {
    const [languages, jobs] = await Promise.all([
      fetchTrendingLanguages(signal),
      fetchJobBoardData(signal),
    ]);

    const roles = deriveRoleDemand(jobs);
    const regions = deriveRegionalTrends(jobs);

    return {
      data: {
        languages: languages.length ? languages : FALLBACK_TRENDS.languages,
        roles: roles.length ? roles : FALLBACK_TRENDS.roles,
        regions: regions.length ? regions : FALLBACK_TRENDS.regions,
      },
      isFallback: false,
    };
  } catch (error) {
    console.warn('TechTrendsDashboard falling back to static data', error);
    return {
      data: { ...FALLBACK_TRENDS },
      isFallback: true,
      error,
    };
  }
}

async function fetchTrendingLanguages(signal) {
  const sinceDate = new Date(Date.now() - REFRESH_LOOKBACK_DAYS * 24 * 60 * 60 * 1000)
    .toISOString()
    .split('T')[0];
  const query = `created:>${sinceDate}`;
  const searchUrl = `${GITHUB_SEARCH_BASE}?q=${encodeURIComponent(query)}&sort=stars&order=desc&per_page=50`;

  const response = await fetch(searchUrl, {
    headers: {
      Accept: 'application/vnd.github+json',
    },
    signal,
  });

  if (!response.ok) {
    throw new Error(`GitHub trending request failed with status ${response.status}`);
  }

  const payload = await response.json();
  const items = Array.isArray(payload?.items) ? payload.items : [];

  const counts = new Map();
  for (const repo of items) {
    if (!repo) continue;
    const language = repo.language || 'Other';
    counts.set(language, (counts.get(language) || 0) + 1);
  }

  if (!counts.size) {
    return [];
  }

  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([name, value]) => ({ name, value }));
}

async function fetchJobBoardData(signal) {
  const response = await fetch(JOB_BOARD_ENDPOINT, { signal });

  if (!response.ok) {
    throw new Error(`Job board request failed with status ${response.status}`);
  }

  const payload = await response.json();
  const jobs = Array.isArray(payload?.data) ? payload.data : [];

  if (!jobs.length) {
    throw new Error('Job board returned no entries');
  }

  return jobs.slice(0, 100);
}

function deriveRoleDemand(jobs) {
  if (!Array.isArray(jobs) || !jobs.length) {
    return [];
  }

  const categories = [
    { label: 'Frontend', pattern: /front[-\s]?end|ui\b/i },
    { label: 'Backend', pattern: /back[-\s]?end|api\b/i },
    { label: 'Full Stack', pattern: /full[-\s]?stack/i },
    { label: 'DevOps', pattern: /devops|sre|site reliability/i },
    { label: 'Data Science', pattern: /data\s+scientist|machine learning|ml|ai\b/i },
    { label: 'Mobile', pattern: /mobile|android|ios/i },
    { label: 'Security', pattern: /security|secops/i },
  ];

  const counts = categories.map((category) => ({ name: category.label, value: 0 }));
  let other = 0;

  for (const job of jobs) {
    const title = String(job?.title || job?.position || '').toLowerCase();
    if (!title) {
      other += 1;
      continue;
    }

    const matchedIndex = categories.findIndex((category) => category.pattern.test(title));
    if (matchedIndex >= 0) {
      counts[matchedIndex].value += 1;
    } else {
      other += 1;
    }
  }

  const filteredCounts = counts.filter((entry) => entry.value > 0);
  if (other > 0) {
    filteredCounts.push({ name: 'Other', value: other });
  }

  return filteredCounts.sort((a, b) => b.value - a.value).slice(0, 5);
}

function deriveRegionalTrends(jobs) {
  if (!Array.isArray(jobs) || !jobs.length) {
    return [];
  }

  const regionCounts = new Map();

  for (const job of jobs) {
    // Usar location y country, normalizar y agrupar por región única
    let region = (job?.location || job?.country || '').trim();
    if (!region) region = 'Desconocido';
    // Unificar variantes comunes
    if (/remote/i.test(region)) region = 'Remote';
    if (/colombia/i.test(region)) region = 'Colombia';
    if (/latam|latin america|south america|mexico|peru|chile|argentina|brazil/i.test(region))
      region = 'LATAM';
    // Capitalizar
    region = region.charAt(0).toUpperCase() + region.slice(1);
    regionCounts.set(region, (regionCounts.get(region) || 0) + 1);
  }

  return Array.from(regionCounts.entries())
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);
}
