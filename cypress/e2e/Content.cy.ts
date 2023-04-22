describe('Content', () => {
  it('should contain elements', () => {
    cy.visit('/')
    cy.get('[data-test-id="close-modal"]').click()
    cy.wait(300)

    cy.contains('Hi, my name is', { matchCase: false })

    cy.get('h1')
      .should('be.visible')
      .contains('Dmitri Korchemkin', { matchCase: false })

    cy.contains('I\'m', { matchCase: false }).should('be.visible')
    cy.get('mark').contains('Front-End Developer', { matchCase: false }).should('be.visible')
    cy.contains('feel free to', { matchCase: false }).should('be.visible')

    cy.get('[data-test-id="contact-me"]')
      .contains('Contact me', { matchCase: false })
      .should('have.attr', 'href')
      .should('match', /linkedin.com|krchmkn/)

    // TODO
    // cy.get('[data-test-id="portrait"]')
    //   .should('be.visible')
    //   .and('have.attr', 'src')
    //   .should('match', /face|webp/)
  })
})

export {}
