/*
 * ragService.js
 * Lightweight RAG/embeddings client stub.
 * - Reads VITE_EMBEDDINGS_URL from env for remote embeddings (optional)
 * - Provides a simple `queryRAG` function that logs requests and returns a deterministic fallback using fixtures.
 * Note: replace placeholder network calls with your provider (OpenAI embeddings, HuggingFace, etc.) and secure API keys in secrets.
 */

const FALLBACK_DOCS = [
  { id: 'doc-1', title: 'Frontend performance best practices', text: 'Use <picture> for responsive images, defer non-critical JS, lazy-load charts and heavy vendors.' },
  { id: 'doc-2', title: 'Accessibility checklist', text: 'Use semantic HTML, ensure aria-labels for interactive controls, test keyboard navigation.' },
];

export async function queryRAG({ query, topK = 3, signal } = {}) {
  console.info('[ragService] queryRAG', { query, topK });
  const embeddingsUrl = import.meta.env.VITE_EMBEDDINGS_URL || '';

  try {
    if (embeddingsUrl) {
      // Example: call to embeddings provider (replace with real provider)
      const resp = await fetch(embeddingsUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input: query }),
        signal,
      });
      if (resp.ok) {
        const payload = await resp.json();
        console.info('[ragService] embeddings provider responded', { length: payload?.length });
        // This function should then run a vector search against an index; omitted for brevity.
      } else {
        console.warn('[ragService] embeddings provider failed', resp.status);
      }
    }
  } catch (err) {
    if (err.name === 'AbortError') {
      console.warn('[ragService] request aborted');
      return { documents: [], isFallback: true };
    }
    console.error('[ragService] error contacting embeddings provider', err);
  }

  // Deterministic fallback: simple string match ranking over FALLBACK_DOCS
  const scored = FALLBACK_DOCS.map((d) => ({
    ...d,
    score: (d.text + ' ' + d.title).toLowerCase().includes((query || '').toLowerCase()) ? 1 : 0,
  }));
  const sorted = scored.sort((a, b) => b.score - a.score).slice(0, topK);
  return { documents: sorted, isFallback: true };
}
