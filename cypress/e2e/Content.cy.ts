describe('Content', () => {
  it('should contain elements', () => {
    cy.visit('/')

    cy.contains('Greetings, my name is', { matchCase: false })

    cy.get('h1')
      .should('be.visible')
      .contains('Dmitri Korchemkin', { matchCase: false })

    cy.contains('I am', { matchCase: false })

    cy.get('h2')
      .should('be.visible')
      .contains('Front-End Developer', { matchCase: false })

    cy.contains('feel free to', { matchCase: false })

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
