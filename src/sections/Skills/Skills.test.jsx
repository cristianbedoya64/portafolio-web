import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import Skills from './index.jsx';
import { LanguageProvider } from '../../contexts/LanguageContext.jsx';
import { EffectsProvider } from '../../contexts/EffectsContext.jsx';

function renderSkills() {
  return render(
    <LanguageProvider initialLanguage="es">
      <EffectsProvider>
        <Skills />
      </EffectsProvider>
    </LanguageProvider>,
  );
}

describe('Skills interactive expansion', () => {
  it('expands a skill card on click and collapses on second click', async () => {
    renderSkills();
    // Find first skill title from translations: HTML
    const firstTitle = await screen.findByText(/HTML/i);
    const card = firstTitle.closest('.skills-item');
    expect(card).toBeTruthy();

    // collapsed: should show limited bullets
    expect(card.querySelectorAll('.skills-card-bullets li').length).toBeGreaterThan(0);

    // click to expand
    fireEvent.click(card);
    expect(card.getAttribute('aria-expanded')).toBe('true');

    // click to collapse
    fireEvent.click(card);
    expect(card.getAttribute('aria-expanded')).toBe('false');
  });
});
