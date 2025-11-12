import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';
import { renderWithLanguage } from '../../tests/utils/renderWithLanguage.js';

describe('Navbar', () => {
  test('renderiza marca y enlaces de navegación', () => {
    renderWithLanguage(<Navbar />);
    // Brand link (use visible text to avoid duplicate aria-labels)
    const brand = screen.getByText(/Cristian/i);
    expect(brand).toBeInTheDocument();

    // Navigation role exists
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });

  test('toggle de tema alterna la clase en <html> y persiste en localStorage', () => {
    localStorage.clear();
    renderWithLanguage(<Navbar />);
    const toggle = screen.getByRole('button', { name: /Alternar tema/i });
    expect(toggle).toBeInTheDocument();

    // default should not have light-theme unless pref is set
    expect(document.documentElement.classList.contains('light-theme')).toBe(false);

    fireEvent.click(toggle);

    expect(document.documentElement.classList.contains('light-theme')).toBe(true);
    expect(localStorage.getItem('theme')).toBe('light');
  });
});
