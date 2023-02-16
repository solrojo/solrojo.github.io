describe('Statement', () => {
  beforeEach(() => {
    cy.visit('/')

    cy.get('[data-test-id="banner"]')
      .should('be.visible')
      .find('[data-test-id="open-modal"]')
      .should('be.visible')
      .click()
  })

  it('contain a text', () => {
    cy.get('[data-test-id="statement-text"]')
      .should('be.visible')
      .and('not.be.empty')
  })

  it('contain an action', () => {
    cy.get('[data-test-id="statement-action"]')
      .should('be.visible')
      .and('have.attr', 'href')
      .and('not.be.empty')
  })

  it('contain an image', () => {
    cy.get('[data-test-id="statement-image"]')
      .should('be.visible')
      .and('have.css', 'background-image')
      .and('not.be.empty')
  })
})

export {}
