import React from 'react'
import { render, screen } from '@testing-library/react'
import Hero from './Hero'

describe('Hero section', () => {
  test('renderiza título y botón principal', () => {
    render(<Hero />)
    const title = screen.getByText(/Hola, soy/i)
    expect(title).toBeInTheDocument()
    const button = screen.getByRole('button', { name: /Ver Portafolio/i })
    expect(button).toBeInTheDocument()
  })
})
