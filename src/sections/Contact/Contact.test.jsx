import React from 'react';
import { screen } from '@testing-library/react';
import Contact from './index';
import { renderWithLanguage } from '../../tests/utils/renderWithLanguage.js';

describe('Contact section', () => {
  test('renderiza título y subtítulo', () => {
    renderWithLanguage(<Contact />);
    const title = screen.getByText(/Conectemos y creemos algo/i);
    expect(title).toBeInTheDocument();
    const subtitle = screen.getByText(/Estoy disponible para colaborar/i);
    expect(subtitle).toBeInTheDocument();
  });

  test('botones de contacto tienen aria-labels correctos', () => {
    renderWithLanguage(<Contact />);
    const linkedin = screen.getByLabelText(/Abrir mi perfil de LinkedIn en una nueva pestaña/i);
    const correo = screen.getByLabelText(/Enviar un correo electrónico/i);
    const github = screen.getByLabelText(/Abrir mi perfil de GitHub en una nueva pestaña/i);
    const whatsapp = screen.getByLabelText(/Abrir un chat de WhatsApp en una nueva pestaña/i);
    const cv = screen.getByLabelText(/Descargar mi currículum en PDF/i);

    expect(linkedin).toBeInTheDocument();
    expect(correo).toBeInTheDocument();
    expect(github).toBeInTheDocument();
    expect(whatsapp).toBeInTheDocument();
    expect(cv).toBeInTheDocument();
  });
});
