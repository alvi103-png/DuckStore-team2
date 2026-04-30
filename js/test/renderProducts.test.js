// @vitest-environment jsdom

import { describe, it, expect, beforeEach } from 'vitest'
import { renderpatitos } from '../renderProducts.js'

describe('renderpatitos', () => {

  beforeEach(() => {
  document.body.innerHTML = `<div id="catalog"></div>`
})

  it('renderiza el número correcto de patitos', () => {
    const mockPatitos = [
      { id: 1, nombre: 'Pato 1', precio: 10, imagen: 'img1.jpg', alt: 'pato1' },
      { id: 2, nombre: 'Pato 2', precio: 20, imagen: 'img2.jpg', alt: 'pato2' }
    ]

    renderpatitos(mockPatitos)

    const cards = document.querySelectorAll('.card')
    expect(cards.length).toBe(2)
  })

  it('muestra correctamente el nombre del patito', () => {
    const mockPatitos = [
      { id: 1, nombre: 'Pato Test', precio: 10, imagen: 'img.jpg', alt: 'pato' }
    ]

    renderpatitos(mockPatitos)

    const title = document.querySelector('.h2_catalog')
    expect(title.textContent).toBe('Pato Test')
  })

  it('muestra el precio con dos decimales', () => {
    const mockPatitos = [
      { id: 1, nombre: 'Pato', precio: 10, imagen: 'img.jpg', alt: 'pato' }
    ]

    renderpatitos(mockPatitos)

    const price = document.querySelector('.p_catalog')
    expect(price.textContent).toContain('10.00')
  })

})