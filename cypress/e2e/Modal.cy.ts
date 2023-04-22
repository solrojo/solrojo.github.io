import statement from '@/constants/statement'

describe('Modal', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should exist by default', () => {
    if (!statement.enabled) return;

    cy.get('[data-test-id="modal"]')
      .should('exist')
      .should('be.visible')
  })

  describe('should', () => {
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
