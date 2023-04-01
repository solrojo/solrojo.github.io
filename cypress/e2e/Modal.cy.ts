import statement from '@/constants/statement'

describe('Modal', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should not exist by default', () => {
    cy.get('[data-test-id="modal"]').should('not.exist')
  })

  describe('can be opened and', () => {
    if (!statement.enabled) return;

    beforeEach(()=> {
      cy.get('[data-test-id="banner"]')
        .should('be.visible')
        .find('[data-test-id="open-modal"]')
        .should('be.visible')
        .click()
    })

    it('contain sections', () => {
      cy.get('[data-test-id="modal"]').should('exist').and('be.visible')
      cy.get('[data-test-id="modal-header"]').should('be.visible')
      cy.get('[data-test-id="modal-content"]').should('be.visible')
    })

    it('can be closed', () => {
      cy.get('[data-test-id="modal"]')
        .find('[data-test-id="close-modal"]')
        .should('be.visible')
        .click()

      cy.get('[data-test-id="modal"]').should('not.exist')
    })
  })
})

export {}
