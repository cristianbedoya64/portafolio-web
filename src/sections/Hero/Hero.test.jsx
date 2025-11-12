import React from 'react';
import { screen } from '@testing-library/react';
import Hero from './Hero';
import { renderWithLanguage } from '../../tests/utils/renderWithLanguage.js';

describe('Hero section', () => {
  test('renderiza título, botón principal e imagen de perfil', () => {
    renderWithLanguage(<Hero />);
    const title = screen.getByText(/Hola, soy/i);
    expect(title).toBeInTheDocument();
    const cta = screen.getByRole('link', { name: /Ver proyectos/i });
    expect(cta).toBeInTheDocument();
    const img = screen.getByRole('img', { name: /Foto de perfil|Profile photo/i });
    expect(img).toBeInTheDocument();
  });
});
