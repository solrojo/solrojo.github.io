describe('Menu', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should not exist by default', () => {
    cy.get('[data-test-id="menu"]').should('not.exist')
  })

  describe('can be opened and', () => {
    beforeEach(()=> {
      cy.get('[data-test-id="open-menu"]')
        .should('be.visible')
        .click()

      cy.wait(300)
    })

    it('contain elements', () => {
      cy.get('[data-test-id="menuitem"]')
        .should('have.length.least', 1)
        .and('be.visible')
        .then(menuitem => {
          expect(menuitem.text()).not.be.empty
        })
        .find('a')
        .should('have.attr', 'href')
        .should('not.be.empty')
    })

    it('can be closed', () => {
      cy.get('[data-test-id="close-icon"]')
        .should('be.visible')
        .and('have.attr', 'src')
        .should('match', /burger|svg/)

      cy.get('[data-test-id="close-menu"]')
        .should('be.visible')
        .click()

      cy.get('[data-test-id="menu"]').should('not.exist')
    })

    it('can\'t be closed by click inside', () => {
      cy.get('[data-test-id="menu"]')
        .click('topLeft')
        .should('be.visible')
    })

    it('can be closed by click outside', () => {
      cy.get('h1').click('topLeft')
      cy.get('[data-test-id="menu"]').should('not.exist')
    })
  })
})

export {}
