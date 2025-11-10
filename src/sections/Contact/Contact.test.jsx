import React from 'react'
import { render, screen } from '@testing-library/react'
import Contact from './index'

describe('Contact section', () => {
  test('renderiza título y subtítulo', () => {
    render(<Contact />)
    const title = screen.getByText(/Conectemos y creemos algo/i)
    expect(title).toBeInTheDocument()
    const subtitle = screen.getByText(/Estoy disponible para colaborar/i)
    expect(subtitle).toBeInTheDocument()
  })

  test('botones de contacto tienen aria-labels correctos', () => {
    render(<Contact />)
    const linkedin = screen.getByLabelText(/Abrir mi perfil de LinkedIn/i)
    const correo = screen.getByLabelText(/Enviar correo electrónico/i)
    const github = screen.getByLabelText(/Abrir mi perfil de GitHub/i)
    const whatsapp = screen.getByLabelText(/Abrir chat de WhatsApp/i)

    expect(linkedin).toBeInTheDocument()
    expect(correo).toBeInTheDocument()
    expect(github).toBeInTheDocument()
    expect(whatsapp).toBeInTheDocument()
  })
})
