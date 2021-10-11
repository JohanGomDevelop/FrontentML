/* global describe, it, cy  */
describe('Prueba buscador', function () {
  it('Barra de busqueda', function () {
    cy.visit('/')
  })

  it('Navegar a una busqueda', function () {
    cy.visit('/items?search=juegos')
  })

  it('Navegar al detalle', function () {
    cy.visit('/item/MLA916577450')
  })
})
